import React from 'react';
import {Link, Redirect} from "react-router-dom";
import HeaderUser from "./components/header.users";


class Profile extends React.Component{
	state={
		 user: localStorage.getItem("waw_user") && JSON.parse(localStorage.getItem("waw_user")) || {data:{}},
		redirect_to_out: false,
		reload: false
	}

	submitHandle =(event)=>{
		event.preventDefault();
		window.http.post('/api/user/update', this.state.user, (resp)=>{
			localStorage.setItem("waw_user", JSON.stringify(resp));
		});
	}
	LogOut =(event)=>{
		event.preventDefault();							
		window.http.get('/api/user/logout', (resp)=>{
			 this.setState({redirect_to_out: true })
		})
	}

	 todataUrl =(fl, cb)=> {
			var a = new FileReader();
			a.onload = (e)=>{
				var target: any = e.target;
				cb(target.result);
			}
			a.readAsDataURL(fl);
		}
	changeAvatar =(e)=> {
			this.todataUrl(e.target.files[0], (dataUrl)=>{
					this.state.user.avatarUrl = dataUrl;
				window.http.post('/api/user/avatar', {
				dataUrl: dataUrl})
				this.setState({reload: true})
			});
	}

	
	render(){

		const { user, redirect_to_out } = this.state;	
		if(redirect_to_out){
			return <Redirect to='/'/>
		}
		return (<div>
					<HeaderUser admin={user.is.admin} avatar={user.avatarUrl}/>
					<div>Profile Setting</div>
				<hr/>
				<label>
					<input type="file" name="file" onChange={this.changeAvatar} accept="image/*" style={{display: 'none'}}/>
					<img src={user.avatarUrl}  width='55px' height='55px' alt="User Avatar"/>
				</label>

			<button type='submit' onClick={this.LogOut}>LOGOUT</button>
			<form>
				<div>
					<span>Name</span>
					<input type='text' defaultValue={user.name} placeholder="Your name"  onChange={(event)=>{user.name=event.target.value}} onBlur={this.submitHandle}/>
				</div>
				<div>
					<span>PHONE NUMBER</span>
					<input type='text'  defaultValue={user.data.phone} placeholder="Phone number" onChange={(event)=>{user.data.phone=event.target.value;}} onBlur={this.submitHandle}/>
				</div>
				<div>
					<span>LOCATION</span>
					<input type='text' name='location' defaultValue={user.data.location} placeholder="Your location" onChange={ (event)=>{user.data.location=event.target.value}} onBlur={this.submitHandle}/>
				</div>
				<div>
					<span>BIO</span>
		 			<textarea name="bio" cols="50" rows="7" defaultValue={user.data.bio} placeholder="Bio" onChange={(event)=>{user.data.bio=event.target.value}} onBlur={this.submitHandle}></textarea>
				</div>
			</form>
			</div>)
	}
}


export default Profile 
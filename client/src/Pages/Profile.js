import React from 'react';
import {Redirect} from "react-router-dom";
import HeaderUser from "./components/header.users";
import ArrowUp from '../assets/arrowup.png'
import './style_pages/profile.scss'


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
					<div >
						<HeaderUser admin={user.is.admin} avatar={user.avatarUrl}/>
					</div>
					<div className="profile-wrapper">
						<div className="profile">
						<div className="profile-header">Profile Settings</div>
						<div className="profile-body">
							<div className="profile-left">
								<div className="waw-input mb15">
									<span>Name</span>
									<input type="text" name="name" placeholder="Your name"  defaultValue={user.name}  onChange={(event)=>{user.name=event.target.value}} onBlur={this.submitHandle}/>
								</div>
								<div className="waw-input mb15">
									<span>Phone number</span>
									<input type="tel" name="number" placeholder="Phone number" defaultValue={user.data.phone} onChange={(event)=>{user.data.phone=event.target.value;}} onBlur={this.submitHandle}/>
								</div>
								<div className="waw-input mb15">
									<span>Location</span>
									<input type="text" name="location" placeholder="Your location"  defaultValue={user.data.location} onChange={ (event)=>{user.data.location=event.target.value}} onBlur={this.submitHandle}/>
								</div>
								<div className="waw-textarea">
									<span className="waw__label">Bio</span>
									<textarea className="_mh150" placeholder="Bio" defaultValue={user.data.bio} onChange={(event)=>{user.data.bio=event.target.value}} onBlur={this.submitHandle}></textarea>
								</div>
							</div>
							<div className="profile-right">
								<div className="profile-right__img">
									<img width="50" height="50" src={user.avatarUrl} alt="User Avatar"/>
									<label className="profile-right__img__upload">
										<img src ={ArrowUp} className="material-icons"/>
										<input type="file" name="file" onChange={this.changeAvatar} accept="image/*" style={{display: 'none'}}/>
									</label>
								</div>
								<div className="profile-logout">
									<button className="waw-btn _danger"  onClick={this.LogOut}>Logout</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>)
	}
}


export default Profile 


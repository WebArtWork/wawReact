import React from 'react';
import {Redirect} from "react-router-dom";
import HeaderUser from "../../../common/header/header";
import ArrowUp from "../../../assets/arrowup.png"
import DefaultAvatar from "../../../assets/user.png"
import './profile.scss'


class Profile extends React.Component{
	constructor(props){
		super(props);
		window.render.add('logout', ()=>{
			this.setState({reload: false});
		});
	}
	state={
		us: window.us,
		redirect_to_out: false,
		reload: false
	}

	submitHandle =()=>{
		this.state.us.update();
	}
	LogOut =(event)=>{
		 this.setState({redirect_to_out: true })
		this.state.us.logout();
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
			this.state.us.avatarUrl = dataUrl;
			window.http.post('/api/user/avatar', {
				dataUrl: dataUrl
			});
			this.setState({reload: true});
		});
	}
	render(){
		const { redirect_to_out, us } = this.state;	
		if(redirect_to_out){
			return <Redirect to='/'/>
		}
		return (<div>
					<div >
						<HeaderUser/>
					</div>
					<div className="profile-wrapper">
						<div className="profile">
						<div className="profile-header">Profile Settings</div>
						<div className="profile-body">
							<div className="profile-left">
								<div className="waw-input mb15">
									<span>Name</span>
									<input type="text" name="name" placeholder="Your name"  defaultValue={us.name}  onChange={(event)=>{us.name=event.target.value}} onBlur={this.submitHandle}/>
								</div>
								<div className="waw-input mb15">
									<span>Phone number</span>
									<input type="tel" name="number" placeholder="Phone number" defaultValue={us.data.phone} onChange={(event)=>{us.data.phone=event.target.value;}} onBlur={this.submitHandle}/>
								</div>
								<div className="waw-input mb15">
									<span>Location</span>
									<input type="text" name="location" placeholder="Your location"  defaultValue={us.data.location} onChange={ (event)=>{us.data.location=event.target.value}} onBlur={this.submitHandle}/>
								</div>
								<div className="waw-textarea">
									<span className="waw__label">Bio</span>
									<textarea className="_mh150" placeholder="Bio" defaultValue={us.data.bio} onChange={(event)=>{us.data.bio=event.target.value}} onBlur={this.submitHandle}></textarea>
								</div>
							</div>
							<div className="profile-right">
								<div className="profile-right__img">
									<img width="50" height="50" src={us.avatarUrl || DefaultAvatar  } alt="User Avatar"/>
									<label className="profile-right__img__upload">
										<img src ={ArrowUp} className="material-icons"/>
										<input type="file" name="file" onChange={this.changeAvatar} accept="image/*" style={{display: 'none'}}/>
									</label>
								</div>
								<div className="profile-logout">
									<button className="waw-btn _danger"  onClick={	this.LogOut}>Logout</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>)
	}
}


export default Profile 


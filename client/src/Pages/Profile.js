import React from 'react';
import {Link, Redirect} from "react-router-dom";

class Profile extends React.Component{
	state={
			name: '',
			phone:'',
			location:'',
			bio: '',
			img: '',
			redirect_to_out: false	
	}

	changeHandler =(event)=>{
				this.setState({[event.target.name]: event.target.value})
	}

	submitHandle =(event)=>{
		event.preventDefault();
		window.http.post('/api/user/update',this.state)
		// 	,  (resp)=>{
		// 		console.log("success")
		// 		this.setState({name: resp.name})
		// });
	}
	
	LogOut =(event)=>{
		event.preventDefault();							
		window.http.get('/api/user/logout', (resp)=>{
			 this.setState({redirect_to_out: true })
		})
	}

	

	render(){
		const {name,phone,location, bio,img, redirect_to_out} = this.state
		if(redirect_to_out){
			return <Redirect to='/'/>
		}
		return (<div>
			{<div>
				<Link to='admin/users'>Users</Link>
			</div> }

			<div>Profile Setting</div>
			<hr/>
			<img src={img} alt="Photo profile"/>
				<button type='submit' onClick={this.LogOut}>LOGOUT</button>
		
			<form>
				<div>
					<span>Name</span>
					<input type='text' name='name' value={name} placeholder="Your name" onChange={this.changeHandler} onBlur={this.submitHandle}/>
				</div>
				<div>
					<span>PHONE NUMBER</span>
					<input type='text' name='phone' value={phone} placeholder="Phone number" onChange={this.changeHandler} onBlur={this.submitHandle}/>
				</div>
				<div>
					<span>LOCATION</span>
					<input type='text' name='location' value={location} placeholder="Your location" onChange={this.changeHandler} onBlur={this.submitHandle}/>
				</div>
				<div>
					<span>BIO</span>
		 			<textarea name="bio" cols="50" rows="7" value={bio} placeholder="Bio" onChange={this.changeHandler} onBlur={this.submitHandle}></textarea>
				</div>
			</form>
			</div>)
	}
}


export default Profile 
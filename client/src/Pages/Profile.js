import React from 'react';
import {Link} from "react-router-dom";

class Profile extends React.Component{
	state={
		name: '',
		phone:'',
		location:'',
		bio: '',
		img: ''
	}

			changeHandler =(event)=>{
		this.setState({[event.target.name]: event.target.value})
	}

	submitHandle =(event)=>{
		event.preventDefault();
		console.log(this.state)
	}

	render(){

		const {name, phone, location, bio,img} = this.state


		return (<div>
			{<div>
				<Link to='users'>Users</Link>
			</div> }

			<div>Profile Setting</div>
			<hr/>
			<img src={img} alt="Photo profile"/>
				<button type='submit'><Link to="/">LOGOUT</Link></button>
			<form>
				<div>
					<span>Name</span>
					<input type='text' name='name' value={name} placeholder="Your number"/>
				</div>
				<div>
					<span>PHONE NUMBER</span>
					<input type='text' name='phone' value={phone} placeholder="Phone number"/>
				</div>
				<div>
					<span>LOCATION</span>
					<input type='text' name='location' value={location} placeholder="Your location"/>
				</div>
				<div>
					<span>BIO</span>
		 			<textarea name="bio" cols="50" rows="7" placeholder="Bio"></textarea>
				</div>
			</form>

			</div>)
	}
}


export default Profile 
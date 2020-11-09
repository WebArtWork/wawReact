import React from 'react';
import {Link} from "react-router-dom";

class Users extends React.Component{
	state ={
	//	data: {}
	}
	render(){
			window.http.post('/api/user/update',
				(resp) =>{
					console.log('success')
					this.setState({data: resp.json()})
				})
			console.log(this.state.data)
		return (<div>
			<p>List users</p>
			<div> 
				<Link to="/profile">Profile</Link>
			</div>
			</div>)
	}
}


export default Users 
import React from 'react';
import {Link} from "react-router-dom";

class Users extends React.Component{
	
	render(){
		// window.http.get('/api/user/status', (resp)=>{
		// 	window.http.get('/api/user/login',
		// 		(resp) =>{
		// 			console.log('success')
		// 			this.setState({data: resp.json()})
		// 		})
		// })

		return (<div>
			<p>List users</p>
			<div> 
				<Link to="/profile">Profile</Link>
			</div>
			</div>)
	}
}


export default Users 
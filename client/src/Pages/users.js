import React from 'react';
import {Link} from "react-router-dom";

class Users extends React.Component{
	
	render(){

		return (<div>
			<p>List users</p>
			<div> 
				<Link to="/profile">Profile</Link>
			</div>
			</div>)
	}
}


export default Users 
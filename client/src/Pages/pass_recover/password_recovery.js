import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class RecoveryPass extends Component{
	render(){
		return(<div>
					<div>Set New Password</div>
					<form>
						<div>
						 <div>EMAIL:</div>
						 <input type="text" placeholder="Code"/>
						</div>
						<div>
						 <div>PASSWORD:</div>
						 <input type="text" placeholder="New password"/>
						</div>
						<button>Save</button>
					</form>
					<div>
						<Link to='/'>Login</Link>
						<Link to='/singup'>Sing Up</Link>
					</div>
			</div>)
	}
} 
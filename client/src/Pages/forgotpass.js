import React, {Component} from 'react';
import {Link} from 'react-router-dom'


export default class ForgotPass extends  Component{
	state={
		email: 'ceo@webart.work'
	}

	changeHandler =(event)=>{
		this.setState({email: event.target.value})
	}


	render(){
		const {email} = this.state;
		return(
			<div>
				<div>Reset Password</div>
				<form onSubmit = {this.submitHandle} >
					<div>
						<span>EMAIL:</span>
						<input type="text" name="email" placeholder="email" value={email} onChange={this.changeHandler} />
					</div>
					<div><button>Continue</button></div>
				</form>
				<div>
					<Link to='/'>Login</Link>
					<Link to='/singup'>Sing Up</Link>
				</div>
			</div>)
	}
}
import React, {Component} from 'react';
import {Link, Redirect } from "react-router-dom";


export default class ForgotPass extends  Component{
	state={
		email: 'ceo@webart.work',
		confirmpass: false
	}

	changeHandler =(event)=>{
		this.setState({email: event.target.value})
	}

	submitHandle = (event)=>{
		event.preventDefault();
		window.http.post('/api/user/status', this.state, (resp)=>{
			if(resp.email){
				console.log('true')
				this.setState({confirmpass: true })
			 }
			else {
				alert("Your email is wrong")				
			}
		});
	}


	render(){
		const {confirmpass, email} = this.state;

		console.log(confirmpass)
		if(confirmpass){
			return <Redirect to='/forgotpass/recovery_pass'/>
		}
		return(

			<div className="auth-wrapper">
		<div className="auth">
			<div className="auth-title">Reset Password</div>
			<form className="auth-form" onSubmit = {this.submitHandle}>
				<div className="waw-input mb15">
					<span>Email:</span>
					<input  type="text" placeholder="Email" value={email} name="email" onChange={this.changeHandler} />
				</div>
				<div className="auth-form__btn"><button className="waw-btn _primary" type="submit">Continue</button></div>
			</form>
			<div className="auth-link">
				<Link to='/'>Login</Link>
				<Link to='/singup'>Sign up</Link>
			</div>
			</div>
	</div>)
	}
}



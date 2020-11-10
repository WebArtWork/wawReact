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
				this.setState({confirmpass: true })
			//	window.http.post('/api/user/request'  );
			// 		this.state, (resp)=>{
			// 		console.log('work')
			// 		 this.setState({confirmpass: true });
			// 	});
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
			<div>
				<div>Reset Password</div>
				<form onSubmit = {this.submitHandle} >
					<div>
						<span>EMAIL:</span>
						<input type="text" name="email" placeholder="email" value={email} onChange={this.changeHandler} />
					</div>
					<div><button type="submit">Continue</button></div>
				</form>
				<div>
					<Link to='/'>Login</Link>
					<Link to='/singup'>Sing Up</Link>
				</div>
			</div>)
	}
}
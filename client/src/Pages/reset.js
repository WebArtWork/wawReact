import React, {Component} from 'react';
import RecoverPass from './components/password_recovery';
import ForgotPassword from './components/forgot_pass';


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
				window.http.post('/api/user/request', {email: this.state.email})
				this.setState({confirmpass: true})

			 }
			else {
				alert("Your email is wrong")				
			}
		});
	}



	render(){
		const {confirmpass, email} = this.state;

		 if(!confirmpass){
			return <ForgotPassword 
				email = {email}
				submitHandle = {this.submitHandle.bind(this)}
				changeHandler = {this.changeHandler.bind(this)}/>
		}
		else{
			return <RecoverPass email ={this.state.email}/> 
		}


	}
}



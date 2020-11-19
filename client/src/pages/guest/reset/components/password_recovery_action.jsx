import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import Pass_Recover from "./pass_recovery";


export default class RecoveryPass extends Component{

	state={
		us: window.us,
		password: '',
		redirect: false
	}

	changePass=(event)=>{
		this.setState({password: event.target.value})
	}
	code=(event)=>{
		this.setState({code: event.target.value})
	}

	addChangePass=(event)=>{
		event.preventDefault();
		let code = parseInt(this.state.code) 
		let change_pass = {email: this.props.email, password: this.state.password, pin: code};
		window.http.post('/api/user/change', change_pass, (resp)=>{
			if(resp){
				alert(resp)
			 	this.setState({password: this.state.password});
			}
			else{
				alert(resp)
			}
		});
		window.http.post('/api/user/login', change_pass, (resp)=>{
			window.localStorage.setItem("waw_user", JSON.stringify(resp));
			this.setState({ redirect: true });
		});
	}

	render(){
		if(this.state.redirect){
			return <Redirect to='/profile'/>
		}
		return <Pass_Recover 
			addChangePass = {this.addChangePass} 
			changePass={this.changePass}
			code ={this.code}
			state={this.state}/>
		
	}
} 


import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";


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
		return(
			<div className="auth-wrapper">

				<div className="auth">
					<div className="auth-title">Set New Password</div>
					<form className="auth-form" onSubmit={this.addChangePass}>
						<div className="waw-input mb15">
							<span>Email:</span>
							<input type="text" placeholder="Code" name="code" onChange={this.code} />
						</div>
						<div className="waw-input mb15">
							<span>Password:</span>
							<input type="password" placeholder="New password" value={this.state.password} name="password" onChange={this.changePass}/>
						</div>
						<div className="auth-form__btn"><button className="waw-btn _primary" type="submit">Save</button></div>
					</form>
					<div className="auth-link">
						<Link to='/'>Login</Link>
						<Link to='/singup'>Sing up</Link>
					</div>
				</div>
			</div>)
	}
} 


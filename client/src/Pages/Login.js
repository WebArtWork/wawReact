import React from 'react';
import {Link, Redirect } from "react-router-dom";
import './style_pages/login.scss'

class Login extends React.Component{
	state={
		email: '',  //'ceo@webart.work
		password: '', //asdasdasdasd
		redirect: false,
		redirectsingup: false
	}


	changeHandler =(event)=>{
		this.setState({[event.target.name]: event.target.value})
	}
	submitHandle = (event)=>{
		event.preventDefault();
		window.http.post('/api/user/status', this.state, (resp)=>{
			if(resp.email && resp.pass){
				window.http.post('/api/user/login', this.state, (resp)=>{
					if(!resp.data) resp.data={};	
					window.localStorage.setItem("waw_user", JSON.stringify(resp));
					 this.setState({ redirect: true });
				});
			}else if(!resp.email){
					let acept = window.confirm("There is no such email"+'\n'+
						"You want to create an account?")
					if(acept){
						this.setState({ redirectsingup: true});
					}else{
						this.setState({ redirectsingup: false });
					}
					
			}else {
				alert("Your password is wrong")
			}
		});
	}
	render() {
		const {email, password,redirect, redirectsingup} = this.state;
		if(redirect){
			return <Redirect to='profile'/>
		}else if(redirectsingup){
			return <Redirect to='singup'/>
		}
		return(
			<div className="auth-wrapper">
				<div className="auth">
					<div className="auth-title">Log In</div>
					<form className="auth-form"  onSubmit = {this.submitHandle} >
					<div className="waw-input mb15">
						<span>EMAIL:</span>
					<input type="text" name="email" placeholder="email" value={email} onChange={this.changeHandler} />
					</div>
					<div className="waw-input mb15">
					<span>PASSWORD:</span>	
					<input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/>
					</div>
					<div className="auth-form__btn">
						<button className="waw-btn _primary" type="submit">Login</button> 
					</div>
				</form>
				<div className="auth-link">
					<Link to='reset'>Forgot password?</Link>
					<Link to='singup'>Don't have an account?</Link>
				</div>
				</div>
			</div>)
	}
}

export default Login
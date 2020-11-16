import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './style_pages/singup.scss'

class SingUp extends React.Component{
	state ={
		email: '',
		password: '',
		redirect: false
	}
	changeHandler =(event)=>{
		this.setState({[event.target.name]: event.target.value})
	}

	submitHandle =(event)=>{
		event.preventDefault();
		window.http.post('/api/user/status',{email: this.state.email}, (resp)=>{
			if(!resp.email){
				let user = {email: this.state.email, password: this.state.password}
				window.http.post('/api/user/signup', user,  (resp)=>{
				//	this.setState({redirect: true});
				});
				window.http.post('/api/user/login', user, (resp)=>{
					//if(!resp.data) resp.data={};	
					 this.setState({ redirect: true });
				});
			}
			else {
				alert("This email already exists")
			}
		});
	}
	render(){
		const {email, password, redirect} = this.state;
		if(redirect){
			return <Redirect to='profile'/>
		}
		return <div className="auth-wrapper">
					<div className="auth">
						<div className="auth-title">Sign up</div>
						<form className="auth-form" onSubmit ={this.submitHandle}>
							<div className="waw-input mb15">
								<span>Email:</span>
								<input  name="email" placeholder="email" value={email} onChange={this.changeHandler}/>
							</div>
							<div className="waw-input mb15">
								<span>Password:</span>
								<input  type="password" placeholder="Password" name="password" value={password} onChange={this.changeHandler}/>
							</div>
							<div className="auth-form__btn"><button className="waw-btn _primary" type="submit">Sign</button></div>
						</form>
						<div className="auth-link">
							<p>Already has an account?</p>
							<Link to='/'>Sign in</Link>
						</div>
					</div>
			</div>
	}
}



export default SingUp 
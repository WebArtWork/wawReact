import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class RecoveryPass extends Component{

	changePass=(event)=>{
		this.setState({pass: event.target.value})
	}

	addChangePass=(event)=>{
		event.preventDefault();
		window.http.post('/api/user/change', this.state, (resp)=>{
			this.setState({pass: this.state.pass})
			console.log('true'+ this.state.pass)
		})
	}
	render(){
		console.log(this.props.email)
		return(
			<div className="auth-wrapper">

				<div className="auth">
					<div className="auth-title">Set New Password</div>
					<form className="auth-form" onSubmit={this.addChangePass}>
						<div className="waw-input mb15">
							<span>Email:</span>
							<input type="text" placeholder="Code" name="code" />
						</div>
						<div className="waw-input mb15">
							<span>Password:</span>
							<input type="password" placeholder="New password" name="password" onChange={this.changePass}/>
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


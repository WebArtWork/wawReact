import React from 'react';
import {Link, Redirect } from "react-router-dom";


class Login extends React.Component{
	state={
		email: 'ceo@webart.work',
		password: 'asdasdasdasd',
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
				alert("Our email or password is wrong")
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
			<div>
					<div>Log In</div>
					<form onSubmit = {this.submitHandle} >
					<div>
						<span>EMAIL:</span>
					<input type="text" name="email" placeholder="email" value={email} onChange={this.changeHandler} />
					</div>
					<div>
					<span>PASSWORD:</span>	
					<input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/>
					</div>
						<button type="submit">Profile</button> 
				</form>
				 {/*console.log(redirect)*/}
				<div>
					<Link to='forgotpass'>Forgot password?</Link>
					<Link to='singup'>Don't have an account?</Link>
				</div>
		</div>)
	}
}

export default Login
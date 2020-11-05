import React from 'react';
import {Link} from "react-router-dom";
import { Redirect } from "react-router-dom";


class Login extends React.Component{
	constructor(props) {
		super(props);
	}
	state={
		email: 'ceo@webart.work',
		password: 'asdasdasdasd',
		redirect: ''
	}
	changeHandler =(event)=>{
		this.setState({[event.target.name]: event.target.value})
	}
	submitHandle = (event)=>{
		event.preventDefault();
		window.http.post('/api/user/status', this.state, (resp)=>{
			console.log(resp);
			if(resp.email && resp.pass){
				window.http.post('/api/user/login', this.state, (resp)=>{
					console.log('success');

					//window.location.href = "/profile";
					 this.setState({ redirect: "profile" });
				});
			}else if(!resp.email){
				alert('There is no such email')
					return this.setState({ redirect: "singup" });
				// Router.go('/sign');
			}else {
				alert("Our email or password is wrong")
			}
		});
	}
	render() {
		const {email, password} = this.state;
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
				<button type="submit"> <Redirect to={this.state.redirect}/>Profile</button> 
		</form>
		<div>
			<Link to='forgotpass'>Forgot password?</Link>
				<Link to='singup'>Don't have an account?</Link>
		</div>
		</div>
		)
	}
}

export default Login
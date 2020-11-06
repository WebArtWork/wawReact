import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class SingUp extends React.Component{
	state ={
		email: 'ceo@webart.work',
		password: 'asdasdasdasd',
		redirect: false
	}
	changeHandler =(event)=>{
		this.setState({[event.target.name]: event.target.value})
	}

	submitHandle =(event)=>{
		event.preventDefault();
			// let testemail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
			// console.log(testemail.test(this.state.email))
		window.http.post('/api/user/status',this.state, (resp)=>{
				console.log(resp)
			if(!resp.email){
				window.http.post('/api/user/signup',this.state,  (resp)=>{
					 this.setState({redirect: true });
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
		return (<div>
			<form onSubmit ={this.submitHandle}>
				<div>
						<span>EMAIL:</span>
					<input type="text" name="email" placeholder="email" value={email} onChange={this.changeHandler} />
					</div>
					<div>
					<span>PASSWORD:</span>	
					<input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/>
					</div>
					<div>
						 <button type="submit">Log Out</button>
					</div>
			</form>
			<div> Already has an account? <Link to='/'>Sign In</Link></div>
			</div>)
	}
}


export default SingUp 
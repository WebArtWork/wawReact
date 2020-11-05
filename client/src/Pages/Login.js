import React from 'react';


class Login extends React.Component{
	constructor(props) {
		super(props);
	}
	state={
		email: 'ceo@webart.work',
		password: 'asdasdasdasd'
	}
	changeHandler =(event)=>{
		this.setState({[event.target.name]: event.target.value})
		//	window.http.post();
	}
	submitHandle = (event)=>{
		event.preventDefault();
		window.http.post('/api/user/status', {
			email: this.state.email,
			pass: this.state.password
		}, (resp)=>{
			console.log(resp);
			if(resp.email && resp.pass){
				// do login
			}else if(!resp.email){
				// do signup
			}else {
				// alert that credentials incorrect
			}
		});
	}
	render() {
		const {email, password} = this.state;
		return(
			<div>
				<form onSubmit = {this.submitHandle} >
					<fieldset>
						<input type="text" name="email" placeholder="email" value={email} onChange={this.changeHandler} />	
						<input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/>
						<button type="submit"><a href='profile'>Profile</a></button>
						<button type="submit"><a href='singup'>SingUp</a></button>
					</fieldset>
				</form>
				{console.log(email, password)}
			</div>
		)
	}
}

export default Login
import React from 'react';


class Login extends React.Component{
	constructor(props) {
		super(props);
	}
	state={
		email: ' ',
		password: ' '
	}
	changeHandler =(event)=>{
		this.setState({[event.target.name]: event.target.value})
	}
	submitHandle = (event)=>{
		event.preventDefault();
	}

	render() {

			const {email, password} = this.state;
	return(
			<div>
			<form onSubmit = {this.submitHandle} >
			<fieldset>
		 				<input type="text" name="email"
		 				 value={email} 
		 				onChange={this.changeHandler} />	
		 				<input type="password" name="password"
		 				 value={password}
		 				  onChange={this.changeHandler}/>
 						<button type="submit">Ok</button>
 					</fieldset>
			</form>
			{console.log(email, password)}
			{/*alert(this.state.email + this.state.password)*/}
		</div>)
}
}

export default Login
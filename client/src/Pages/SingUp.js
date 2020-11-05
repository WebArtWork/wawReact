import React from 'react';
import {Link} from 'react-router-dom';

class SingUp extends React.Component{
	constructor(props){
		super()
	}
	state ={
		name:'',
		surname: '',
		email: '',
		password: ''
	}
	changeHandler =(event)=>{
		this.setState({[event.target.name]: event.target.value})
	}

	submitHandle =(event)=>{
		event.preventDefault();
		console.log(this.state)
	}
	render(){
		const {name,surname,email,password} = this.state;
		
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
				<button type='submit'>SingUp</button>
			</div>
			</form>
			<div> Already has an account? <Link to="/">Sign In</Link></div>
			</div>)
	}
}


export default SingUp 
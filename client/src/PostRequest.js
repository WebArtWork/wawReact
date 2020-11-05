import React from 'react';



class PostRequest extends React.Component{
	constructor(props){
		super(props)
}
	state = {
		email: 'ceo@gmail.com',
		password: 'admin',
		requestemeil: '',
		requestpas: ''
	}
	

		 componentWillMount(){
		 
 		// 		async function postData ( url = '', email, password){
			// 		const response = await fetch(url, {
			// 		method: 'POST',
			// 		headers: {
			// 			'Content-Type': 'application/json'
			// 		},
			// 		body: JSON.stringify({
			// 			email: this.state.email,
			// 			password: this.state.password
			// 		})
			// 	});
			// 			return await response.json();
			// }
	 	}


			


	changeHandler =(event)=>{
		this.setState({[event.target.name]: event.target.value})
	}
	submitHandle = (event)=>{
		event.preventDefault();
		//alert(this.state.email + '\n'+this.state.password)
			console.log(this.state)
			// const response =  fetch('/api/user/status', {
			// 		method: 'POST',
			// 		headers: {
			// 			'Content-Type': 'application/json'
			// 		},
			// 		body: JSON.stringify({
			// 			email: this.state.email,
			// 			password: this.state.password
			// 		})
			// 	});
				 const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
       		 email: this.state.email,
			password: this.state.password })
   		};
				fetch('/api/user/status', requestOptions) 
				 .then(response => response.json())
        		 .then((dataemail) => this.setState({ requestemeil: dataemail.email}));
        		// .then(datapas => this.setState({ requestpass: datapas.password }));
			// postData('/api/user/status', { status: 'ceo@gmail.com' })
  	// 			.then((data) => {
   // 				 console.log(data);
  	// 	});
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
			{console.log(this.state.requestemeil)}
		</div>)
}

}


export default PostRequest
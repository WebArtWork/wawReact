import React from 'react';


class LogIn extends React.Component{

	state = {
		login: "asdad",
		password: "sdfd"
	}


	render() {

	return(
		<div>
			<form>
			<fieldset>
					<label>
		 				<input type="text" defaultValue={this.state.login}/>
		 			</label>
		 			<label>
		 				<input type="password" defaultValue={this.state.password}/>
		 			</label>
 				<button>OK</button>
 					</fieldset>
			</form>
		</div>)
}
}

export default LogIn
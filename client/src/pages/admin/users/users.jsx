import React from 'react';
import HeaderUser from "../../../common/header/header";
import UserList from './components/users_list';
import GenerateUser from './components/generate_users';
import "./user.scss"


class Users extends React.Component{
		constructor(props){
		super(props);
	}
	state ={
		us: window.us,
		emeil: '',
		role: ['admin']
	}
	addNewUser=()=>{
		this.state.us.create(this.state.email)
	}
	handleAddNewUser=(event)=>{
		 this.setState({email: event.target.value})
	 }
	render(){
		const {role, us, users} = this.state;
		return (<div>
					<div> 
						<HeaderUser />
					</div>
					<div className="users">  
						<div className="table-wrapp">
								<table className="table" cellPadding="0" cellSpacing="0">
									<thead>
										<tr>
											<th scope="col">User</th>
											<th scope="col">Email</th>
											<th scope="col">Admin</th>
											<th scope="col">Actions</th>
										</tr>
									</thead>
									<UserList />
								</table>
							</div>
							<form  className="users-field">
								<div className="waw-input">
									<label>
						                <span>Add new user</span>
							            <input type="text" placeholder="Email" defaultValue={this.state.email}  onChange={this.handleAddNewUser}/>
							        </label>
						        </div>
						        <button  className="waw-btn _primary" type='submit' onClick={this.addNewUser}>CREATE</button>
							</form>
							<GenerateUser users={this.state.users}/>
						</div>
					</div>)
	}
}


export default Users 


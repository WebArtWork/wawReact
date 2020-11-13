import React from 'react';
import HeaderUser from './components/header.users';
import AddNewRole from './components/add_new_role';
import UserList from './components/user_list';
import GenerateUser from './components/generate_user';
import './style_pages/users.scss'


class Users extends React.Component{
	state ={
		user: localStorage.getItem("waw_user") && JSON.parse(localStorage.getItem("waw_user")) || {data:{}},
		users: [],
		emeil: '',
		role: ['admin'],
		// new_role: ''
	}
	componentDidMount(){
		window.http.get('/api/user/get', (resp) =>{
			this.setState({users: resp})
		})
	}
	deleteUser=(id)=>{
		const {users} = this.state;
		window.http.post('/api/user/deleteadmin', {_id: id});
		for(let i=0;i<users.length;i++){
			if(id === users[i]._id){
				users.splice(i, 1);
				break;
			}
		}
		this.setState({ users: users });
	}

	addNewUser=()=>{
			this.state.users.push(this.state.emeil)
		window.http.post('/api/user/create', {email: this.state.email},(resp)=>{
			this.setState({users: this.state.users})
		})
	}

	handleAddNewUser=(event)=>{
		 this.setState({email: event.target.value})

	  }
	// handleAddNewRole=(event)=>{
	// 	this.setState({new_role: event.target.value})

	// }
	// createNewRole=(event)=>{
	// 	event.preventDefault();	
	// 	 window.http.post('/api/user/update', {roles: this.state.role}, (resp)=>{
	// 	 	this.state.role.push(this.state.new_role);
	// 		this.setState({new_role: '',role: this.state.role})
	// 		console.log(this.state.new_role)
	// 	 });
	// }

	// deleteRoles (index){
	// 	 window.http.post('/api/user/update',{roles: this.state.role}, (resp)=>{
	// 		this.state.role.splice(index, 1)
	// 		this.setState({role: this.state.role})
	// 	 });
	
	// }
	render(){
		const {role, user, users} = this.state;
		// let roles = role.map((elem, index) =>{
		// 		return <AddNewRole key={index} 
		// 			index={index} 
		// 			new_roles={elem}
		// 			deleteRoles={this.deleteRoles.bind(this)}/>
		// });
		//  let  roles_head = role.map((elem, index)=>{
		//   	return <th key= {index} scope="col">{elem}</th>
		//   });
		return (<div>
					<div> 
						<HeaderUser avatar={user.avatarUrl}/>
					</div>
					<div className="users">  
						<div className="table-wrapp">
								<table className="table" cellPadding="0" cellSpacing="0">
									<thead>
										<tr>
											<th scope="col">User</th>
											<th scope="col">Email</th>
											<th scope="col">Admin</th>
											{/*role.length !== 0 ? roles_head : ''*/}
											<th scope="col">Actions</th>
										</tr>
									</thead>
									<UserList  users ={users} roles={role}  deleteUser ={this.deleteUser.bind(this)}/>
								</table>
							</div>
							{/*} <form onSubmit={this.createNewRole} className="users-field">
								<div className="waw-input">
									<label>
						                <span>Add new role</span>
							            <input type="text" placeholder ='Name' value={this.state.new_role}  onChange={this.handleAddNewRole} />
							        </label>
						        </div>
						        <button type='submit' className="waw-btn _primary">CREATE</button>
							</form>
							{roles}*/}
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


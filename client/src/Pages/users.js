import React from 'react';
import {Link} from "react-router-dom";
import HeaderUser from './components/header.users';
import Delete from '../assets/deleteButton.png';
import AddNewRole from './components/add_new_role';
import './style_pages/users.scss'


class Users extends React.Component{
	constructor(){
		super()
	}
	state ={
		user: localStorage.getItem("waw_user") && JSON.parse(localStorage.getItem("waw_user")) || {data:{}},
		users:[],
		emeil: '',
		role: [],
		new_role: ''
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
			if(id == users[i]._id){
				users.splice(i, 1);
				break;
			}
		}
		this.setState({ users: users });
	}

	addNewUser=()=>{
		window.http.post('/api/user/create', {email: this.state.email},(resp)=>{
			this.state.users.push(this.state.emeil)
			this.setState({users: this.state.users})
		})
	}

	handleAddNewUser=(event)=>{
		 this.setState({email: event.target.value})

	  }
	handleAddNewRole=(event)=>{
		this.setState({new_role: event.target.value})

	}
	createNewRole=(event)=>{
		event.preventDefault();	
		this.state.role.push(this.state.new_role)
			// window.http.post('/api/user/update', this.state.role, (resp)=>{
				this.setState({role: this.state.role})
		// });
	
	}

	deleteRoles (index){
		console.log(index+1)
		this.state.role.splice(index, 1)
		console.log(this.state.role)
		this.setState({role: this.state.role}) // не коректно працює
	}

	// checked =(checked)=>{
	// 		console.log('work')
	// 		return <input type="checkbox" />
	// }
	render(){
		let index=0;
		const {user, users} = this.state;

		const list = users.map((item,index)=>{
		return <tbody key ={index}>
				<tr>
					<td data-label="User">
						<div className="cl-table-clients">
		 	  		 		<div  className="cl-table-clients__img">
								<img src={item.avatarUrl} alt=""/>
							</div>
							<div class="cl-table-clients__info">
								<div class="cl-table-clients__name">{item.name}</div>
							</div>
						</div>
					</td>
					<td data-label="E-mail">
						{item.email}
					</td>
						{/*this is checkbox*/}
					<td>
					</td>
					<td >
					<div data-label="Actions">
						<button class="material-icons" style = {{width:'40px', height: '30px'}} onClick={this.deleteUser.bind(null, item._id)}> <img src={Delete} alt="Button Delete"  width='25px' height='25px'/></button></div>
					</td>
				</tr>
			</tbody>
		});

		let roles = this.state.role.map((elem, index) =>{
				return <AddNewRole key={index} 
					index={index} 
					new_roles={elem}
					deleteRoles={this.deleteRoles.bind(this)}/>
	
		})
		return (<div>
					<div> 
						<HeaderUser avatar={user.avatarUrl}/>
					</div>
					<div className="users">
						<div className="table-wrapp">
							<table className="table" cellpadding="0" cellspacing="0">
								<thead>
									<tr>
										<th scope="col">User</th>
										<th scope="col">Email</th>
										<th scope="col">{this.state.role}</th>
										<th scope="col">Actions</th>
									</tr>
								</thead>
									{list}
							</table>
						</div>
					</div>

				{/*Не відображається*/}
					 <form onSubmit={this.createNewRole}>
						<div>
			                <div>ADD NEW ROLE</div>
			                   <div>
				                   	<input type="text" placeholder ='Name' defaultValue={this.state.new_role} onChange={this.handleAddNewRole} />
				                   		<button type='submit'>CREATE</button>
			                   		{roles}
			               		</div>
						</div>	
					</form>
					<form>
						<div>
			                <div>ADD NEW USER</div>
				            <div>
				                <input type="text" placeholder="Email" defaultValue={this.state.email}  onChange={this.handleAddNewUser}/>
				                <button type='submit' onClick={this.addNewUser}>CREATE</button>
							</div>
						</div>
					</form>
				</div>)
	}
}


export default Users 


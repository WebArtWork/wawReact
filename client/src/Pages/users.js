import React from 'react';
import {Link} from "react-router-dom";
import HeaderUser from '../common/header.user';
import Delete from '../assets/deleteButton.png'
class Users extends React.Component{
	constructor(){
		super()
	}
	state ={
		user: localStorage.getItem("waw_user") && JSON.parse(localStorage.getItem("waw_user")) || {data:{}},
		users:[],
		emeil: ''
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
		window.http.post('/api/user/create', this.state.users,(resp)=>{
			this.state.users.push(this.state.emeil)
			this.setState({users: this.state.users})
		})
	}

	handleAddNewUser=(event)=>{
		this.setState({email: event.target.value})

	}
	render(){

		const {user, users} = this.state;
		const list = users.map((item,index)=>{
			return <div key ={index}>
		 	   <div>
					<img src={item.avatarUrl} alt="User Avatar"/>
					<div>{item.name}</div>
				</div>
				<div>{item.email}</div>
				<div>
				
				<button onClick={this.deleteUser.bind(null, item._id)}>
				<img src={Delete} alt="Button Delete"  width='25px' height='25px'/></button></div>
			</div>
		});
		return (<div>
			<div> 
			<HeaderUser avatar={user.avatarUrl}/>
				<div>
					<div>USER</div>
					<div>EMAIL</div>
					<div>ACTION</div>
				</div>
				 <div>
					{list}
				</div>
				<div>
                   <div>ADD NEW ROLE</div>
                   <div>
                   		<input type="text" placeholder ='Name'/>
                   		<button type='submit'>CREATE</button>
                   </div>
				</div>	
				<div>
                   <div>ADD NEW USER</div>
                   <div>
                   		<input type="text" placeholder="Email" defaultValue={this.state.email}  onChange={this.handleAddNewUser}/>
                   		<button type='submit' onClick={this.addNewUser}>CREATE</button>
                   </div>
				</div>	
			</div>
			<div>
			</div>
		</div>)
	}
}


export default Users 
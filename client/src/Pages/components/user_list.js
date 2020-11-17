import React from 'react';
import Delete from '../../assets/deleteButton.png';

import userService from '../../services/user.service';

export default class UserList extends React.Component{
	constructor(props){
		super(props);
		window.render.add('user list', ()=>{
			this.setState({reload: !this.state.reload});
		});
	}
	state={
		us: window.us,
		checked: false,
		reload: false
	}

	deleteUser =(id) =>{
		this.state.us.delete(id);			
		}
	changeRole=(user)=>{
			user.is.admin = !user.is.admin
		window.http.post('/api/user/updateadmin', user)
	 }
	render(){
		return window.us.users.map((user, index)=>{
			return <tbody key ={index}>
				<tr className='lowerborder'>
					<td data-label="User">
						<div className="cl-table-clients">
		 	  		 		<div  className="cl-table-clients__img">
								<img src={user.avatarUrl} alt=""/>
							</div>
							<div className="cl-table-clients__info">
								<div className="cl-table-clients__name">{user.name}</div>
							</div>
						</div>
					</td>
					<td data-label="E-mail">
						{user.email}
					</td>
					<td>
						<input type="checkbox" defaultChecked = {user.is.admin} onChange = {this.changeRole.bind(null, user)} />
					</td>
					<td >
					<div data-label="Actions">
						<img src={Delete} style = {{width:'30px', height: '25px'}} onClick={this.deleteUser.bind(null, user._id)} alt="Button Delete"/>
					</div>
					</td>
				</tr>
			</tbody>
		});
	}
} 
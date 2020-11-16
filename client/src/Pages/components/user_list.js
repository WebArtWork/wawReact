import React from 'react';
import Delete from '../../assets/deleteButton.png';

import userService from '../../services/user.service';

export default class UserList extends React.Component{

	state={
		checked: false
	}

	
	// changeRole=(user)=>{
	// 		user.is.admin = !user.is.admin
	// 	window.http.post('/api/user/updateadmin', user)
	// 	//window.user_service.role(user)
	//  }
	render(){
		return this.props.users.map((user, index)=>{
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
						<input type="checkbox" defaultChecked = {user.is.admin} onChange = {userService.changeRole.bind(null, user)} />
					</td>
					<td >
					<div data-label="Actions">
						<img src={Delete} style = {{width:'30px', height: '25px'}} onClick={this.props.deleteUser.bind(null, user._id)} alt="Button Delete"/>
					</div>
					</td>
				</tr>
			</tbody>
		});
	}
} 
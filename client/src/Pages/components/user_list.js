import React from 'react';
import Delete from '../../assets/deleteButton.png';

export default class UserList extends React.Component{
	// componentDidMount(){
	// 		window.http.get('/api/user/get', (resp) =>{
	// 		for(let i=0; i<resp.length; i++){
	// 				this.setState({users_is: resp[i].is})
	// 		}
	// 	})
	// }

	render(){
		let check = this.props.role.map((item,index)=>{
			return 	<td key ={index}>
						<input type="checkbox" /*{this.props.users_is.admin ? checked='false' : checked = 'true'} */ />
					</td>
		});
	return this.props.users.map((item,index)=>{
			return <tbody key ={index}>
				<tr className='lowerborder'>
					<td data-label="User">
						<div className="cl-table-clients">
		 	  		 		<div  className="cl-table-clients__img">
								<img src={item.avatarUrl} alt=""/>
							</div>
							<div className="cl-table-clients__info">
								<div className="cl-table-clients__name">{item.name}</div>
							</div>
						</div>
					</td>
					<td data-label="E-mail">
						{item.email}
						{/*this is checkbox*/}
					</td>
					{check}
					<td >
					<div data-label="Actions">
						<button className="material-icons" style = {{width:'40px', height: '30px'}} onClick={this.props.deleteUser.bind(null, item._id)}> <img src={Delete} alt="Button Delete"  width='25px' height='25px'/></button></div>
					</td>
				</tr>
			</tbody>
		});
	}
} 
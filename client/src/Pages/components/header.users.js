import {Link} from "react-router-dom";
import Company from "../../assets/logo.png"
import '../style_pages/header_users.scss'

export default function HeaderUser(props){
	const us = window.us;
	// console.log(us.is.admin)
	return ( 
	<div className="topbar">
		<div className="topbar-left">
			{us.is.admin ?  <Link className="topbar__link" to='/admin/users'>Users</Link> : ''}
		</div>
		<div className="topbar-right">
			<Link className="topbar__link _img" to="/profile">
				<img  className="profile-img" src={us.avatarUrl} alt='User Avatar'/>
			</Link>
		</div>
	</div>)
}

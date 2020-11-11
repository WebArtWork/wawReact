import {Link} from "react-router-dom";
import Company from "../../assets/logo.png"
import '../style_pages/header_users.scss'

export default function HeaderUser(props){
		return ( 
				<div className="topbar">
					<div className="topbar-left">
						{props.admin ?  <Link className="topbar__link" to='/admin/users'>Users</Link> : ''}
					</div>
					<div className="topbar-center">
						<Link className="topbar__link _img" to="/profile">
							<img className="logo-img" src={Company} alt="Company"/>
						</Link>
						
					</div>
					<div className="topbar-right">
						<Link className="topbar__link _img" to="/profile">
						<img  className="profile-img" src={props.avatar} alt='User Avatar'/>
						</Link>
					</div>
				</div>)
}


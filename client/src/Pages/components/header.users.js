import {Link} from "react-router-dom";
import Company from "../../assets/logo.png"

export default function HeaderUser(props){
		return ( <div>
				{props.admin ?  <Link to='/admin/users'>Users</Link> : ''}
  				<div><img src={Company} width='55px' height="55px" alt="Company"/></div>
  				<label>
  				<Link to="/profile"><div><img src={props.avatar} width='55px' height='55px' alt='User Avatar'/></div></Link>
  				</label>
			</div>
		)
}
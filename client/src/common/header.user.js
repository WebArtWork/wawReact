import {Link} from "react-router-dom";

export default function HeaderUser(admin, avatar){
		return ( <div>
				{admin.admin ?  <Link to='/admin/users'>Users</Link> : ''}
  				<div><img src='' alt="Company"/></div>
  				<div><img src={admin.avatar} alt="User Avatar"/></div>
			</div>
		)
}
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class Profile extends React.Component{
	render(){
		return (<div>
			<p>sdfsdfsdf</p>
			<button type='submit'><Link to="/">Back to Login</Link></button>
			</div>)
	}
}


export default Profile 
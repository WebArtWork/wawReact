import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import http from './services/http.service';


import Login from './pages/login';
import SingUp from './pages/singup';
import Profile from './pages/profile';


export default class App extends Component {
	constructor(props){
		super(props);
		http();
	}
	render() { 
		
		return(
			<div>
			<Router>
				
				<Switch>
					<Route exact path="/" component ={Login}/>
					<Route path="/singup" component ={SingUp}/>
					{/*<Route path="/admin/users" component ={Users}/>*/}
					<Route path="/profile" component ={Profile}/>
				
				</Switch>
				{/*	<nav>
						<button><Link to='/singup'>SingUp</Link></button>
						<button><Link to='/profile'>Profile</Link></button>
					</nav>*/}
		</Router>
		</div>)}
 }

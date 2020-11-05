import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import http from './services/http.service';


import Login from './pages/login';
import SingUp from './pages/singup';
import Profile from './pages/profile';
 import Users from './pages/users';
import ForgotPass from './pages/forgotpass';


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
					<Route path="/users" component ={Users}/>
					<Route path="/profile" component ={Profile}/>
					<Route path="/forgotpass" component ={ForgotPass}/>
				</Switch>
		</Router>
		</div>)}
 }

import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import http from './services/http.service';
import './app.scss'

import Login from './pages/login';
import SingUp from './pages/singup';
import Profile from './pages/profile';
 import Users from './pages/users';
import ForgotPass from './pages/reset';





export default class App extends Component {
	constructor(props){
		super(props);
		http();
	}

	render() { 
		
		return(<Router>
				<Switch>
					<Route exact path="/" component ={Login}/>
					<Route exact path="/singup" component ={SingUp}/>
					<Route path="/admin/users" component ={Users}/>
					<Route exact path="/profile" component ={Profile}/>
					<Route exact path="/reset" component ={ForgotPass}/>
				</Switch>
		</Router>)}
 }

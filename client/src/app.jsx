import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import http from './services/http.service';
import user from './services/user.service';
import render from './services/render.service';
//import userService from './services/user.service'
import './app.scss'

import Login from './pages/login';
import SingUp from './pages/singup';
import Profile from './pages/profile';
 import Users from './pages/users';
import ForgotPass from './pages/reset';





export default class App extends Component {
	constructor(props){
		super(props);
		render();
		http();
		user();
	}

	render() { 
		
		return(<Router>
				<Switch>
					<Route exact path="/" component ={Login}/>
					<Route  path="/singup" component ={SingUp}/>
					<Route path="/admin/users" render={()=><Users/>}/>
					<Route  path="/profile" component ={Profile}/>
					<Route  path="/reset" component ={ForgotPass}/>
				</Switch>
		</Router>)}
 }

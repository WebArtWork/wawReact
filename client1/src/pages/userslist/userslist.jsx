import React from "react";
const us = require('../../services/user.service');

export default class UsersList extends React.Component {
  state = {
    users: us.users,
    name: '',
  };

  addUser = event => {
    event.preventDefault();
    us.create(this.state.name, resp => {
      this.setState({
        'users': resp,
        'name': ""
      });
    });
  };

  deleteUser = id => {
    us.deleteUser(id, resp => {
      this.setState({
        'users': resp
      });
    });
  };


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="main">
          <form className="todo_form" onSubmit={this.addUser}>
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="write name"
            />
            <button>add user</button>
          </form>
          {this.state.users.length?(this.state.users.map(user => (<div key={user.id.toString()}>{user.name}<button onClick={() => {this.deleteUser(user.id)}}>x</button></div>))):(<div className="no_todos"><img alt="" src="/api/user/default.png"></img></div>)}
      </div>
    );
  }
}

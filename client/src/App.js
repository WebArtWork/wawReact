import React, { Component } from "react";
import "./App.css";
import UsersList from "./pages/userslist/userslist";

class App extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div className="App">
        <UsersList />
      </div>
    );
  }
}

export default App;

import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      done: false
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form className="todo_form" onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="write todo"
        />
        <button onClick={this.handleSubmit}>add todo</button>
      </form>
    );
  }
}

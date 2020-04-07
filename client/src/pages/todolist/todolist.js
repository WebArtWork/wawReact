import React from "react";
import TodoForm from "./todoform";
import Todo from "./todo";


export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllDone: true
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleDone = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };


  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.done);
    } else if (this.state.todoToShow === "done") {
      todos = this.state.todos.filter(todo => todo.done);
    }

    return (
      <div className="main">
        <TodoForm  onSubmit={this.addTodo} />

        {<div>
          <button className="main_btn" style={{
            background: this.state.todoToShow === "all"?"lightgrey":""
          }} onClick={() => this.updateTodoToShow("all")}>all</button>
          <button className="main_btn" style={{
            background: this.state.todoToShow === "active"?"lightgrey":""
          }} onClick={() => this.updateTodoToShow("active")}>
            active
          </button>
          <button className="main_btn" style={{
            background: this.state.todoToShow === "done"?"lightgrey":""
          }} onClick={() => this.updateTodoToShow("done")}>
            done
          </button>
        </div>}
        
        {todos.length?(todos.map(todo => (
          <Todo
            key={todo.id}
            toggleDone={() => this.toggleDone(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))):(<div className="no_todos">No todos</div>)}
        
      </div>
    );
  }
}

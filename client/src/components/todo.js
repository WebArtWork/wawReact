import React from "react";

export default props => (
  <div className="todo">
    <div style={{display:"flex"}}>
    <input  type="checkbox" onClick={props.toggleDone} />
    <div className="todo_content"
      style={{
        textDecoration: props.todo.done ? "line-through" : ""
      }}>
      {props.todo.text}
    </div>
    </div>
    <button onClick={props.onDelete}>x</button>
  </div>
);

import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [], setTodos, dispatch}){

    return (
      <div>
        {todos.map((p,i) => (
          <Todo {...p} dispatch={dispatch} index={i} key={"todo-" + i}/>
        ))}

      </div> 
    );
}



import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [], dispatch}){

    return (
      <div>
        {todos.map((p,i) => (
          <Todo {...p} dispatch={dispatch} index={i} key={"todo-" + i} todos={todos}/>
        ))}

      </div> 
    );
}



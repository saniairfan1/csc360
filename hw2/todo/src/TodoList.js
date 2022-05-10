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


//To Do List
//Title   checkbox   datestarted   dateCompleted 


//To Do 


//Create ToDo 
//form that takes in input and displays it above 


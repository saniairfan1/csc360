import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [], setTodos}){

  //update todo, know which todo to update, and what data needs to be updt
  function updateTodo(index, newTodo){
    const updatedState = [...todos]
    updatedState[index] = newTodo

    setTodos(updatedState)

  }
    return (
      <div>
        {todos.map((p,i) => (
          <Todo {...p} updateTodo={updateTodo} index={i} key={"todo-" + i}/>
        ))}

      </div> 
    );
}


//To Do List
//Title   checkbox   datestarted   dateCompleted 


//To Do 


//Create ToDo 
//form that takes in input and displays it above 


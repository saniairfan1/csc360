import React, {useState,useReducer} from "react";
import TodoList from "./TodoList";
import UserBar from "./UserBar";
import CreateTodo from "./CreateTodo";
import appReducer from "./reducers";


function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] });
  
  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch}/>
      {state.user && <CreateTodo user={state.user} todos={state.todos} dispatch={dispatch} />}
      <TodoList todos={state.todos} />
    </div>
    
  )

}
  
export default App;

//2:11:02

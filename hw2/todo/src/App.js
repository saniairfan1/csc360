import React, {useReducer, useEffect} from "react";
import TodoList from "./TodoList";
import UserBar from "./UserBar";
import CreateTodo from "./CreateTodo";
import appReducer from "./reducers";


function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] });
  
  useEffect(() => {
    if (state.user) {
    document.title = `${state.user}’s Blog`
    } else {
    document.title = 'Blog'
    }
  }, [state.user])

  useEffect(() => {
    console.log('post effect hook firing')
  }, [state.posts])

  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} todos={state.todos}/>
      {state.user && <CreateTodo dispatch={dispatch} />}
      {state.user && <TodoList todos={state.todos} dispatch={dispatch} />}
    </div>
  )
  

}
  
export default App;

//2:11:02

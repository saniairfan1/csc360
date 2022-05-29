import React, {useReducer, useEffect, createContext} from "react";
import { useResource } from "react-request-hook";
import TodoList from "./TodoList";
import UserBar from "./UserBar";
import CreateTodo from "./CreateTodo";
import appReducer from "./reducers";
import Header from './Header';

function App() { 

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] });
  //pass it state, obj, num anything
  //const ThemeContext = createContext({primary:"blue"});

  // //when this page loads have it fire a request for a post from the backend 
  // useEffect(() => {
  //   fetch('/api/todos')
  //     .then(result => result.json())
  //     .then(todos => dispatch({ type: 'FETCH_TODOS', todos }))
  //   }, [])
  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  useEffect(getTodos, [])

  useEffect(() => {
  if (todos && todos.data) {
  dispatch({ type: 'FETCH_TODOS', todos: todos.data })
  }
  }, [todos])

  useEffect(() => {
    if (state.user) {
    document.title = `${state.user}’s Blog`
    } else {
    document.title = 'My Blog'
    }
  }, [state.user])

  useEffect(() => {
    console.log('post effect hook firing')
  }, [state.posts])

  return (
    <div>
      <ThemeContext.Provider value={{primary: "red"}}>
        <Header text="My Blog" />
      </ThemeContext.Provider>
      <UserBar user={state.user} dispatch={dispatch} todos={state.todos}/>
      {state.user && <CreateTodo dispatch={dispatch} />}
      {state.user && <TodoList todos={state.todos} dispatch={dispatch} />}
    </div>
  )
  
}

export const ThemeContext = createContext({primary:"blue"})
export default App;


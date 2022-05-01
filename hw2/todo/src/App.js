
import TodoList from "./TodoList";
import UserBar from "./UserBar";
import CreateTodo from "./CreateTodo";
import React, {useState} from "react";

function App() {
  const [user, setUser] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <UserBar user={user} setUser={setUser}/>
      {user && <CreateTodo user={user} todos={todos} setTodos={setTodos} />}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
    
  )

}
  
export default App;

//2:11:02

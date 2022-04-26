
import TodoList from "./TodoList";
import UserBar from "./UserBar";
import CreateTodo from "./CreateTodo";
import React, {useState} from "react";

function App() {
  const [user, setUser] = useState("");
  return (
    <div>
      <UserBar user={user} setUser={setUser}/>
      <CreateTodo/>
    </div>
    
  )

}
  
export default App;

import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import TodoList from "./TodoList";

export default function UserBar({user, setUser}) {

  if (user) { 
    return (
      <>
      <Logout user={user} setUser={setUser} />
      <TodoList/>
      </>
    )
  } else {
    return (
      <>
        <Login setUser={setUser} />
        <Register setUser={setUser} />
      </>
    );
  }
}
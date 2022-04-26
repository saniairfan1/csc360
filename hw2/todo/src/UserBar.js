import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import TodoList from "./TodoList";

export default function UserBar() {
  
  const user = "Sania";
  //if user is a non empty string, "" is empty string
  if (user) {
    return (
      <>
      <Logout user={user} />
      <TodoList/>
      </>
    )
  } else {
    return (
      <>
        <Login/>
        <Register/>
      </>
    );
  }
}
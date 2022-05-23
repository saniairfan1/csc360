import React, { useState, useEffect, useContext } from "react";
//import the context from ./app 
import { ThemeContext } from "./App";

export default function Login({ dispatch }) {
    const [ username, setUsername ] = useState("")
    function handleUsername (evt) { setUsername(evt.target.value) }
    //context
    const theme = useContext(ThemeContext)

    useEffect(() => {
        console.log(username)
        return () => console.log("component removed from DOM")
    })

    return (
        <form onSubmit={(e) => {e.preventDefault(); dispatch({type: 'LOGIN',username})} }>
            <label style={{color:theme.primary}} htmlFor="login-username">Username:</label>
            <input type="text" value={username} onChange={handleUsername}
            name="login-username" id="login-username" />
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" />
            <input type="submit" value="Login" disabled={username.length ===0 || Login.length === 0} />
        </form>
    );
}
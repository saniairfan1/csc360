import React from "react";
import { useResource } from "react-request-hook";

export default function Todo({ title, desc, dateCreated,dateCompleted,complete, index, dispatch, todos}) {
  function handleChecked(evt) {
      dispatch({type:'TOGGLE_TODO', title, desc, dateCreated, dateCompleted: Date(Date.now()), complete: evt.target.checked, index});
  }
  const [todo, deleteTodo] = useResource(({ index,title, desc, dateCreated, complete, dateCompleted}) => ({
    url: '/todos',
    method: 'delete',
    data: { index, title, desc, dateCreated, complete, dateCompleted}
}))
  function handleDelete(){
    deleteTodo({index, title, desc, dateCreated, dateCompleted, complete});
    dispatch({type: 'DELETE_TODO', index})
  }

  return (
      <div>
          <h1>{title}</h1>
          <label htmlFor="complete-checkbox">Complete Task:</label>
          <input type="checkbox" name="complete-checkbox" value={complete} onChange={handleChecked}/><br></br>
          <p>{desc}</p>
          <div>Complete: {complete}</div>
          <div>Date Created: {dateCreated}</div>
          <div>Date Completed: {dateCompleted}</div>
          <input type="button" value="delete" onClick={handleDelete}></input>
          <div></div>
      </div>
  )
}
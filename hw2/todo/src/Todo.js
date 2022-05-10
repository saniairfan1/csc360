import React from "react";

export default function Todo({ title, desc, dateCreated,dateCompleted,complete, index, dispatch,deleted}) {
  function handleChecked(evt) {
      dispatch({type:'TOGGLE_TODO', title, desc, dateCreated, dateCompleted: Date(Date.now()), complete: evt.target.checked, index, deleted});
  }
  function handleDeleted() {
    dispatch({type:'DELETE_TODO', index});
}

  return (
      <div>
          <h1>{title}</h1>
          <label htmlFor="complete-checkbox">Complete Task:</label>
          <input type="checkbox" name="complete-checkbox" value={complete} onChange={handleChecked}/><br></br>
          <label htmlFor="delete-checkbox">Delete Task:</label>
          <input type="checkbox" name="delete-checkbox" value={deleted} onChange={handleDeleted}/>
          <p>{desc}</p>
          <div>Complete: {complete}</div>
          <div>Date Created: {dateCreated}</div>
          <div>Date Completed: {dateCompleted}</div>
          <div></div>
      </div>
  )
}
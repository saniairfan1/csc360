import React from "react";

export default function Todo({ title, desc, dateCreated,dateCompleted,complete, updateTodo, index}) {
  function handleChecked(evt) {
      const newTodo = {
          title,
          desc,
          dateCreated,
          dateCompleted: Date(Date.now()),
          complete: evt.target.checked,
      }
      updateTodo(index,newTodo)
    }

    
  return (
      <div>
          <h1>{title}</h1>
          <label htmlFor="complete-checkbox">Complete Task:</label>
          <input type="checkbox" name="complete-checkbox" value={complete} onChange={handleChecked}/>
          <p>{desc}</p>
          <div>Complete: {complete}</div>
          <div>Date Created: {dateCreated}</div>
          <div>Date Completed: {dateCompleted}</div>
          <div></div>
      </div>
  )
}
import React, {useState} from "react";

export default function Todo({ title, desc}) {

  const date = new Date().toLocaleDateString()
  
  const dateCreated = date
  const dateCompleted = date
  
  const [ checked, setChecked ] = useState(false)
  function handleChecked(evt) {
      setChecked(evt.target.checked)
      
  }

  return (
      <div>
          <h1>{title}</h1>
          <label htmlFor="complete-checkbox">Complete Task:</label>
          <input type="checkbox" name="complete-checkbox" checked={checked} onChange={handleChecked}/>
          <p>{desc}</p>
          <div>{"Date Created: " + dateCreated}</div>
       
          <div>Date Completed: {checked === true ? dateCompleted: ""}</div>
      </div>
  )
}
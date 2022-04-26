import React from "react";

export default function Todo({title,desc,dateCreated,complete,dateCompleted}){
    return (
      <>
        <h2>{title}</h2>
        <div>{desc}</div>
        <br></br>
        <div>{complete}</div>
        <div>{dateCreated}</div>
        <div>{dateCompleted}</div>
      </>
    );
}


//To Do List
//Title   checkbox   datestarted   dateCompleted 




//Add a new To do 
//form that takes in input and displays it above 
import React, {useState} from "react";
import { useResource } from "react-request-hook";

export default function CreateTodo({ dispatch}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    function handleTitle (evt) {setTitle(evt.target.value)}
    function handleDesc (evt) {setDesc(evt.target.value)}

    const [todo , createTodo ] = useResource(({ title, desc, dateCreated, complete, dateCompleted}) => ({
        url: '/todos',
        method: 'post',
        data: { title, desc, dateCreated, complete, dateCompleted}
    }))
    function handleCreate(evt){
        //const newTodo = {title, desc,dateCreated: Date(Date.now()), dateCompleted: null,complete: false};
        createTodo({title, desc, dateCreated: Date(Date.now()), dateCompleted: null, complete: false})
        dispatch({type:'CREATE_TODO', title, desc, dateCreated: Date(Date.now()), dateCompleted: null, complete: false});
    }

    return (
        <>
        <h2>Create a new To-Do</h2>
        <form onSubmit={(e) => {e.preventDefault(); handleCreate(e)}}>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
                <label htmlFor="create-desc">Description:</label>
                <input type="text" value={desc} onChange={handleDesc} name="create-desc" id="create-desc"/>
                <input type="submit" value="Create" disabled={title.length === 0}/>
            </div>
        </form>
        </>
    );
}
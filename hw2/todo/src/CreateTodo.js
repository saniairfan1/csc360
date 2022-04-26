import React from "react";

export default function CreateTodo({user}) {
    return (
        <>
        <h2>Create a new To-Do</h2>
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" name="create-title" id="create-title" />
                <input type="submit" value="Create" />
            </div>
        </form>
        </>
    );
}
import React from "react";
import './style/AddTask.css';
import { useState } from "react";

const AddTask = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const titleInputHandler = (event) => {
        setTitle(event.target.value);
    }

    const descriptionInputHandler = (event) => {
        setDescription(event.target.value);
    }

    const handleSaveClick = (event) => {
        event.preventDefault();
        const newTask = {
            title: title,
            description: description
        }
    
        props.onSubmitClick(newTask);

        setTitle('');
        setDescription('');
    }

    return(
        <form onSubmit={handleSaveClick}>
            <div className="add-task">
                <input required type="text" value={title} onChange={titleInputHandler} placeholder="Title" />
                <input required type="text" value={description} onChange={descriptionInputHandler} placeholder="Description" />
                <button type="submit">Save Task</button>
            </div>
        </form>
    );
}

export default AddTask;
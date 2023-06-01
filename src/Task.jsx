import React from "react";
import { useState } from "react";
import './style/Task.css';

const Task = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);

    const handleDeleteClick = () => {
        props.onDeleteButtonClick(props.id);
    }

    const handleEditClick = () => {
        setEditMode(!editMode);
    }

    const handleSaveClick = () => {

        const editedTask = {
            title: title,
            description: description
        }

        console.log(props.id);

        props.onSaveButtonClick(props.id, editedTask);

        setEditMode(!editMode);
    }

    const titleInputHandler = (event) => {
        setTitle(event.target.value);
    }

    const descriptionInputHandler = (event) => {
        setDescription(event.target.value);
    }

    return(
        <div>
            {editMode === false ? <div className="single-task">
                <div className="left-content">
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
                <div className="right-content">
                    <button onClick={handleEditClick} className="edit-btn">Edit</button>
                    <button onClick={handleDeleteClick} className="delete-btn">Delete</button>
                </div>
            </div>
            : 
            <div className="single-task">
                <div className="left-content">
                    <input type="text" className="title-input" value={title} onChange={titleInputHandler} />
                    <input type="text" className="desc-input" value={description} onChange={descriptionInputHandler} />
                </div>
                <div className="right-content">
                    <button onClick={handleSaveClick} className="edit-btn">Save</button>
                </div>
            </div> 
            }       
        </div>
    );
}

export default Task;
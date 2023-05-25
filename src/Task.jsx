import React from "react";
import { useState } from "react";
import './Task.css';

const Task = (props) => {

    const handleDeleteClick = () => {
        props.onDeleteButtonClick(props.id);
    }

    return(
        <div className="single-task">
            <div className="left-content">
                <h4>{props.id}. {props.title}</h4>
                <p>{props.description}</p>
            </div>
            <div className="right-content">
                <button className="edit-btn">Edit</button>
                <button onClick={handleDeleteClick} className="delete-btn">Delete</button>
            </div>
        </div>
    );
}

export default Task;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Task from './Task'
import './App.css'

const dummy_data = [
    {
        id: 1,
        title: 'Learn React',
        description: 'Learn React everyday for 12 hours'
    },
    {
        id: 2,
        title: 'Make ToDo app',
        description: 'Use React knowledge to build simple app'
    },
    {
        id: 3,
        title: 'Become a CEO of Klika',
        description: 'It is what it is'
    }
]

function App() {

    const [tasks, setTasks] = useState(dummy_data);

    const handleDeleteClick = (id) => {
        console.log(id);

        setTasks(tasks.filter(task => task.id !== id));
    }

    const handleSaveClick = (id, editedTask) => {
        console.log(id);
        const tempTask = {
            id: Math.random().toString(),
            ...editedTask
        }
        console.log(editedTask);

        const tempTasks = [...tasks];
        tempTasks[id-1] = tempTask;

        setTasks(tempTasks);

    }

    return (
        <div className="todo-container">
            <h2>To do list</h2>
            {tasks.length === 0 ? 
                (<h4>No tasks found</h4>) : 
                tasks.map((task, index) => 
                <Task key={index} 
                    id={task.id} 
                    title={task.title} 
                    description={task.description}
                    onSaveButtonClick={handleSaveClick}
                    onDeleteButtonClick={handleDeleteClick} /> )}
            <button className="add-btn">Add task</button>
        </div>
    )
}

export default App

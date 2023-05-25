import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Task from './Task'
import './App.css'

const dummy_data = [
    {
        id: 1,
        title: 'Learn React',
        description: 'Learn React eveeeeeeeeeeeeeeeeeryday for 12 hours'
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

    return (
        <div className="todo-container">
            <h2>To do list</h2>
            {tasks.map((task, index) => 
            <Task key={index} 
                id={task.id} 
                title={task.title} 
                description={task.description}
                onDeleteButtonClick={handleDeleteClick} /> )}
            <button className="add-btn">Add task</button>
        </div>
    )
}

export default App

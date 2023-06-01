import { useState, useEffect } from 'react'
import Task from './Task'
import AddTask from './AddTask'
import './style/App.css'
import axios from 'axios'

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
    },
]

function App() {


    const [tasks, setTasks] = useState([]);
    const [addTaskModal, setAddTaskModal] = useState(false);

    const getTodos = async () => {
        try{
            const response = await axios.get('http://localhost:8090/api/v1/todos');
            setTasks(response.data);
        }catch(e){
            console.log(e);
        }
    }

    const addTodo = async(task) => {
        const tempTask = {
            ...task,
            'createdAt': new Date()
        }

        try{
            const response = await axios.post('http://localhost:8090/api/v1/todos', tempTask);
        }catch(e){
            console.log(e);
        }

        setTasks((prevTasks) => {return [...prevTasks, tempTask]});
        setAddTaskModal(!addTaskModal);
    }

    useEffect(() => {
        getTodos();
    }, [])

    const deleteTodo = async(id) => {

        try{
            const response = await axios.delete(`http://localhost:8090/api/v1/todos/${id}`);
            console.log(response.data);
        }catch(e){
            console.log(e);
        }

        setTasks(tasks.filter(task => task.id !== id));
    }

    const updateTodo = async(id, editedTask) => {
        const tempTask = {
            id: id,
            ...editedTask,
            createdAt: new Date()
        }

        const tempTasks = [...tasks];

        const targetTodo = (todo) => todo.id === id;
        const targetIndex = tempTasks.findIndex(targetTodo);

        tempTasks[targetIndex] = tempTask;

        try{
            const response = await axios.put(`http://localhost:8090/api/v1/todos/${id}`, tempTask);
            console.log(response.data);
            setTasks(tempTasks);
        }catch(e){
            console.log(e);
        }

    }

    const handleAddTaskClick = () => {
        setAddTaskModal(!addTaskModal);
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
                    onSaveButtonClick={updateTodo}
                    onDeleteButtonClick={deleteTodo} /> )}
            <button onClick={handleAddTaskClick} className="add-btn">Add task</button>
            {!addTaskModal ? '' : 
            <AddTask onSubmitClick={addTodo} />
            }
        </div>
    )
}

export default App

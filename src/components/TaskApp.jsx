import { useEffect, useReducer } from 'react';

import { taskReducer } from '../helpers/taskReducer';
import { TaskForm } from './form/TaskForm';
import { ListTask } from './task/ListTask';
import './style.css';

const init = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

export const TaskApp = () => {

    const [tasks, dispatch] = useReducer(taskReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(tasks));
    }, [tasks]);

    const handleDelete = (taskid) => {
        const action = {
            type: 'delete',
            payload: taskid
        }
        dispatch(action);
    }

    const handleToggle = (taskid) => {
        dispatch({
            type: 'toggle',
            payload: taskid
        })
    }

    const handleAddTodo = (newTask) => {
        dispatch({
            type: 'add',
            payload: newTask
        })
    }

    return (
        <>
            <h1>Task App</h1>
            <hr />

            <div className='d-flex justify-content-between'>
                <TaskForm handleAddTodo={handleAddTodo} />
                <ListTask tasks={tasks} handleDelete={handleDelete} handleToggle={handleToggle}/>
            </div>
        </>
    )
}

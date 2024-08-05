import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/todos')
            .then(res => setTodos(res.data))
            .catch(err => console.error('Error fetching todos:', err));
    }, []);

    const addTodo = () => {
        axios.post('http://localhost:8000/todos', { text: newTodoText })
            .then(res => {
                setTodos([...todos, res.data]);
                setNewTodoText('');
            })
            .catch(err => console.error('Error adding todo:', err));
    };

    const deleteTodo = id => {
        axios.delete(`http://localhost:8000/todos/${id}`)
            .then(() => setTodos(todos.filter(todo => todo._id !== id)))
            .catch(err => console.error('Error deleting todo:', err));
    };

    const toggleComplete = (id, completed) => {
        axios.put(`http://localhost:8000/todos/${id}`, { completed: !completed })
            .then(res => {
                setTodos(todos.map(todo => {
                    if (todo._id === id) {
                        todo.completed = res.data.completed;
                    }
                    return todo;
                }));
            })
            .catch(err => console.error('Error updating todo:', err));
    };

    return (
        <div className="d-flex text-center justify-content-center align-items-center mt-5">
            <div className="w-30 p-3 border">
            <h1 className='fs-2 mt-3'>TODO List</h1>
            <input type="text" value={newTodoText} onChange={e => setNewTodoText(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>
                        <input type="checkbox" checked={todo.completed} onChange={() =>
                            toggleComplete(todo._id, todo.completed)} />
                        <span style={{
                            textDecoration: todo.completed ? 'line-through' :
                                'none'
                        }}>{todo.text}</span>
                        <button className='fs-6 mt-2 btn btn-primary' onClick={() => deleteTodo(todo._id)}>
                            Delete</button>
                    </li>
                ))}
            </ul>
            </div>
            </div>
    )
}

export default Todo
import React from 'react'
import { useState } from 'react'
import '../App.css'

const TodoForm = ({addTodo}) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo(input);
        setInput('');
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Task' onChange={(e)=>setInput(e.target.value)}/>
        <button type='submit'>Add Task</button>
    </form>
  )
}

export default TodoForm
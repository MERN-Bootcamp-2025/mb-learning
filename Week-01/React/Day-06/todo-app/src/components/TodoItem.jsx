import React from 'react'
import "../App.css"

const TodoItem = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <input
          type='checkbox'
          checked = {todo.completed}
          onChange={()=>toggleComplete(todo.id)}
        />
        <span>{todo.text}</span>
        <button onClick={()=>deleteTodo(todo.id)}>x</button>
    </li>
  )
}

export default TodoItem;
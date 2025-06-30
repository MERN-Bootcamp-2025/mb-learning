import React from 'react'
import TodoForm from './components/TodoForm';
import './App.css'
import { useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (text) => {
    // console.log(text)
    if (text.trim() === '') return; //to handle whitespaces in text
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([newTodo, ...todos]);//add new task at the top
  }

  //flips the completed status of a todo 
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));//msp returns a new array with updated item
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Active') return !todo.completd;
    if (filter === 'Completed') return todo.complete;
    return true;
  })

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className='main-div'>
      <div className='header'>
        <h1>Todo List</h1>
        <div className='todo-count'>
          <span>{completedCount}</span><span>/</span><span>{todos.length}</span>
        </div>
      </div>
      <div className='box'>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>

      <div className='footer'>
        <div className='filters'>
          {['All', 'Active', 'Completed'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={filter === f ? 'active' : ''}
            >
              {f}
            </button>
          ))}
        </div>
        <button onClick={clearCompleted} className='clear-btn'>Clear All</button>
      </div>
    </div>
  )
}

export default App
/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import './App.css';
import NoTodos from './component/NoTodos';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import TodoClearCompleted from './component/TodoClearCompleted';


function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React series',
      iscomplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Go Grocery',
      iscomplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Take over world',
      iscomplete: false,
      isEditing: false,
    },
  ]);
 
  const [idForTodo, setIdForTodo] = useState('');


  function addTodo(todo) {
    setTodos([
      ...todos, {
      id: idForTodo,
      title: todo,
      iscomplete: false,
    },
    ]);

    setIdForTodo(prevIdForTodo => prevIdForTodo + 1);
  
  }

  function deleteTodo(id) {
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  

  function completeTodo(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id == id) {
        todo.iscomplete = !todo.iscomplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  function markAsEditing(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id == id) {
        todo.isEditing = true;

      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function updateTodo(event, id) {
    console.log(event.target.value)
    const updatedTodos = todos.map(todo => {
      if (todo.id == id) {
        if (event.target.value.trim().length == 0) {
          todo.iscomplete = false;
          return todo;
        }
        todo.title = event.target.value;
        todo.isEditing = false;

      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  function cancelEdit(event, id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id == id) {
        todo.isEditing = false;

      }
      return todo;
    });
    setTodos(updatedTodos);
  }
function remaining() {
  console.log(todos.filter(todo=>!todo.iscomplete).length);
  return todos.filter(todo=>!todo.iscomplete).length;
}

function clearCompleted(){
  setTodos([...todos].filter(todo =>!todo.iscomplete));
}

function completeAllTodos(){
  const updatedTodos = todos.map(todo => {
    
      todo.iscomplete = true;

    return todo;
  });
  setTodos(updatedTodos);

}
function todosFiltered(filter){
  if (filter === 'all') {
    return todos;
  } else if (filter === 'active') {
    return todos.filter(todo => !todo.iscomplete);
  } else if (filter === 'completed') {
    return todos.filter(todo => todo.iscomplete);
  }

}
  return (
    <div className='todo-app-container'>
      < div className='todo-app'>
        <h2> Todo App</h2>
       
         <TodoForm  addTodo={addTodo} />

       { todos.length>0 ?(
        <TodoList
            todos={todos}
            completeTodo={completeTodo}
            markAsEditing={markAsEditing}
            updateTodo={updateTodo}
            cancelEdit={cancelEdit}
            deleteTodo={deleteTodo}
            remaining= {remaining}
            clearCompleted={clearCompleted}
         completeAllTodos={completeAllTodos}
         todosFiltered ={todosFiltered}

        />

       ) :(
        < NoTodos />
       )}

    </div>
    </div>
  );
}




export default App;

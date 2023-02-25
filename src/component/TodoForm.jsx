/* eslint-disable eqeqeq */
import React,{ useState} from 'react'
import propTypes from 'prop-types';




TodoForm.propTypes={
  addTodo:propTypes.func.isRequired,

};


function TodoForm(props) {

  const [todoInput, setTodoInput] = useState('');

  function handleInput(event) {
    setTodoInput(event.target.value)
  }

  function handlesubmit(event){

    event.preventDefault();

    if (todoInput.trim().length == 0) {
      return;
    }

    props.addTodo(todoInput);
    
    setTodoInput('');
  }

  return (

    <form action="#" onSubmit={handlesubmit}>
    <input
      type="text"
      value={todoInput}
      onChange={handleInput}
      className='todo-input'
      placeholder='what do you need to do?' />
  </form>

  );
}

export default TodoForm;
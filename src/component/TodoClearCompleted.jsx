import React from 'react'
import propTypes from 'prop-types';

TodoClearCompleted.propTypes = {
  clearCompleted: propTypes.func.isRequired,
};


function TodoClearCompleted(props) {
  return (
    <button onClick={props.clearCompleted} 
    className="button">
      
      Clear completed
    
    </button>
  )
}

export default TodoClearCompleted;
import React from 'react';

const Todo = ({ todos, completeTodo, removeTodo }) => {
  return todos.map((todo, index) => (
    <div
      className={
        todo.isComplete ? 'todo-container cont wt' : 'todo-container cont'
      }
    >
      <div
        className={
          todo.isComplete
            ? 'todo-container wt todo-row'
            : 'todo-container todo-row'
        }
        onClick={() => completeTodo(todo.id)}
      >
        <div
          className={todo.isComplete ? 'complete' : ''}
          onClick={() => completeTodo(todo.id)}
          key={index}
        >
          <span className={todo.isComplete ? 'checked one' : 'one'}></span>
          <div className="two" key={todo.id}>
            {todo.text}
          </div>
        </div>
      </div>
      <span
        onClick={() => removeTodo(todo.id)}
        className="icons delete-icon three"
      >
        x
      </span>
    </div>
  ));
};

export default Todo;

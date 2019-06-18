import React from 'react';

import TodoItem from './TodoItem';

const TodoList = props => {

  return(
    <ul className="todo-list">
      <h2>Todo List:</h2>
      {props.todoList.map( todoItem => {
        return (
          <TodoItem todoItem={todoItem} key={todoItem.id} />
        )
      })}
    </ul>
  )
}

export default TodoList;
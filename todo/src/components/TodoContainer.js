import React from 'react';
import { connect } from 'react-redux';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoContainer extends React.Component {

  render() {
    let highestID = Math.max.apply(Math, this.props.todoList.map(item => item.id));
    return (
      <div className="todo-container">
        <TodoForm lastID={highestID} />
        <TodoList todoList={this.props.todoList} />
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

export default connect( mapStateToProps, {})(TodoContainer);
import React from 'react';
import { connect } from 'react-redux';
import { action } from '../actions';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoContainer extends React.Component {

  render() {
    console.log('container',this.props);
    let highestID = Math.max.apply(Math, this.props.todoList.map(function(item) { return item.id; }))
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
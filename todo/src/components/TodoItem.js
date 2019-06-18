import React from 'react';
import { connect } from 'react-redux';
import { changeTodo, removeTask } from '../actions';

class TodoItem extends React.Component {

  onClick = event => {
    event.preventDefault();
    this.props.changeTodo(this.props.todoItem.id);
  }

  removeTask = event => {
    event.preventDefault();
    this.props.removeTask(this.props.todoItem.id);
  }

  render() {
    return(
      <li onClick={this.onClick} key={this.props.todoItem.id} className={`${this.props.todoItem.isComplete ? 'done' : 'todo'}`}>{this.props.todoItem.task}<button onClick={this.removeTask} title="Remove Task">X</button></li>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.id,
    task: state.task,
    isComplete: state.isComplete
  };
};

export default connect( mapStateToProps, { changeTodo, removeTask })(TodoItem);
import React from 'react';
import { connect } from 'react-redux';
import { changeTodo, removeTask } from '../actions';

class TodoItem extends React.Component {
  state = {
    isDone: this.props.todoItem.isComplete,
    id: this.props.todoItem.id,
  }

  onClick = event => {
    event.preventDefault();
    this.setState({
      isDone: !this.state.isDone
    });
    this.props.changeTodo(this.state.id);
  }

  removeTask = event => {
    event.preventDefault();
    this.props.removeTask(this.state.id);
  }

  render() {
    return(
      <li onClick={this.onClick} key={this.props.todoItem.id} className={`${this.state.isDone ? 'done' : 'todo'}`}>{this.props.todoItem.task}<button onClick={this.removeTask} title="Remove Task">X</button></li>
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
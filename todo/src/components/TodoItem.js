import React from 'react';
import { connect } from 'react-redux';
import { changeTodo } from '../actions';

class TodoItem extends React.Component {
  state = {
    isDone: this.props.todoItem.isComplete,
    item: {
      id: this.props.todoItem.id,
      task: this.props.todoItem.task,
      isComplete: this.props.todoItem.isComplete
    }
  }

  onClick = event => {
    event.preventDefault();
    this.setState({
      isDone: !this.state.isDone
    });
    this.props.changeTodo(this.state.item);
  }

  render() {
    return(
      <li onClick={this.onClick} className={`${this.state.isDone ? 'done' : 'todo'}`}>{this.props.todoItem.task}</li>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.id
  };
};

export default connect( mapStateToProps, { changeTodo })(TodoItem);
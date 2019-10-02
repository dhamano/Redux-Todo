import React from 'react';
import { connect } from 'react-redux';
import { addTodo, removeCompleted } from '../actions';

class TodoForm extends React.Component {
  state = {
    id: 0,
    task: '',
    isComplete: false
  }

  componentDidMount = () => {
    if(!isNaN(this.props.lastID)) {
      this.setState({
        id: this.props.lastID + 1
      });
    }
  }

  removeCompleted = event => {
    event.preventDefault();
    this.props.removeCompleted();
  }

  submit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      id: this.state.id + 1,
      task: ''
    })
  }

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.submit} className="todo-form">
        <h2>Add Task:</h2>
        <input type="text" onChange={this.onChangeHandler} placeholder="New Todo Item" name="task" value={this.state.task} required />
        <button type="submit" name="submit">Add Todo</button>
        <button type="button" onClick={this.removeCompleted} name="remove">Remove Completed</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoName: state.todoName
  };
};

export default connect( mapStateToProps, { addTodo, removeCompleted })(TodoForm);
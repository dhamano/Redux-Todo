import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends React.Component {
  state = {
    id: 0,
    todoName: '',
    isComplete: false
  }

  componentDidMount = () => {
    if(!isNaN(this.props.lastID)) {
      this.setState({
        id: this.props.lastID + 1
      });
    }
  }

  submit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.todoName);
    this.setState({
      id: this.state.id + 1,
      todoName: ''
    })
  }

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.submit} className="todo-form">
        <h2>Add Task:</h2>
        <input type="text" onChange={this.onChangeHandler} placeholder="New Todo Item" name="todoName" value={this.state.todoName} />
        <button type="submit" name="submit">Add Todo</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoName: state.todoName
  };
};

export default connect( mapStateToProps, { addTodo })(TodoForm);
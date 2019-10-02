import { ADD_TODO, CHANGE_TODO, REMOVE_COMPLETED_TASKS, REMOVE_TASK } from '../actions';

const initialState = {
  todoList: [
    {
      id: 0,
      task: 'wash dishes',
      isComplete: false,
    },
    {
      id: 1,
      task: 'clean car',
      isComplete: false
    },
    {
      id: 2,
      task: 'wash car',
      isComplete: false
    }
  ]
}

export const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }
    case CHANGE_TODO:
      return {
        ...state,
        todoList: state.todoList.map( item => {
          return (item.id === action.payload.id) ? {...item, isComplete: !item.isComplete} : item;
        })
      }
    case REMOVE_COMPLETED_TASKS:
      return {
        ...state,
        todoList: state.todoList.filter( item => !item.isComplete )
      }
    case REMOVE_TASK:
      return {
        ...state,
        todoList: state.todoList.filter( item => item.id !== action.payload.id )
      }
    default:
      return state;
  }
}
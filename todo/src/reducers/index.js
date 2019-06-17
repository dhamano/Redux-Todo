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
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }
      case "CHANGE_TODO":
        state.todoList[action.payload.id] = action.payload;
        return {
          ...state,
          todoList: [...state.todoList]
        }
    default:
      return state;
  }
}
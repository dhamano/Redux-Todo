export const ADD_TODO = "ADD_TODO";
export const CHANGE_TODO = "CHANGE_TODO";
export const REMOVE_COMPLETED_TASKS = "REMOVE_COMPLETED_TASKS";
export const REMOVE_TASK = "REMOVE_TASK";

export const addTodo = todoItem => {
  return {
    type: ADD_TODO,
    payload: todoItem
  }
}

export const changeTodo = id => {
  return {
    type: CHANGE_TODO,
    payload: {
      id: id
    }
  }
}

export const removeTask = id => {
  return {
    type: REMOVE_TASK,
    payload: {
      id: id
    }
  }
}

export const removeCompleted = () => {
  return {
    type: REMOVE_COMPLETED_TASKS,
  }
}
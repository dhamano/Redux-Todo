export const addTodo = todoItem => {
  return {
    type: "ADD_TODO",
    payload: {
      task: todoItem,
      isComplete: false
    }
  }
}

export const changeTodo = todoItem => {
  return {
    type: "CHANGE_TODO",
    payload: {
      id: todoItem.id,
      task: todoItem.task,
      isComplete: !todoItem.isComplete
    }
  }
}
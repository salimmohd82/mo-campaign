export const GET_TODOS = "todo:getTodos";
export const TODOS_RECEIVED = "todo:todosReceived";

// API CALLS SAGA

const todosReceived = (todoItems) => ({
  type: TODOS_RECEIVED,
  payload: {
    todoItems
  }
})

export const getTodos = () => ({
  type: GET_TODOS
});
import {
  TODOS_RECEIVED
} from "../actions/todo-actions";

export default function todoReducer(state = {}, {type, payload}) {
  console.log("payload", payload);
  switch (type) {
      case TODOS_RECEIVED:
        return { 
          ...state, 
          list: Object.values(payload),
          loading: false 
        }
      default:
        return state;
  }
}

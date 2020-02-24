import {
  FETCH_USER_STARTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  GET_TODOS,
  TODOS_RECEIVED
} from "../actions/user-actions";

export default function userReducer(state = {}, {type, payload}) {
  switch (type) {
    case FETCH_USER_STARTED:
      console.log("FETCH_USER_STARTED");
      return {
        ...state,
        loading: true
      };
    case FETCH_USER_SUCCESS:  
    console.log("FETCH_USER_SUCCESS");
      return {
        ...state,
        list: Object.values(payload),
        loading: false
      };
      case FETCH_USER_FAILURE:  
      console.log("FETCH_USER_FAILURE");
      return {
        ...state,
        loading: false
      };
      case GET_TODOS:
        console.log("GET_NEWS");
        return { 
          ...state, 
          loading: true 
        };
      case TODOS_RECEIVED:
        return { 
          ...state, 
          user: payload, 
          loading: false 
        }
    default:
      return state;
  }
}

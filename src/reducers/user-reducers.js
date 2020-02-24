import {
  FETCH_USER_STARTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "../actions/user-actions";

export default function userReducer(state = {}, {type, payload}) {
  switch (type) {
    case FETCH_USER_STARTED:
      console.log("FETCH_USER_STARTED");
      return {
        ...state,
        list: [],
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
        list: [],
        loading: false
      };
    default:
      return state;
  }
}

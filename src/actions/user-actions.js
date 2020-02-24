import axios from 'axios';
import worker_script from './worker';



export const  FETCH_USER_STARTED = "user:fetchUserStarted";
export const  FETCH_USER_SUCCESS = "user:fetchUserSuccess";
export const  FETCH_USER_FAILURE = "user:fetchUserFailure";

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const addUserSuccess = users => ({
  type: FETCH_USER_SUCCESS,
  payload: {
    ...users
  }
});

const addUserStarted = () => ({
  type: FETCH_USER_STARTED
});

const addUserFailure = error => ({
  type: FETCH_USER_FAILURE,
  payload: {
    error
  }
});

// API CALLS THUNK

export const fetchUserData = () => {
  
  return dispatch => {

    // WEB WORKER
    dispatch(addUserStarted());

    if (typeof(Worker) !== "undefined") {
      // Yes! Web worker support!
      var myWorker = new Worker(worker_script);
      myWorker.onmessage = (m) => {
        console.log("msg from worker: ", m.data);
        console.log(typeof m.data);
        if(m.data.length > 0){
          dispatch(addUserSuccess(m.data));
        }
        else {
          dispatch(addUserFailure(m.data));
        }
        
    };
    myWorker.postMessage(apiUrl);
    } else {
      alert("no wrb worker");
      // Sorry! No Web Worker support..
    }

    // AXIOS

    // dispatch(addUserStarted());
    // axios
    //   .get(apiUrl, {
    //     completed: false
    //   })
    //   .then(res => {
    //     setTimeout(() => {
    //       dispatch(addUserSuccess(res.data));
    //     },3000);
    //   })
    //   .catch(err => {
    //     dispatch(addUserFailure(err.message));
    //   });


  };
};

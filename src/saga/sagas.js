import { put, takeLatest, all } from 'redux-saga/effects';
import worker_script from '../workers/worker-todos';

import {
  GET_TODOS,
  TODOS_RECEIVED
} from "../actions/todo-actions";

function* fetchToDos() {
  const json = yield fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json(), );   
        console.log("saga", json); 
  yield put({ type: TODOS_RECEIVED, payload: json});
}

function* actionWatcher() {
     yield takeLatest(GET_TODOS, fetchToDos)  
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
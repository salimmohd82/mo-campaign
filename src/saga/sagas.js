import { put, takeLatest, all } from 'redux-saga/effects';

import {
  GET_TODOS,
  TODOS_RECEIVED
} from "../actions/todo-actions";

function* fetchNews() {
  const json = yield fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json(), );    
  yield put({ type: TODOS_RECEIVED, json: json.articles, });
}

function* actionWatcher() {
     yield takeLatest(GET_TODOS, fetchNews)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
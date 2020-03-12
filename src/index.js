import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import {compose, createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// import { logger } from 'redux-logger';

import campaignReducer from "./reducers/campaign-reducers";
import userReducer from "./reducers/user-reducers";
import todoReducer from "./reducers/todo-reducer";
import galleryReducer from "./reducers/gallery-reducers";

import rootSaga from "./saga/sagas";

const allReducers = combineReducers({
  campaign: campaignReducer,
  user: userReducer,
  todos: todoReducer,
  gallery: galleryReducer
});

const initialState = {
  campaign: {
    items: [],
    page: 1,
    searchKey: "",
    editId: "",
    deleteList: [],
    authUsers: []
  },
  user: {
    list: [],
    loading: false
  },
  todos: {
    list: [],
    loading: false
  },
  gallery: {
    items:[]
  }
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const allStoreEnhanceres = compose(applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(allReducers, initialState, allStoreEnhanceres);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

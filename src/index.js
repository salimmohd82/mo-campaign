import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { compose, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import campaignReducer from "./reducers/campaign-reducers";

const allReducers = combineReducers({
  campaign: campaignReducer
});

const initialState = {
  campaign: {
    items: [],
    page: 1,
    searchKey: "",
    editId: "",
    deleteList: []
  }
};

const allStoreEnhanceres = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(allReducers, initialState, allStoreEnhanceres);

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

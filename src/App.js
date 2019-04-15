import React, { Component } from "react";
import "./App.css";

import ListContainer from "./containers/ListContainer";
import SearchContainer from "./containers/SearchContainer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <main>
            <SearchContainer />
            <ListContainer />
          </main>
        </div>
      </div>
    );
  }
}

export default App;

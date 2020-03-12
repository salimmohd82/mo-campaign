import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";


// import SiteNavigation from "./view/SiteNavigation";
import MainContent from "./view/MainContent";
import UserContainer from "./containers/UserContainer";
import ToDoContainer from "./containers/ToDoContainer";
import GalleryContainer from "./containers/GalleryContainer";

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <div className="App">
          <main>
            <Router>
              <nav className="navbar navbar-expand-sm bg-light">
                <ul className="navbar-nav">
                  <li className="nav-item nav-link active">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item nav-link">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="nav-item nav-link">
                    <Link to="/users">Users</Link>
                  </li>
                  <li className="nav-item nav-link">
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li className="nav-item nav-link">
                    <Link to="/todos">To Dos</Link>
                  </li>
                </ul>
              </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <UserContainer />
                </Route>
                <Route path="/todos">
                  <ToDoContainer />
                </Route>
                <Route path="/gallery">
                  <GalleryContainer />
                </Route>
                <Route path="/">
                  <MainContent />
                </Route>
              </Switch>
            </Router>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

class About extends Component {
  render(){
    return <h2>About</h2>;
  }
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";


class App extends Component {



  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Switch>
          <Route exact path = "/" component={Search} />
          <Route exact path = "/search" component={Search} />
          <Route exact path = "/saved" component={Saved} />

        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Header from '../header/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

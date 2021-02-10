import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharactersPage from '../characters/CharactersPage';
import Header from '../header/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={AllC} />
          </Switch>
        </Router>
      </div>
    );
  }
}

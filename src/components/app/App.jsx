import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharactersPage from '../../pages/CharactersPage';
import CharacterById from '../../pages/CharacterById';
import Header from '../header/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={CharactersPage} />
            <Route path="/characters/:id" component={CharacterById} />
          </Switch>
        </Router>
      </div>
    );
  }
}

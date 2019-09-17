import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';

import HomePage from './components/Homepage/Homepage';
import NotFound from './components/NotFound/NotFound';
import Technology from './components/Technology/Technology';
import Business from './components/Business/Business';
import Entertainment from './components/Entertainment/Entertainment';
import Article from './components/Article/Article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
            <Switch>
              <Route 
                exact
                path="/curated/home"
                component={HomePage}
              />
              <Route 
                exact
                path="/curated/tech"
                component={Technology}
              />
              <Route 
                exact
                path="/curated/business"
                component={Business}
              />
              <Route 
                exact
                path="/curated/entertainment"
                component={Entertainment}
              />
              <Route 
                path="/curated/article/:id"
                component={Article}
              />
              <Route
                component={NotFound}
              />  
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;

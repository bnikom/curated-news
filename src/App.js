import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';

import HomePage from './components/Homepage/Homepage';
import NotFound from './components/NotFound/NotFound';
import Article from './components/Article/Article';
import NewsType from './components/NewsType';

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
                render={(props) => <NewsType {...props} type="technology" />}
              />
              <Route 
                exact
                path="/curated/business"
                render={(props) => <NewsType {...props} type="business" />}
              />
              <Route 
                exact
                path="/curated/entertainment"
                render={(props) => <NewsType {...props} type="entertainment" />}
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

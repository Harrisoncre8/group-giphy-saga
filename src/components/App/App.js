import React, { Component } from 'react';
import Favorite from '../Favorite/Favorite';
import Search from '../Search/Search'
import { HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <h1>Giphy Search!</h1>
          <Route exact path="/" component={ Search }/>
          <Route path="/favorites" component={ Favorite }/>
        </Router>
      </div>
    );
  }
  
}

export default App;
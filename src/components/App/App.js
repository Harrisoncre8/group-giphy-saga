import React, { Component } from 'react';
import '../App/App.css';
import Favorite from '../Favorite/Favorite';
import Search from '../Search/Search'
import { HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="app">
        <Router>
          <h1 className="header">Giphy Search!</h1>
          <Route exact path="/" component={ Search }/>
          <Route path="/favorites" component={ Favorite }/>
        </Router>
      </div>
    );
  }
  
}

export default App;
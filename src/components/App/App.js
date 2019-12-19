import React, { Component } from 'react';
import Favorite from '../Favorite/Favorite';
import Search from '../Search/Search'


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Favorite />
        <Search />
      </div>
    );
  }
  
}

export default App;
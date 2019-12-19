import React, { Component } from 'react';
import Favorite from '../Favorite/Favorite';


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Favorite />
      </div>
    );
  }
  
}

export default App;
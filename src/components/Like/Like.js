import React, {Component} from 'react';
import {connect} from 'react-redux';

class Like extends Component{

  state = {
    category: 0,
    gif: ''
  }

  handleChange = (event) => {
    this.setState({
      category: event.target.value,
      gif: this.props.reduxState
    });
  }

  handleSubmit = () => {
    this.props.dispatch({type: `ADD_FAVORITE`, payload: this.state});
  }

  render(){
    return(
      <>
      {JSON.stringify(this.state)}
      <br />
      <input type="radio"
        name="category"
        id="funny"
        value="funny"
        check={this.state.category === 1}
        onChange={(event)=>this.handleChange(event)}
        />Funny

        <br />

      <input type="radio"
        name="category"
        id="vega"
        value="vega"
        check={this.state.category === 2}
        onChange={(event)=>this.handleChange(event)}
        />Vega
        
        <br />

      <input type="radio"
        name="category"
        id="cartoon"
        value="cartoon"
        check={this.state.category === 3}
        onChange={(event)=>this.handleChange(event)}
        />Cartoon
        
        <br />

      <input type="radio"
        name="category"
        id="nsfw"
        value="nsfw"
        check={this.state.category === 4}
        onChange={(event)=>this.handleChange(event)}
        />NSFW
        
        <br />

      <input type="radio"
        name="category"
        id="meme"
        value="meme"
        check={this.state.category === 5}
        onChange={(event)=>this.handleChange(event)}
        />Meme
        
        <br />

      <button onClick={this.handleSubmit}>ADD TO FAVORITES</button>
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.setFavUrlReducer
});

export default connect(putReduxStateOnProps)(Like);
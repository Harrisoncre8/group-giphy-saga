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
        id="1"
        value="1"
        check={this.state.category === 1}
        onChange={(event)=>this.handleChange(event)}
        />Funny

        <br />

      <input type="radio"
        name="category"
        id="2"
        value="2"
        check={this.state.category === 2}
        onChange={(event)=>this.handleChange(event)}
        />Vega
        
        <br />

      <input type="radio"
        name="category"
        id="3"
        value="3"
        check={this.state.category === 3}
        onChange={(event)=>this.handleChange(event)}
        />Cartoon
        
        <br />

      <input type="radio"
        name="category"
        id="4"
        value="4"
        check={this.state.category === 4}
        onChange={(event)=>this.handleChange(event)}
        />NSFW
        
        <br />

      <input type="radio"
        name="category"
        id="5"
        value="5"
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
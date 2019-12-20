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
    alert(`You added this to your favorites!~`);
    this.props.dispatch({type: `ADD_FAVORITE`, payload: this.state});
    this.props.handleLike();
  }

  render(){
    return(
      <>
      <br />
      <input type="radio"
        name="category"
        className="radio-btn"
        id="1"
        value="1"
        check={this.state.category === 1}
        onChange={(event)=>this.handleChange(event)}
        /><span className="radio">Funny</span>

        <br />

      <input type="radio"
        name="category"
        className="radio-btn"
        id="2"
        value="2"
        check={this.state.category === 2}
        onChange={(event)=>this.handleChange(event)}
        /><span className="radio">Vega</span>
        
        <br />

      <input type="radio"
        name="category"
        className="radio-btn"
        id="3"
        value="3"
        check={this.state.category === 3}
        onChange={(event)=>this.handleChange(event)}
        /><span className="radio">Cartoon</span>
        
        <br />

      <input type="radio"
        name="category"
        className="radio-btn"
        id="4"
        value="4"
        check={this.state.category === 4}
        onChange={(event)=>this.handleChange(event)}
        /><span className="radio">NSFW</span>
        
        <br />

      <input type="radio"
        name="category"
        className="radio-btn"
        id="5"
        value="5"
        check={this.state.category === 5}
        onChange={(event)=>this.handleChange(event)}
        /><span className="radio">Meme</span>
        
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
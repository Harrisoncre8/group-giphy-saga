import React, {Component} from 'react';
import {connect} from 'react-redux';

class Search extends Component{

  state = {
    search: '',
    like: false
  }

  componentDidMount(){
    console.log('in GET GIPHY client');
    this.props.dispatch({type: 'GET_GIPHY'})
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }

  handleClick = () => {
    this.props.dispatch({type: `SEARCH`, payload: this.state.search});
  }

  handleLike = () => {
    if(this.state.like === false){
      this.setState({
        like: true
      });
    }
    else {
      this.setState({
        like: false
      });
    }
  }

  render(){
    return(
      <>
      {JSON.stringify(this.state)}
        <input type="text" onChange={(event)=>this.handleChange(event)} value={this.state.search} placeholder="search" />
        <button onClick={this.handleClick}>SEARCH</button>
        {this.props.reduxState.map((image, i) =>
          <div key={i}><img src={image.images.original.url} />
          <button onClick={this.handleLike}>Like</button></div>
        )}
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.giphyReducer
});

export default connect(putReduxStateOnProps)(Search);
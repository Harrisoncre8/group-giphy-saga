import React, {Component} from 'react';
import {connect} from 'react-redux';

class Search extends Component{

  state = {
    search: ''
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

  render(){
    return(
      <>
        <input type="text" onChange={(event)=>this.handleChange(event)} value={this.state.search} placeholder="search" />
        <button onClick={this.handleClick}>SEARCH</button>
        {this.props.reduxState.map((image, i) =>
          <div key={i}><img src={image.images.original.url} />
            <button>Like</button></div>
        )}
      </>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.giphyReducer
});

export default connect(putReduxStateOnProps)(Search);
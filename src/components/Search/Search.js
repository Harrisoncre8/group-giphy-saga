import React, {Component} from 'react';
import {connect} from 'react-redux';

class Search extends Component{

  componentDidMount(){
    console.log('in GET GIPHY client');
    this.props.dispatch({type: 'GET_GIPHY'})
  }

  render(){
    return(
      <>
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
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Like from '../Like/Like'
import { Link } from 'react-router-dom'

class Search extends Component{

  state = {
    search: '',
    like: false,
    id: '',
  }

  componentDidMount(){
    console.log('in GET GIPHY client');
    this.props.dispatch({type: 'GET_GIPHY'})
  }

  componentDidUpdate(){
    if(this.state.like){
      this.props.dispatch({type: `SET_FAV_URL`, payload: this.props.reduxState[this.state.id].images.original.url});
    }
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }

  handleClick = () => {
    if(this.state.like){
      this.setState({
        like: false
      });
    }
    this.props.dispatch({type: `SEARCH`, payload: this.state.search});
  }

  handleLike = (id) => {
    if(!this.state.like){
      this.setState({
        like: true,
        id: id,
      });
    }
    else {
      this.setState({
        like: false,
        id: ''
      });
    }
  }

  render(){
    if(!this.state.like){
    return(
      <>
      <Link to="/favorites">Favorite Gifs</Link>
      <br/>
      <br/>
      {JSON.stringify(this.state)}
        <input type="text" onChange={(event)=>this.handleChange(event)} value={this.state.search} placeholder="search" />
        <button onClick={this.handleClick}>SEARCH</button>
        {this.props.reduxState.map((image, i) =>
          <div key={i}><img src={image.images.original.url} alt="Giphy search results"/>
          <button onClick={()=>this.handleLike(i)}>Like</button></div>
        )}
      </>
    )
    }
    else {
      return(
        <>
          <input type="text" onChange={(event)=>this.handleChange(event)} value={this.state.search} placeholder="search" />
          <button onClick={this.handleClick}>SEARCH</button>
          <img src={this.props.reduxState[this.state.id].images.original.url} alt="Selected Gif" />
          <button onClick={()=>this.handleLike()}>Back</button>
          <Like />
        </>
      )
    }
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.giphyReducer
});

export default connect(putReduxStateOnProps)(Search);
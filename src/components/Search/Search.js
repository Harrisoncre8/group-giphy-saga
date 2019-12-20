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
    this.props.dispatch({type: 'GET_GIPHY'})
  }

  componentDidUpdate(){
    if(this.state.like){
      this.props.dispatch({type: `SET_FAV_URL`, payload: this.props.reduxState[this.state.id].images.original.url});
    }
  }

  focusInput = () => {
    this.mainInput.focus();
    this.setState({
      search: ''
    });
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
    this.focusInput();
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
        <input type="text" onChange={(event)=>this.handleChange(event)} 
          value={this.state.search} 
          ref={(input) => { this.mainInput = input; }}
          placeholder="search" />
        <button onClick={this.handleClick}>SEARCH</button>
        {this.props.reduxState.map((image, i) =>
          <div key={i}><img src={image.images.original.url} alt={image.title} />
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
          <img src={this.props.reduxState[this.state.id].images.original.url} alt={this.props.reduxState.title} />
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
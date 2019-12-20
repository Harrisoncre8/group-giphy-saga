import React, { Component } from 'react';
import { connect } from 'react-redux';

class Favorite extends Component {

    state = {
        category: '',
    }

    componentDidMount() {
        this.props.dispatch( { type: 'GET_FAVORITE' } )
    }

    handleClick = () => {
        this.props.dispatch({type: 'SORT_FAVORITE', payload: this.state.category })
    }

    handleChange = (event) => {
        this.setState({
            category: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <div>
                        <input type='radio'
                            name='radio'
                            className="radio-btn"
                            id='funny'
                            value='1'
                            check={this.state.category === 1}
                            onChange={(event)=> this.handleChange(event)}
                        /><span className="radio">Funny</span>
                        <br/>

                        <input type='radio'
                        name='radio'
                        className="radio-btn"
                        id='vega'
                        value='2'
                        check={this.state.category === 2}
                        onChange={(event)=> this.handleChange(event)}
                        /><span className="radio">Vega</span>
                        <br/>

                        <input type='radio'
                            name='radio'
                            className="radio-btn"
                            id='cartoon'
                            value='3'
                            check={this.state.category === 3}
                            onChange={(event)=> this.handleChange(event)}
                        /><span className="radio">Cartoon</span>
                        <br/>

                        <input type='radio'
                            name='radio'
                            className="radio-btn"
                            id='nsfw'
                            value='4'
                            check={this.state.category === 4}
                            onChange={(event)=> this.handleChange(event)}
                        /><span className="radio">NSFW</span>
                        <br/>

                        <input type='radio'
                            name='radio'
                            className="radio-btn"
                            id='meme'
                            value='5'
                            check={this.state.category === 5}
                            onChange={(event)=> this.handleChange(event)}
                        /><span className="radio">Meme</span>
                        
                    <br/>
                    <button onClick={this.handleClick}>Show me the category</button>
                </div>
                {this.props.reduxState.map((item,i) => 
                    <div key={i}>
                    <br />
                    <img src={item.url} alt='favorited image'/>
                    </div>
                )}
            </div>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.favoriteReducer
});

export default connect(mapReduxStateToProps)(Favorite);
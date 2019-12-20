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
                    <label>

                        Vega
                        <input type='radio'
                        name='radio'
                        id='vega'
                        value='2'
                        check={this.state.category === 2}
                        onChange={(event)=> this.handleChange(event)}
                        />
                        <br/>

                        Cartoon
                        <input type='radio'
                            name='radio'
                            id='cartoon'
                            value='3'
                            check={this.state.category === 3}
                            onChange={(event)=> this.handleChange(event)}
                        />
                        <br/>

                        Meme
                        <input type='radio'
                            name='radio'
                            id='meme'
                            value='5'
                            check={this.state.category === 5}
                            onChange={(event)=> this.handleChange(event)}
                        />
                        <br/>

                        NSFW
                        <input type='radio'
                            name='radio'
                            id='nsfw'
                            value='4'
                            check={this.state.category === 4}
                            onChange={(event)=> this.handleChange(event)}
                        />
                        <br/>

                        Funny
                        <input type='radio'
                            name='radio'
                            id='funny'
                            value='1'
                            check={this.state.category === 1}
                            onChange={(event)=> this.handleChange(event)}
                        />

                    </label>
                    <br/>
                    <button onClick={this.handleClick}>Show me the category</button>
                </div>
                {this.props.reduxState.map((item,i) => 
                    <img key={i} src={item.url} alt='favorited image'/>
                )}
            </div>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.favoriteReducer
});

export default connect(mapReduxStateToProps)(Favorite);
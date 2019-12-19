import React, { Component } from 'react';
import { connect } from 'react-redux';

class Favorite extends Component {

    state = {
        id: '',
        category: ''
    }

    componentDidMount() {
        this.props.dispatch( { type: 'GET_FAVORITE' } )
    }

    handleChange = (event) => {
        this.setState({
            category: event.target.value
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
                        value='vega'
                        check={this.state.category === 2}
                        onChange={(event)=> this.handleChange(event)}
                        />
                        <br/>
                        Cartoon
                        <input type='radio'
                            name='radio'
                            id='cartoon'
                            value='cartoon'
                            check={this.state.category === 3}
                            onChange={(event)=> this.handleChange(event)}
                        />
                        <br/>
                        Meme
                        <input type='radio'
                            name='radio'
                            id='meme'
                            value='meme'
                            check={this.state.category === 5}
                            onChange={(event)=> this.handleChange(event)}
                        />
                        <br/>
                        NSFW
                        <input type='radio'
                            name='radio'
                            id='nsfw'
                            value='nsfw'
                            check={this.state.category === 4}
                            onChange={(event)=> this.handleChange(event)}
                        />
                        <br/>
                        Funny
                        <input type='radio'
                            name='radio'
                            id='funny'
                            value='funny'
                            check={this.state.category === 1}
                            onChange={(event)=> this.handleChange(event)}
                        />
                </label>
                </div>
                {this.props.reduxState.map((item, i) => 
                    <p key={i}>{item.name}</p>
                )}
            </div>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.favoriteReducer
});

export default connect(mapReduxStateToProps)(Favorite);
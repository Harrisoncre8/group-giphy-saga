import React, { Component } from 'react';
import { connect } from 'react-redux';

class Favorite extends Component {

    componentDidMount() {
        this.props.dispatch( { type: 'GET_FAVORITE' } )
    }

    render() {
        return (
            <ul>
                {this.props.reduxState.map((item, i) => 
                    <li key={i}>{item.name}</li>
                )}
            </ul>
        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState: reduxState.favoriteReducer
});

export default connect(mapReduxStateToProps)(Favorite);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import './app.scss';

class App extends Component {
    addTrack() {
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    render() {
        return(
            <div>
                <input type='text' ref={(input) => {this.trackInput = input}}/>
                <button onClick={this.addTrack.bind(this)}>Добавить трек</button>
                <ul>
                    {this.props.testStore.map((track, index) =>
                        <li key={index}>{track}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({ type: 'ADD_TRACK', payload: trackName})
        }
    })
)(App);
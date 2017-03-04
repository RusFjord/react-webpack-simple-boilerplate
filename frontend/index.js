import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './component/app';

const initialState = [
    'Smells teen like spirit',
    'Enter Sandman'
];

function playlist(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(playlist);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
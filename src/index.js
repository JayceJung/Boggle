import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    gameStatus: 'init'
};

function reducer(state = initialState, action) {
    return state;
}

const store = createStore(reducer);

store.dispatch({ type: 'STATUSCHANGE' });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './App';
import { history, store } from './App';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

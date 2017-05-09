import React, {Component} from 'react';
import { renderRoutes } from 'react-router-config'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { setupComponent  } from './utils';
import reducers from './reducers';
import middlewares from './middlewares';
import actionCreators from './actionCreators';

export const history = createHistory();
const _routerMiddleware = routerMiddleware(history);

export const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(thunk, ...middlewares, _routerMiddleware)
);

class App extends Component {
    render() {
        return (
            <div className="App">
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
};

App = setupComponent(App, actionCreators);

export default App;

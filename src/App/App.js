import React, {Component} from 'react';
import { renderRoutes } from 'react-router-config'
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { withRouter } from 'react-router-dom'
import thunk from 'redux-thunk';

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

let mapStateToProps = function(state) {
    return state;
};

let mapDispatchToProps = function(dispatch) {
    return {
        ...bindActionCreators(actionCreators, dispatch)
    };
};

App = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default App;

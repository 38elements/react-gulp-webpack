import React, {Component} from 'react';
import { renderRoutes } from 'react-router-config'
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { withRouter } from 'react-router-dom'
import thunk from 'redux-thunk';

import reducers from './reducers';
import middlewares from './middlewares';

export const history = createHistory();
const _routerMiddleware = routerMiddleware(history);

export const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(thunk, ...middlewares, _routerMiddleware)
);

let actionCreators = {
    pushAbout() {
        return push('/about');
    },
    pushHome() {
        return push('/');
    }
};

class App extends Component {
    constructor(props) {
        super(props);
    }
    about() {
        this.props.pushAbout();
    }
    home() {
        this.props.pushHome();
    }
    render() {
        return (
            <div className="App">
                App<br/>
                <button onClick={this.about.bind(this)}>about</button>
                <button onClick={this.home.bind(this)}>home</button>
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

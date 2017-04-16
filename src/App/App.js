import React, {Component} from 'react';
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { withRouter } from 'react-router-dom'
import thunk from 'redux-thunk';

import reducers from './reducers';
import Home from './Home';
import About from './About';
import './App.css';

export const history = createHistory();
const middleware = routerMiddleware(history);

const logMiddleware = store => next => action => {
    console.log('log before');
    console.dir(action);
    let result = next(action);
    console.log('log after');
    console.dir(result);
    return result;
}

export const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(thunk, logMiddleware, middleware)
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
            <div>
                App<br/>
                <button onClick={this.about.bind(this)}>about</button>
                <button onClick={this.home.bind(this)}>home</button>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
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

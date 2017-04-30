import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'

import actionCreators from './actionCreators';

class MyRoot extends Component {
    constructor(props) {
        super(props)
        this.props.pushDashboard();
    }
    render() {
        return <div></div>;
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

MyRoot = withRouter(connect(mapStateToProps, mapDispatchToProps)(MyRoot));

export default MyRoot;

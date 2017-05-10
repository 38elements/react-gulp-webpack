import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';

export function setupComponent(component, actionCreators) {
    let mapStateToProps = function(state) {
        return state;
    };

    let mapDispatchToProps = function(dispatch) {
        return {
            ...bindActionCreators(actionCreators, dispatch)
        };
    };

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(component));
}

export function n(data) {
    return Object.assign({}, ...data);
}

export function s(that, attr) {
    return that[attr].bind(that);
}

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';

import actionCreators from './actionCreators';

class MyDashboard extends Component {
    about() {
        this.props.pushAbout();
    }
    home() {
        this.props.pushHome();
    }
    request() {
        this.props.request();
    }
    render() {
        let parts = [
            <ListItem primaryText="CPU" />, 
            <ListItem primaryText="SSD" />, 
            <ListItem primaryText="Memory" />, 
            <ListItem primaryText="GPU" />, 
        ];
        return (
            <div className="MyDashboard">
                <div className="MyMenu">
                    <AppBar />
                    <List>
                        <ListItem primaryText="Book" /> 
                        <ListItem
                            primaryText="Parts"
                            nestedItems={parts}
                        /> 
                    </List>
                </div>
                <div className="MyPage">
                    <AppBar iconStyleLeft={{display: 'none'}} />
                    <div className="MyContent">
                        {
                            (() => {
                                if (this.props.loading) {
                                    return <span>loading</span>
                                }
                            })()
                        }<br/>
                        {JSON.stringify(this.props.data)}<br/>
                        <button onClick={this.about.bind(this)}>about</button>
                        <button onClick={this.home.bind(this)}>home</button>
                        <button onClick={this.request.bind(this)}>request</button>
                    </div>
                </div>
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

MyDashboard = withRouter(connect(mapStateToProps, mapDispatchToProps)(MyDashboard));

export default MyDashboard;

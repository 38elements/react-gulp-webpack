import React, {Component} from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import CircularProgress from 'material-ui/CircularProgress';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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
            <ListItem primaryText="CPU" key="1"/>, 
            <ListItem primaryText="SSD" key="2" />, 
            <ListItem primaryText="Memory" key="3" />, 
            <ListItem primaryText="GPU"  key="4" />, 
        ];
        let iconElementRight = (
            <IconMenu
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="Logout" />
            </IconMenu>
        );
        let loading = null
        if (this.props.loading) {
            loading = (
                <div className="LoadingOuter">
                    <CircularProgress className="Loading" />
                </div>
            );
        }
        return (
            <div className="MyDashboard">
                <div className="MyMenu">
                    <AppBar iconStyleLeft={{display: 'none'}} title="Dashboard" />
                    <List>
                        <ListItem primaryText="Book" /> 
                        <ListItem
                            primaryText="Parts"
                            nestedItems={parts}
                        /> 
                    </List>
                </div>
                <div className="MyPage">
                    <AppBar
                        iconStyleLeft={{display: 'none'}}
                        iconElementRight={iconElementRight}
                    />
                    <div className="MyContent">
                        <div>
                            <br/>
                            {JSON.stringify(this.props.data)}<br/>
                            <button onClick={this.about.bind(this)}>about</button>
                            <button onClick={this.home.bind(this)}>home</button>
                            <button onClick={this.request.bind(this)}>request</button>
                        </div>
                    </div>
                    {loading}
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

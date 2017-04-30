import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

let MyDashboard = function() {
    return <div>MyDashboard</div>
};

MyDashboard = withRouter(connect()(MyDashboard));

export default MyDashboard;

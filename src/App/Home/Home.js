import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

let Home = function() {
    return <div>Home</div>
};

Home = withRouter(connect()(Home));

export default Home;

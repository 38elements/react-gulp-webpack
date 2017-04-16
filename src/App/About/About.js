import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

let About = function() {
    return <div>About</div>
};

About = withRouter(connect()(About));

export default About;

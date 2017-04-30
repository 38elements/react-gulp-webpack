import { push } from 'react-router-redux';


let actionCreators = {
    pushDashboard() {
        return push('/dashboard');
    },
};

export default actionCreators;

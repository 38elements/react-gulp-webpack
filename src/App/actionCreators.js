import axios from 'axios';
import { push } from 'react-router-redux';


let actionCreators = {
    pushAbout() {
        return push('/dashboard');
    },
    pushHome() {
        return push('/');
    },
    request() {
        return (dispatch) => {
            dispatch({type: 'LOADING_START'});
            setTimeout(() => {
                axios
                    .get('/foo')
                    .then((response) => {
                        dispatch({type: 'LOADING_END'});
                        dispatch({
                            type: 'SET_DATA',
                            payload: response.data
                        });
                    });
            }, 2000);
        };
    }
};

export default actionCreators;

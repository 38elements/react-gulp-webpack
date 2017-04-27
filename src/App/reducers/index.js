import data from '../reducer'

let reducers = {
    loading(state=false, action) {
        if (action.type === 'LOADING_START') {
            return true;
        }
        else if (action.type === 'LOADING_END') {
            return false;
        }
        return state;
    },
    data
};

export default reducers;

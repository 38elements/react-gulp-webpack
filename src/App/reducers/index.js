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
    data(state={}, action) {
        if (action.type === 'SET_DATA') {
            return action.payload;
        }
        return state;
    },
};

export default reducers;

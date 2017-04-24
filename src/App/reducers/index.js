let reducers = {
    loading(state=false, action) {
        if (action.type.includes('LOADING_START')) {
            return true;
        }
        else if (action.type.includes('LOADING_END')) {
            return false;
        }
        return state;
    },
    data(state={}, action) {
        if (action.type.includes('SET_DATA')) {
            return action.data;
        }
        return state;
    },
};

export default reducers;

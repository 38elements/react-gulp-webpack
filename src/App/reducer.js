let reducer = function(state={}, action) {
    if (action.type === 'SET_DATA') {
        return action.payload;
    }
    return state;
};
export default reducer;

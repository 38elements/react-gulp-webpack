const error = store => next => action => {
    let result = next(action);
    return result;
}
export default error;

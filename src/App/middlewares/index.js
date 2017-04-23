const logMiddleware = store => next => action => {
    console.log('log before');
    console.dir(action);
    let result = next(action);
    console.log('log after');
    console.dir(result);
    return result;
}

const middlewares = [
    logMiddleware
];

export default middlewares;

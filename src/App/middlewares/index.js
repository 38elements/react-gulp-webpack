import error from './error';
import authentication from './authentication';

const middlewares = [
    error,
    authentication
];

export default middlewares;

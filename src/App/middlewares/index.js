import { matchRoutes } from 'react-router-config';
import routes from '../routes'

const logMiddleware = store => next => action => {
    // console.log('log before');
    // console.dir(action);
    if (action.type ===  '@@router/LOCATION_CHANGE') {
        let route = matchRoutes(routes, action.payload.pathname);
        console.dir(route);
    }
    let result = next(action);
    // console.log('log after');
    // console.dir(result);
    return result;
}

const middlewares = [
    logMiddleware
];

export default middlewares;

import { matchRoutes } from 'react-router-config';
import { LOCATION_CHANGE } from 'react-router-redux/reducer';
import routes from '../routes'

const authentication = store => next => action => {
    if (action.type ===  LOCATION_CHANGE) {
        let route = matchRoutes(routes, action.payload.pathname);
        console.dir(route);
    }
    let result = next(action);
    return result;
}

export default authentication;

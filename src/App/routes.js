import App from './App'
import Home from './Home';
import About from './About';


const routes = [
    {
        component: App,
        routes : [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/about',
                component: About
            },
        ]
    }
];

export default routes;

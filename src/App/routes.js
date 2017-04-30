import App from './App';
import MyRoot from './MyRoot';
import MyDashboard from './MyDashboard';


const routes = [
    {
        component: App,
        routes : [
            {
                path: '/',
                exact: true,
                component: MyRoot
            },
            {
                path: '/dashboard',
                component: MyDashboard
            },
        ]
    }
];

export default routes;

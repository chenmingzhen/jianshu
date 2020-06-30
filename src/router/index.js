import React from 'react';
import Home from '../pages/home';
import Detail from '../pages/detail';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/Home',
        component: Home,
        exact: true
    },
    {
        path: '/detail/:id',
        component: Detail,
        exact: true
    }
];
export default routes;

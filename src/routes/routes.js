import React from 'react';
import Login from '../components/Login';

export default [
  {
    name: 'Home',
    path: '/',
    auth: false,
  },
  {
    name: 'About',
    path: '/about',
    auth: false,
  },
  {
    name: 'Blog',
    path: '/blog',
    auth: false,
  },
  {
    name: 'Login',
    path: '/login',
    auth: false,
    component: Login,
  },
];

import React from 'react';
import Login from '../components/Login';
import Blog from '../components/Blog';

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
    component: Blog,
  },
  {
    name: 'Login',
    path: '/login',
    auth: false,
    component: Login,
  },
];

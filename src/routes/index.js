import React from 'react'
import Home from '../views/Home'
import Detail from '../views/Detail'
import { Redirect } from 'react-router-dom'

export const routes = [
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/detail',
    component: Detail,
    exact: true,
  },
  {
    path: '/',
    component: () => <Redirect to="/home" />,
  },
]

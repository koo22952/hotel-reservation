import React from 'react'
import Home from '../views/Home'
import Detail from '../views/Detail'
import { Redirect } from 'react-router-dom'
import DateFnsUtils from '@date-io/date-fns'

import { MuiPickersUtilsProvider } from '@material-ui/pickers'

export const routes = [
  {
    path: '/home',
    component: () => <MuiPickersUtilsProvider utils={DateFnsUtils}>< Detail/></MuiPickersUtilsProvider>,
    exact: true
  },
  {
    path: '/detail?:roomId',
    component: Detail,
    exact: true
  },
  {
    path: '/',
    component: () => <Redirect to="/home"/>
  }
]

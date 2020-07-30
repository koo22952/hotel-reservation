import React from 'react'
import Home from '../views/Home'
import Detail from '../views/Detail'
import { Redirect } from 'react-router-dom'
import DateFnsUtils from '@date-io/date-fns'

import { MuiPickersUtilsProvider } from '@material-ui/pickers'

export const routes = [
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/detail?:roomId',
    component: (props) => (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Detail {...props} />
      </MuiPickersUtilsProvider>
    ),
    exact: true,
  },
  {
    path: '/',
    component: () => <Redirect to="/home" />,
  },
]

import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const RouteRenderer = (props) => {
  const { private: isPrivateRoute } = props

  const loggedIn = sessionStorage.getItem('loggedIn')

  if (isPrivateRoute && !loggedIn) {
    return <Redirect to='/' />
  }

  return <Route exact {...props} />
}

export default RouteRenderer


import React from 'react'
import { useHistory } from 'react-router'

import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'

import useStyles from './Home.styles'

import AppHeader from '../../components/AppHeader'
import Scroll from '../Scroll'

export default function ClippedDrawer() {
  const classes = useStyles()
  const history = useHistory()

  const handleLogout = () => {
    sessionStorage.removeItem('loggedIn')
    history.push('/')
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppHeader onLogout={handleLogout} />
      <main className={classes.content}>
        <Toolbar />
        <Scroll />
      </main>
    </div>
  )
}

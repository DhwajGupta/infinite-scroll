import React from 'react'
import { useHistory } from 'react-router'

import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import useStyles from './Dashboard.styles'
import Login from '../../components/Login'

export default function Dashboard() {
  const classes = useStyles()
  const history = useHistory()

  const handleSubmit = (data) => {
    sessionStorage.setItem('loggedIn', true)
    history.push('/home')
  }

  return (
    <Grid container component='main' className={`${classes.root} ${classes.image}`}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <Login handleSubmit={handleSubmit} />
      </div>

    </Grid>
  )
}
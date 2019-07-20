import React from 'react'
import { Typography, Button, withStyles } from '@material-ui/core'
import style from './style'
import PropTypes from 'prop-types'
import logo from 'res/logo.jpg'
import { Header, Footer } from 'components'

let Home = ({ classes }) => <Header>
  <Typography align="center" variant="h4" component="h1" paragraph>
    BChan Image Board
  </Typography>
  <Typography align="center" paragraph>
    BChan is a place where you can share and view images. The cost to create an
    account is $1 USD, payable in <a href="https://bitcoincash.org"
    target="_blank" rel="noopener noreferrer">Bitcoin 
    Cash</a>.
  </Typography>
  <img className={classes.logo} src={logo} alt="BChan" />
  <Button variant="contained" color="primary" className={classes.main_cta}>
    Get Started
  </Button>
  <Footer />
</Header>

Home.propTypes = {
  classes: PropTypes.object
}

export default withStyles(style)(Home)

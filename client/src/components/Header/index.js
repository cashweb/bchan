import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import style from './style'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

let Header = ({ classes, children }) => <div className={classes.content_wrap}>
  <div className={classes.content}>
    <Link to="/">
      <Typography
        variant="h5"
        component="h1"
        align="center"
        className={classes.title}
      >
        BChan - Image Board
      </Typography>
    </Link>
  </div>
  <div className={classes.child_wrap}>
    {children}
  </div>
</div>

Header.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.any
}

export default withStyles(style)(Header)

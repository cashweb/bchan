import React from 'react'
import { withStyles } from '@material-ui/core'
import style from './style'
import PropTypes from 'prop-types'

let Theme = ({ children }) => <>{children}</>


Theme.propTypes = {
  children: PropTypes.any
}

export default withStyles(style)(Theme)

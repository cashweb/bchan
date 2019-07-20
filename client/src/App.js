import React from 'react'
import { Router, Redirect } from '@reach/router'
import { Theme } from 'components'
import { Home } from 'pages'

export default () => <Theme>
  <Router>
    <Home path="/" />
  </Router>
</Theme>

import React from 'react'
import { Router, Redirect } from '@reach/router'
import { Theme } from 'components'
import * as pages from 'pages'

export default <Theme>
  <Router>
    {Object.entries(pages).map(([currentPage, Page]) => {
      return <Page
        key={currentPage.toLowerCase()}
        path={`/${currentPage.toLowerCase()}`}
      />
    }}
  </Router>
</Theme>

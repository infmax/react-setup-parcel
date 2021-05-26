import * as React from 'react'
import {
  BrowserRouter as Router, Link, Route, Switch
} from 'react-router-dom'

import { Iroute } from '../../Routes'

function RouteWithSubRoutes(route: Iroute) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

export default RouteWithSubRoutes

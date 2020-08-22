/* @fwrlines/generator-react-component 2.1.3 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './common'


/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './switch_from_route_map.scss' */


/**
 * Use `SwitchRouteMap` to map a list of routes to a switch element
 */
const SwitchRouteMap = ({
  routes,
  NotFound,
}) => {


  return (
    <Switch
      children={
        [
          ...routes.map(({ isPrivate, ...routeProps }, i) =>{
            return isPrivate ?
              <PrivateRoute
                key={i}
                {...routeProps}
              /> :
              <Route
                key={i}
                {...routeProps}
              />}
          ),
          ...(NotFound ?
            [
              <Route component={ NotFound }/>
            ]
            : [])
        ]
      }
    />
  )}

SwitchRouteMap.propTypes = {
  /**
   * The routes to render
   */
  routes:PropTypes.arrayOf(
    PropTypes.shape({
      path   :PropTypes.string.isRequired,
      //title:PropTypes.string.isRequired,
      //state:PropTypes.string.isRequired,
    }),
  ).isRequired,

  /**
   * NotFound
   */
  NotFound:PropTypes.node,
}

/*
SwitchRouteMap.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

export default SwitchRouteMap

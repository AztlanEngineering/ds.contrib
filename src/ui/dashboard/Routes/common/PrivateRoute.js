/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import {
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom'

import { SessionContext } from '../../common'

/* Config
   import C from 'ui/cssClasses' */

/**
 * Use `PrivateRoute` to
 * Has color `x`
 */
const PrivateRoute = ({
  component:Component,
  test,
  ...rest
}) => {
  const {
    currentUserData:currentUser,
    loginPath,
  } = useContext(SessionContext)

  const location = useLocation()
  //console.log(me)
  return (
    <Route
      {...rest}
      render={props =>
        (currentUser && test(currentUser)) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname:loginPath,
              state   :{ from: location } //TODO to implement
            }}
          />
        )
      }
    />
  )
}


PrivateRoute.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  test:PropTypes.func,

  /**
   * Which javascript component to render
   */
  Component:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

}

PrivateRoute.defaultProps = {
  test:(user) => user.id
  /* height:'2.2em',
     as:'p', */
}

export default PrivateRoute

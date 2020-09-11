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
 * Use `PrivateRoute` to privatize a route based on the existence of a user in the context or a condition. Please note that even if all props are passed to the rendered component, we use a render prop pattern to display the children, and that `component` is needed and the original render functions passed will not work.
 * Has color `x`
 */
const PrivateRoute = ({
  component:Component,
  render,
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
        (currentUser && test(currentUser)) ? render ? render(props) : (
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

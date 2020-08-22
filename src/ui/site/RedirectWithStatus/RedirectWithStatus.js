/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

/**
 * Use `RedirectWithStatus` to` Redirect` (`react-router-dom`) adding a status code.
 * Refer to https://reacttraining.com/react-router/
 */
const RedirectWithStatus = ({
  status,
  ...otherProps
}) => {

  return (
    <Route
      render={({ staticContext }) => {
        /* there is no `staticContext` on the client, so
           we need to guard against that here */
        if (staticContext) staticContext.status = status
        return <Redirect { ...otherProps } />
      }}
    />
  )
}

RedirectWithStatus.propTypes = {
  /**
   * The status code to send with this redirect
   */
  status:PropTypes.number,
}

/*
RedirectWithStatus.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default RedirectWithStatus

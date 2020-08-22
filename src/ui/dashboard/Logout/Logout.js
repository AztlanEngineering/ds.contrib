/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
import { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

import { SessionContext } from '../common/SessionContext'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './logout.scss'
   import('./logout.scss') */

//const baseClassName = 'logout'


/**
 * Use `Logout` to logout the user. Consumes `dashboard/common/SessionCntext`
 *
 */
const Logout = ({
}) => {

  const {
    logout
  } = useContext(SessionContext)

  useEffect(() => {
    if(logout) {
      logout()
    }
  },
  []
  )


  return null
}

Logout.propTypes = {
}

/*
Logout.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

export default Logout

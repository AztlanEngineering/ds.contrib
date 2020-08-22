/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'




//Intl

import { FormattedMessage} from 'react-intl'

import messages from './messages'

import { SessionContext } from 'ui/collections/dashboard'

import { Link } from 'react-router-dom'

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './logout_link.scss' */
//import { isBackend } from 'ui/isBackend'

const baseClassName = 'logout_link'

/**
 * Use `LogoutLink` to
 * Has color `x`
 */
const LogoutLink = ({
  id,
  className,
  style
}) => {

  const { logoutPath } = useContext(SessionContext)

  return (
    <Link
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      to={ logoutPath }
    >
      <FormattedMessage {...messages.logout} />
    </Link>
  )}

LogoutLink.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

}

/*
LogoutLink.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default LogoutLink

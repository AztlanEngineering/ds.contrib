/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { HorizontalBar } from '@fwrlines/ds/site'
import {
  ConnectionStatus,
  LogoutLink
} from './common'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './status_bar.scss' */
/*import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./status_bar.scss')
}*/

const baseClassName = 'status_bar'


/**
 * Use `StatusBar` to
 * Has color `x`
 * !!!Make sure this is wrapped in SessionContextProvider (collections/dashboard)
 */
const StatusBar = ({
  id,
  className,
  style
}) => {


  return (
    <HorizontalBar
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'u50',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <div className='yf inside'>
        <ConnectionStatus />
        <LogoutLink />
      </div>
    </HorizontalBar>
  )}

StatusBar.propTypes = {
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

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,
  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

/*
StatusBar.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

StatusBar.LogoutLink = LogoutLink
StatusBar.ConnectionStatus = ConnectionStatus

export default StatusBar

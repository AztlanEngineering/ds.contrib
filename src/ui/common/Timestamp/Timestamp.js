/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'


import { format, fromUnixTime } from 'date-fns'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './timestamp.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./timestamp.scss')
}

const baseClassName = 'timestamp'


/**
 * Use `Timestamp` to
 * Has color `x`
 */
const Timestamp = ({
  id,
  className,
  style,
  time,
  prefix,

  as:Element
}) => {

  const [displayUnix, setDisplayUnix] = useState(false)

  const onClick = (e) => {
    setDisplayUnix(!displayUnix)
  }

  return (
    <Element
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'pointer',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      onClick={ onClick }

    >
      { prefix && prefix }
      { prefix && ' ' }
      {
        displayUnix ? Number(time) : format(new Date(time), 'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx')
      }
    </Element>
  )}

Timestamp.propTypes = {
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
  prefix:PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * The time to display
   */
  time:PropTypes.number.isRequired,
}

Timestamp.defaultProps = {
  as:'p',
}
export default Timestamp

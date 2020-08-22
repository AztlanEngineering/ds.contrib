/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'


import ga from 'react-ga'

import { usePage } from '@fwrlines/ds/site'

import { Link } from 'react-router-dom'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './analytics_link.scss' */
/*
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./analytics_link.scss')
}
*/

const baseClassName = 'analytics_link'


/**
 * Use `AnalyticsLink` to
 * Has color `x`
 */
const AnalyticsLink = ({
  id,
  className,
  style,
  children,

  event,

  ...otherProps
}) => {

  const { id:pageId } = usePage()

  const onClick = (e) => {
    ga.event({
      category:pageId && `${pageId}`,
      ...event
    })
  }

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
      { ...otherProps }
    >
      <span onClick={ onClick }>
        { children }
      </span>
    </Link>
  )}

AnalyticsLink.propTypes = {
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
   * The GA event to send on click
   */
  event:PropTypes.shape({
    category      :PropTypes.string.isRequired,
    action        :PropTypes.string.isRequired,
    label         :PropTypes.string,
    value         :PropTypes.string,
    nonInteraction:PropTypes.bool,
  }).isRequired,
}

/*
AnalyticsLink.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default AnalyticsLink

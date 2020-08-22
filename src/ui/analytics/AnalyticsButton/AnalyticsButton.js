/* @fwrlines/generator-react-component 2.4.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'
import { Button } from '@fwrlines/ds/elements'
import { usePage } from '@fwrlines/ds/site'


import ga from 'react-ga'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './analytics_button.scss' */
/*
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./analytics_button.scss')
}*/

const baseClassName = ''//'analytics_button'

/**
 * Use `AnalyticsButton` associate events with a clickable button. Atm this is not set up and only reexportes the base button.
 * Has color `x`
 */
const AnalyticsButton = ({
  id,
  className,
  style,

  event,

  onClick:userOnClick,
  ...otherProps



}) => {

  const { id:pageId } = usePage()

  const onClick = (e) => {
    ga.event({
      category:pageId && `${pageId}`,
      ...event
    })
    userOnClick(e)
  }

  return (
    <Button
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      onClick={ onClick }
      { ...otherProps }
    />
  )}

AnalyticsButton.propTypes = {
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

AnalyticsButton.defaultProps = {
  status:'neutral',
  event :{},
  /* height:'2.2em',
     as:'p', */
}

export default AnalyticsButton

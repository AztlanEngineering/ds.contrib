/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Keys } from 'ui/common'


import { useKeyboardShortcut } from '@fwrlines/utils'



//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './shortcut.scss' */

const baseClassName = 'shortcut'


/**
 * Use `Shortcut` to
 * Has color `x`
 */
const Shortcut = ({
  id,
  className,
  style,
  keys,
  action,
  displayKeys,
  ...otherProps
}) => {
  const ctrlKey = keys.includes('ctrl')
  const shiftKey = keys.includes('shift')
  const altKey = keys.includes('alt')

  const finalKey = keys.find(e => e.length === 1)

  useKeyboardShortcut(
    finalKey,
    action,
    {
      requireCtrlKey:ctrlKey,
      requireShiftKey:shiftKey,
      requireAltKey:altKey,
    }

  )
  


  return (
    <Keys
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      keys={ keys }
      { ...otherProps }
    />
  )}

Shortcut.propTypes = {
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
   * Whether to display the keyboard keys
   */
  displayKeys:PropTypes.bool,

  /**
   * The keys to display
   */
  keys:PropTypes.arrayOf(PropTypes.string).isRequired,

  /**
   * The action to trigger
   */
  action:PropTypes.func,
}

Shortcut.defaultProps = {
  displayKeys:true,
  /* height:'2.2em',
     as:'p', */
}

export default Shortcut

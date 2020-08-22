/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'



//Config
import C from 'ui/cssClasses'

/* Relative imports
   import styles from './input_icon.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./input_icon.scss')
}

const baseClassName = 'input_icon'


/**
 * Use `InputIcon` to
 * Has color `x`
 */
const InputIcon = ({
  id,
  className,
  style,

  icon
}) => {


  return (
    <div
      className={
        [
        //styles[baseClassName],
          baseClassName,
          C.icon,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <p>
        { icon }
      </p>
    </div>
  )}

InputIcon.propTypes = {
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
   * The icon to display
   */
  icon:PropTypes.string.isRequired,
}

/*
InputIcon.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default InputIcon

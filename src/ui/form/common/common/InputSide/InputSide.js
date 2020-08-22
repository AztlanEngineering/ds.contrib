/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'



//Config
import C from 'ui/cssClasses'

/* Relative imports
   import styles from './input_side.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./input_side.scss')
}

const baseClassName = 'side'


/**
 * Use `InputSide` to
 * Has color `x`
 */
const InputSide = ({
  id,
  className,
  style,
  children,

  //side,
}) => {


  return (
    <div
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
        { children }
    </div>
  )}

InputSide.propTypes = {
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
   * The side of the input on which to display this
   */
  //side: PropTypes.oneOf(['left', 'right']).isRequired
}

/*
InputSide.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default InputSide

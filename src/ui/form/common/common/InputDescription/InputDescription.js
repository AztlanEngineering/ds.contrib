/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./input_description.scss')
}

const baseClassName = 'description'


/**
 * Use `InputDescription` to
 * Has color `x`
 */
const InputDescription = ({
  id,
  className,
  style,
  children,
  as:Wrapper
}) => {


  return (
    <Wrapper
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
    </Wrapper>
  )}

InputDescription.propTypes = {
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
}

InputDescription.defaultProps = {
  as:'p',
}

export default InputDescription

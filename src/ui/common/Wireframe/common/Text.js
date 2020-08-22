/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import PropTypes from 'prop-types'

import TEST_TXT from './Dummy.js'

/* Config
   import C from 'ui/cssClasses' */

const baseClassName = 'wireframe_text'

const Text = ({
  id,
  className,
  style,
  children,

  size,

  as:Element,
}) => {


  return (
    <Element
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { children || TEST_TXT[size] }
    </Element>
  )}

Text.propTypes = {
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
   * With html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),

  /**
   * The length of the test text
   */
  size:PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

Text.defaultProps = {
  size:'md',
  as  :'p',
}

export default Text

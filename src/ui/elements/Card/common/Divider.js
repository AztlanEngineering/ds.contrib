/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import PropTypes from 'prop-types'

//Config
import C from 'ui/cssClasses'

const baseClassName = C.divider

const Divider = ({
  id,
  className,
  style
}) => {
  return (
    <div
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    />
  )}

Divider.propTypes = {
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

export default Divider

/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

//Relative imports
const baseClassName = 'wireframe_img'

const Image = ({
  id,
  className,
  style,
  height,
  width,
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
      style={{
        ...style,
        height,
        width
      }}
      id={ id }
    />
  )}

Image.propTypes = {
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
   * With html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,
}

Image.defaultProps = {
  as:'div',
}

export default Image

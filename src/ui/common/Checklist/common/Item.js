/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import PropTypes from 'prop-types'



//Config
import C from 'ui/cssClasses'


const baseClassName = C.item
const cross_class = 'cross'

const Item = ({
  id,
  className,
  style,
  children,

  cross,

  dangerouslySetInnerHTML
}) => {


  return (
    <li
      className={
        [
          baseClassName, //Because we are a subitem
          cross && cross_class,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
    >
      { children }
    </li>
  )}

Item.propTypes = {
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
   *  Whether it's a cross
   */
  cross:PropTypes.bool,
}

Item.defaultProps = {
  cross:false,
}


export default Item

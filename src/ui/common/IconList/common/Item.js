/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './item.scss'
   import './item.scss' */

const baseClassName = 'item'


/**
 * Use `Item` to
 * Has color `x`
 */
const Item = ({
  id,
  className,
  style,
  children,

  icon,
  iconHover,

  ...otherProps
}) => {


  return (
    <li
      className={
        [
          baseClassName, //Because we are a subitem
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={{
        ...style,
        '--list-icon'      :icon && `"${icon}"`,
        '--list-icon-hover':iconHover && `"${iconHover}"`,
      }}
      { ...otherProps }

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
   * The icon of the list element
   */
  icon:PropTypes.string,

  /**
   * The icon of the list element on hover
   */
  iconHover:PropTypes.string,
}

/*
Item.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Item

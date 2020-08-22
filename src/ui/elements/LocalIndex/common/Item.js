/* @fwrlines/generator-react-component 1.1.2 */
import React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

//Relative imports

const baseClassName = 'item'

const Item = ({
  id,
  className,
  children,
  style,

  title
}) => {
  return (
    <li
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <span>{ title }</span>
      { children &&
        <ul className='x-subtitle c-x'>
          { children }
        </ul>
      }
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
   * The title of the Item
   */
  title:PropTypes.string,
}

/*
Item.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

export default Item

/* @fwrlines/generator-react-component 2.1.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Heading } from 'ui/elements'

//Config
import C from 'ui/cssClasses'

/* Relative imports
   import styles from './item.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./item.scss')
}

const baseClassName = 'item'


/**
 * Use `Item` to. Props are passed to the heading component
 * Has color `x`
 */
const Item = ({
  id,
  className,
  style,
  children,

  as:Wrapper,
  ...otherProps
}) => {



  return (
    <Heading
      className={
        [
        //styles[baseClassName],
          baseClassName,
          C.pointer,
          'yib',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      heading={ children }
      { ...otherProps }
    />
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
}

/*
Item.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Item

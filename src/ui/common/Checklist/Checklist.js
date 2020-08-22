/* @fwrlines/generator-react-component 1.0.1 */
import * as React from 'react'
import PropTypes from 'prop-types'
/*
   Config */
import C from 'ui/cssClasses'

//Relative imports
import { isBackend } from 'ui/isBackend'
if (!isBackend) {
  import('./checklist.scss')
}

import { Item } from './common'

const baseClassName = 'checklist'


/**
 * ! DEPRECATED ! Use `Iconlist` instead
 * Use `Checklist` to display a list with checkmarks
 * Has class `C.list`
 * Before has color `y, x`, and `z, x` on hover
 */
const Checklist = ({
  id,
  className,
  style,

  dangerouslySetInnerHTML,
  children,
}) => {

  return (
    <ul
      className={
        [
          baseClassName,
          C.list,
          className,
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
    >
      { children }
    </ul>
  )}

Checklist.propTypes = {
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

Checklist.Item = Item

export default Checklist

/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import PropTypes from 'prop-types'


/* Config
   import C from 'ui/cssClasses' */

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./breadcrumb.scss')
}
import { Item } from './common'

const baseClassName = 'breadcrumb'

const Breadcrumb = ({
  id,
  className,
  style,
  children
}) => {


  return (
    <ol
      id={ id }
      style={ style }
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      itemScope
      itemType='http://schema.org/BreadcrumbList'
    >
      { children }
    </ol>
  )}

Breadcrumb.propTypes = {
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
  children:PropTypes.node.isRequired,

}

/*
Breadcrumb.defaultProps = {
  status: 'neutral',
}
*/

Breadcrumb.Item = Item

export default Breadcrumb

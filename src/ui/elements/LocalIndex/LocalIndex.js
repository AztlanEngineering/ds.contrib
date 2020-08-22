/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import PropTypes from 'prop-types'

import C from 'ui/cssClasses'

import { Subtitle } from 'ui/common'
//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./local_index.scss')
}
import { Item } from './common'

const baseClassName = 'local_index'

const LocalIndex = ({
  id,
  className,
  style,
  children,

  title,
  ...otherProps
}) => {


  return (
    <ol
      className={
        [
          baseClassName,
          'lsn x-heading cx',
          C.compact,
          C.list,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      { ...otherProps }
    >
      { title && 
      <Subtitle
        className={
          ' x-metadata'
        }
        upper
      >
        { title }
      </Subtitle>}
      { children }
    </ol>
  )}

LocalIndex.propTypes = {
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
   * The title of the Index
   */
  title:PropTypes.string,

}

/*
LocalIndex.defaultProps = {
  status: 'neutral',
}
*/
LocalIndex.Item = Item

export default LocalIndex

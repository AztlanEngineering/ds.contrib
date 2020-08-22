/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import {
  Item
} from './common'

/* Config */
import C from 'ui/cssClasses'

/* Relative imports*/
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./icon_list.scss')
}

const baseClassName = 'icon_list'


/**
 * Use `IconList` to
 * Has icon color `y` and iconHover color `z`, defaults to `x`, so use `x` for the text if needed
 */
const IconList = ({
  id,
  className,
  style,
  children,

  icon,
  iconHover,

  iconsStyle,

  ...otherProps
}) => {

  return (
    <ul
      className={
        [
        //styles[baseClassName],
          baseClassName,
          C.list,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={{
        ...style,
        '--fi':iconsStyle ?`${iconsStyle}` : undefined,
        '--list-icon'      :icon && `"${icon}"`,
        '--list-icon-hover':iconHover && `"${iconHover}"`,
      }}
      { ...otherProps }
    >
      { children }
    </ul>
  )}

IconList.propTypes = {
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
   * The default icon of the list element
   */
  icon:PropTypes.string,

  /**
   * The default icon of the list elements on hover
   */
  iconHover:PropTypes.string,

  /**
   * The style of the icons (set var `--fi:{iconStyle}` in css)
   *
   */
  iconsStyle:PropTypes.string,

}

IconList.defaultProps = {
  iconsStyle:'icons',
  /* height:'2.2em',
     as:'p', */
}

IconList.Item = Item

export default IconList

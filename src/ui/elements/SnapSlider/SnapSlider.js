/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import PropTypes from 'prop-types'



import { gql } from 'graphql-tag'

import C from 'ui/cssClasses'

/* Relative imports */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./snap_slider.scss')
}

const baseClassName = 'snap_slider'

const SnapSlider = ({
  id,
  className,
  style,
  children,

  compact,
  pin,
  scrollbar,
}) => {

  return (
    <div
      className={
        [
          // styles[baseClassName],
          baseClassName,
          !scrollbar && 'nsb-xs',
          compact && C.compact,
          C[pin], //pin being 'center', 'right', or 'left'
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { children }
    </div>
  )}

SnapSlider.propTypes = {
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
   *  The children JSX. They need to have a min-width to provoke an overflow-x of the SnapSlider
   */
  children:PropTypes.node.isRequired,

  /**
   * Whether to show the scrollbar
   */
  scrollbar:PropTypes.bool,

  /**
   * Whether the items are compact (less space btw them)
   */
  compact:PropTypes.bool,

  /**
   * Where to pin the items
   */
  pin:PropTypes.oneOf(['left', 'center', 'right'])
}

SnapSlider.defaultProps = {
  compact  :false,
  pin      :'center',
  scrollbar:false,
}

export default SnapSlider

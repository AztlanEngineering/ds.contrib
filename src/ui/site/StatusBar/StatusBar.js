/* @fwrlines/generator-react-component 1.2.2 */
import * as React from 'react'
import PropTypes from 'prop-types'


import C from 'ui/cssClasses'

/* Relative imports
   import styles from './status_bar.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./status_bar.scss')
}

const baseClassName = 'status_bar'


/**
 * Use `StatusBar` to
 * Has color `x`
 */
const StatusBar = ({
  id,
  className,
  style,
  children,

  fixed,
  status,
}) => {


  return (
    <div
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'ur by',
          fixed && C.fixed,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <p className='yib h5 c-light-x s0 ls'>{ status }</p>
      { children }
    </div>
  )}

StatusBar.propTypes = {
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
   * Whether the bar is fixed at the bottom
   */
  fixed:PropTypes.bool,

  /**
   * Whether the bar is fixed at the bottom
   */
  status:PropTypes.string,

}

/*
StatusBar.defaultProps = {
  status: '4 unsaved modifications.',
  //height:'2.2em',
  //as:'p',
}
*/
export default StatusBar

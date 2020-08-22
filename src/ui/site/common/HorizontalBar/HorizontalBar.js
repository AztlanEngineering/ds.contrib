/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import {
  ProgressBar
} from 'ui/common'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './menu_top_bar.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./horizontal_bar.scss')
}

const baseClassName = 'horizontal_bar'


/**
 * Use `HorizontalBar` to display a horizontal menu bar.
 * Has background `x` and default color `on-x`
 */
const HorizontalBar = ({
  id,
  className,
  style,
  children,

  as:Wrapper
}) => {


  return (
    <Wrapper
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { children }
    </Wrapper>
  )}

HorizontalBar.propTypes = {
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
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

HorizontalBar.defaultProps = {
  //height:'2.2em',
  as:'nav',
}

export default HorizontalBar

/* @fwrlines/generator-react-component 2.1.1 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import { DashboardContext } from '../common/'



/* Config */
import C from 'ui/cssClasses'

/* Relative imports
   import styles from './main.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./main.scss')
}

const baseClassName = 'main'


/**
 * Use `Main` to draw the main dashboard canvas. Consumes DashboardContext
 * Has color `x`
 */
const Main = ({
  id,
  className,
  style,
  children,

  as:Element
}) => {

  const {
    focus
  } = useContext(DashboardContext)

  return (
    <Element
      className={
        [
        //styles[baseClassName],
          baseClassName,
          (focus == 'main') && C.active,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { children }
    </Element>
  )}

Main.propTypes = {
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

Main.defaultProps = {
  as:'main',
}

export default Main

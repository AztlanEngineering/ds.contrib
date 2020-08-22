/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './radio_dot.scss'
   import './radio_dot.scss' */

const baseClassName = 'dot'


/**
 * Use `RadioDot` to
 * Has color `x`
 */
const RadioDot = ({
  className,
  style,

  strokeLinecap,
}) =>
{
  return(
    <svg
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      style={ style }
    >
      <circle
        cx='50'
        cy='50'
        r='20'
      />
      <path
        d='M34.745,7.183C25.078,12.703,13.516,26.359,8.797,37.13 c-13.652,31.134,9.219,54.785,34.77,55.99c15.826,0.742,31.804-2.607,42.207-17.52c6.641-9.52,12.918-27.789,7.396-39.713 C85.873,20.155,69.828-5.347,41.802,13.379'
        strokeLinecap={ strokeLinecap }
      />
    </svg>
  )
}

RadioDot.propTypes = {
  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   * The SVG property stroke-linecap
   */
  strokeLinecap:PropTypes.oneOf(['round', 'square', 'butt']),
}

RadioDot.defaultProps = {
  strokeLinecap:'round',
}

export default RadioDot

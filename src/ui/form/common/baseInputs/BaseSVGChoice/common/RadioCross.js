/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './radio_cross.scss'
   import './radio_cross.scss' */

const baseClassName = 'cross'


/**
 * Use `RadioCross` to
 * Has color `x`
 */
const RadioCross = ({
  className,
  style,

  strokeLinecap,
}) => {
  return (
    <svg
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      style={ style }
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
    >
      <circle
        cx='50'
        cy='50'
        r='50'
      />
      <path
        d='M 26 26 L 74 74'
        className='cross-1'
        strokeLinecap={ strokeLinecap }
      >
      </path>
      <path
        d='M 74 26 L 26 74'
        className='cross-2'
        strokeLinecap={ strokeLinecap }
      >
      </path>
    </svg>

  )
}


RadioCross.propTypes = {

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

RadioCross.defaultProps = {
  strokeLinecap:'round',
}

export default RadioCross

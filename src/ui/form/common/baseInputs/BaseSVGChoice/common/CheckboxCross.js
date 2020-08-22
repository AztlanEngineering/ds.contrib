/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './checkbox_cross.scss'
   import './checkbox_cross.scss' */

const baseClassName = 'cross'

/**
 * Use `CheckboxCross` to
 * Has color `x`
 */
const CheckboxCross = ({
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
      <rect
        x='7'
        y='7'
        width='86'
        height='86'
      />
      <path
        d='M 22 22 L 78 78'
        className='cross-1'
        strokeLinecap={ strokeLinecap }
      >
      </path>
      <path
        d='M 78 22 L 22 78'
        className='cross-2'
        strokeLinecap={ strokeLinecap }
      >
      </path>
    </svg>

  )
}

CheckboxCross.propTypes = {
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

CheckboxCross.defaultProps = {
  strokeLinecap:'round',
}

export default CheckboxCross

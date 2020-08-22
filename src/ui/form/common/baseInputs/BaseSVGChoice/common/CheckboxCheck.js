/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './checkbox_check.scss'
   import './checkbox_check.scss' */

const baseClassName = 'check'


/**
 * Use `CheckboxCheck` to
 * Has color `x`
 */
const CheckboxCheck = ({
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
        x='5'
        y='5'
        width='90'
        height='90'
      />
      <path
        d='M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16'
        className='check-1'
        strokeLinecap={ strokeLinecap }
      />
    </svg>

  )

}

CheckboxCheck.propTypes = {
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

CheckboxCheck.defaultProps = {
  strokeLinecap:'round',
}

export default CheckboxCheck

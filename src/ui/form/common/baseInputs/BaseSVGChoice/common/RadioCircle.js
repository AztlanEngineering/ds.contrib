/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './radio_circle.scss'
   import './radio_circle.scss' */

const baseClassName = 'circle'


/**
 * Use `RadioCircle` to
 * Has color `x`
 */
const RadioCircle = ({
  className,
  style,

  //strokeLinecap,
}) =>{
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
        r='35'
        className='outer'
      />
      <circle
        cx='50'
        cy='50'
        r='18'
        className='inner'
      />
    </svg>
  )

}

RadioCircle.propTypes = {
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
  //strokeLinecap:PropTypes.oneOf(['round', 'square', 'butt']),
}

/*
RadioCircle.defaultProps = {
  //strokeLinecap:'round',
}
*/

export default RadioCircle

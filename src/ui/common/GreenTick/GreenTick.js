/* @fwrlines/generator-react-component 1.0.1 */
import * as React from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend){
  import('./green_tick.scss')
}

const baseClassName = 'green_tick'

const GreenTick = ({
  id,
  className,
  style
}) => {


  return (
    <svg
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      preserveAspectRatio='xMinYMin meet'
      viewBox={`0 0 154 154`}
    >
      <g>
        <circle
          id='outline'
          cx='77'
          cy='77'
          r='72'
        >
        </circle>
        <circle
          id='colored'
          cx='77'
          cy='77'
          r='72'
        >
        </circle>
        <polyline
          id='line'
          className='st0'
          points='43.5,77.8 63.7,97.9 112.2,49.4'
        />
      </g>
    </svg>

  )}

GreenTick.propTypes = {
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
}

/*
GreenTick.defaultProps = {
  status: 'neutral',
}
*/

export default GreenTick

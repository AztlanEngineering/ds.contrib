/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import PropTypes from 'prop-types'

//Config
import C from 'ui/cssClasses'

/* Relative imports*/
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./round_progress.scss')
}
import { NumberIncrease } from 'ui/common'

const baseClassName = 'round_progress'

const RoundProgress = ({
  id,
  className,
  style,

  number,
  max=100,

  unit,
  title,
  titleClassName,

  duration=1500,
  strokeWidth=10,
  strokeLinecap='round',
}) => {


  return (
    <div
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

      <svg
        viewBox='0 0 100 100'
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        preserveAspectRatio='xMinYMin meet'
      >
        <g>
          <circle
            cx='50'
            cy='50'
            r={40 + strokeWidth / 2}
            className={ C.contour }
            strokeWidth={ strokeWidth }
          />
          <circle
            cx='50'
            cy='50'
            r='40'
            className={ C.center }
          />
          <circle
            cx='50'
            cy='50'
            r={40 + strokeWidth / 2}
            className={ C.stroke }
            style={{'--svg-tdo':300 - (number * 300 ) / max
						+ (['round', 'square'].includes(strokeLinecap) ? 10 : 0)
            }}
            //Magic happens here using animation @draw-stroke from fwr scss
            strokeLinecap={ strokeLinecap }
            strokeWidth={ strokeWidth }
            //strokeDasharray={ number * 300 / max }

            strokeDashoffset={ number * 300 / max } // A bit redundant with style
          />
        </g>
      </svg>
      <NumberIncrease
        className='number uc r-xl'
        number={ number }
        duration={ duration }
        suffix={ unit }
        Wrapper='span'
      />
      <p className={
        [
          C.title,
          'uc',
          titleClassName
        ].filter(e => e).join(' ')
      }
      >
        { title }
      </p>
    </div>
  )}

RoundProgress.propTypes = {
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
   * The number, as a fragment of 'max'
   */
  number:PropTypes.number.isRequired,

  /**
   * The title
   */
  title:PropTypes.string,

  /**
   * The html class names to be provided to the title
   */
  titleClassName:PropTypes.string,

  /**
   * The maximum number (100% of the circle)
   */
  max:PropTypes.number.isRequired,

  /**
   * The unit, to append as a suffix
   */
  unit:PropTypes.string,

  /**
   * The duration of the animation in milliseconds
   */
  duration:PropTypes.number,

  /**
   * The stroke width SVG  Property
   */
  strokeWidth:PropTypes.number,

  /**
   * The stroke line cap SVG Property
   */
  strokeLinecap:PropTypes.oneOf(['round', 'square', 'butt']),
}

RoundProgress.defaultProps = {
  max:100,

}

export default RoundProgress

/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./progress_bar.scss')
}

const baseClassName = 'progress_bar'

/**
 * Use `ProgressBar` to
 * Has color `x`
 */
const ProgressBar = ({
  id,
  className,
  style,

  rectClassName,
  strokeWidth,
  gradientMap,

  maximum,
  current
}) => {

  const pathVerticalPosition = strokeWidth / 2

  return (
    <div
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={{ ...style, height: strokeWidth }}
    >
      <svg
        viewBox={`0 0 100 ${strokeWidth}`}
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        preserveAspectRatio='none'
        height={ strokeWidth }
        className={
          //TODO
          [
            baseClassName,
            className
          ].filter(e => e).join(' ')
        }
      >

        { gradientMap &&
          <defs>
            <linearGradient
              id='pbg'
              x2='100%'
              y2='0'
            >
              {
                gradientMap.map((e,i) =>(
                  <stop
                    key={i}
                    { ...e }
                  />
                ))
              }
            </linearGradient>
          </defs>
        }

        <mask id='pb_mask'>
          <rect
            width='100'
            height={ strokeWidth }
            fill='black'
          />
          <path
            d={`M0 ${pathVerticalPosition} H 100`}
            strokeLinecap='butt'
            strokeWidth={ strokeWidth }
            strokeDasharray='100'
            id='active'
            style={{
              '--do':Math.min(Math.max(maximum - current, 0), maximum)
            }}
            stroke='white'
          />
        </mask>

        <g>
          <rect
            width='100'
            height={ strokeWidth }
            id='pb_back'
            className={
              rectClassName ? rectClassName : ''
            }
            mask='url(#pb_mask)'
            style={{
				    '--fill':gradientMap && `url(#pbg)`
				  }}
          />
        </g>
      </svg>

    </div>
  )}

ProgressBar.propTypes = {
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
   * An html class to pass to the main rectangle
   */
  rectClassName:PropTypes.string,

  /**
   * The height of the bar, sent as svg property strokewidth
   */
  strokeWidth:PropTypes.number,

  /**
   * The svg map for the gradient background
   */
  gradientMap:PropTypes.arrayOf(PropTypes.shape({
    offset   :PropTypes.string.isRequired,
    stopColor:PropTypes.string.isRequired,
  })),


  /**
   * The maximum value
   */
  maximum:PropTypes.number,

  /**
   * The current value
   */
  current:PropTypes.number,

}

ProgressBar.defaultProps = {
  maximum    :100,
  strokeWidth:8,
  current    :50,
}

export default ProgressBar

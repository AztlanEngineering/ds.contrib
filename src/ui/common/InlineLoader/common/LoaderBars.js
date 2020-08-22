/* @fwrlines/generator-react-component 1.1.1 */
import * as React from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./loader_bars.scss')
}

const baseClassName = 'loader_bars'

const LoaderBars = ({
  id,
  className,

  height,
  width,

  strokeLinecap,
  strokeWidth,

  animationDuration
}) => {


  const longLinecap = ['round', 'square'].includes(strokeLinecap)
  const endOfLinecap = longLinecap ? strokeWidth / 2 : 0
  const totalHeight = 40
  const numberOfElements = 6
  const y1 = endOfLinecap
  const ay1 = totalHeight - strokeWidth
  const y2 = totalHeight - endOfLinecap
  const fractTime = animationDuration / numberOfElements

  return (
    <svg
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      x='0px'
      y='0px'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      preserveAspectRatio='xMinYMin meet'
      width={width || (!height ? '120' : undefined)}
      height={height || ( !width ? totalHeight : undefined)}
      viewBox={`0 0 120 ${totalHeight}`}
    >
      { [...Array(numberOfElements)].map((e,i) =>{
        // const currentPosition=`M${10 + i*20},${endOfLinecap} v${totalHeight - 2*endOfLinecap}`

        const begin = i*fractTime

        return (
          <line
            key={ i }
            strokeLinecap={ strokeLinecap }
            strokeWidth={ strokeWidth }
            x1={ 10 + i*20 }
            y1={ ay1 }
            x2={ 10 + i*20 }
            y2={ y2 }
          >

            <animate
              attributeType='XML'
              attributeName='y1'
              values={`${ay1};${y1};${ay1};${ay1}`}
              keyTimes={'0;.2;.4;1'}
              dur={ animationDuration + 's' }
              repeatCount='indefinite'
              begin={`${begin}s`}
            />

          </line>

        )
      }
      ) }

    </svg>
  )}

LoaderBars.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The height of the loader
   */
  height:PropTypes.string,

  /**
   * The width of the loader
   */
  width:PropTypes.string,

  /**
   * The SVG property stroke-linecap
   */
  strokeLinecap:PropTypes.oneOf(['round', 'square', 'butt']),

  /**
   * The SVG property stroke-width
   */
  strokeWidth:PropTypes.string,

  /**
   * The duration of the animation in seconds
   */
  animationDuration:PropTypes.number,

}

LoaderBars.defaultProps = {
  strokeLinecap    :'round',
  strokeWidth      :'14',
  animationDuration:1.25
}

export default LoaderBars

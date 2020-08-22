/* @fwrlines/generator-react-component 1.1.1 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./loader_circle.scss')
}

const baseClassName = 'loader_circle'



const LoaderCircle = ({
  id,
  className,

  height,
  width,

  strokeLinecap,
  strokeWidth,
}) =>
{
  const totalHeight = 40

  return (
    <svg
      viewBox='25 25 50 50'
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
    >
      <circle
        className='path'
        cx='50'
        cy='50'
        r='20'
        fill='none'
        strokeWidth={ strokeWidth }
        strokeLinecap={ strokeLinecap }
        strokeMiterlimit='10'
      />
    </svg>
  )}

LoaderCircle.propTypes = {
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
}

LoaderCircle.defaultProps = {
  strokeLinecap:'round',
  strokeWidth  :'5',
}

export default LoaderCircle

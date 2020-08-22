/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config*/
import C from 'ui/cssClasses'

//Relative imports
import { UseSVG } from './common'
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./svg.scss')
}

const baseClassName = 'svg'

const SVG = ({
  id,
  className,
  style,

  width,
  height,
  viewBox,
  preserveAspectRatio,

  useClassName,

  sprite,
  target,
  targets,
  source,

  strokeWidth,
  animated,
  ...otherProps
}) => {

  return (
    <svg
      className={
        [
          baseClassName,
          className,
          animated && C.anim
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      preserveAspectRatio={ preserveAspectRatio }
      width={width || (!height ? '512' : undefined)}
      height={height || ( !width ? '512' : undefined)}
      viewBox={viewBox}
      { ...otherProps }
    >
      { source ?
        <UseSVG
          className={ useClassName }
          source={ source }
          strokeWidth={ strokeWidth }
        />
        :
       !targets ?
        <UseSVG
          className={ useClassName }
          sprite={ sprite }
          target={ target }
          strokeWidth={ strokeWidth }
        />
        :
        targets.map((e, i) =>
          <UseSVG
            className={ e.className }
            sprite={ sprite }
            target={ e.target }
            strokeWidth={ e.strokeWidth }
            key={ i }
          />
        )
      }

    </svg>
  )}

SVG.propTypes = {
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
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,

  /**
   * The viewBox property of the svg html container
   */
  viewBox:PropTypes.string,

  /**
   * The class to apply to the target's use tag
   */
  useClassName:PropTypes.string,

  /**
   *  The preserverveAspectRatio property of the svg html container
   */
  preserveAspectRatio:PropTypes.string,

  /**
   * The url to the sprite
   */
  sprite:PropTypes.string,

  /**
   * The id of the target in the sprite
   */
  target:PropTypes.string,

  /**
   * In case this is not a sprite but a standalone svg. Not recommended here, better use Figure. The only reason you would wanna use this instead of target is in the case you need to dynamically pass css classes to the inner svg components
   */
  source:PropTypes.string,

  /**
   * An array of targets
   */
  targets:PropTypes.arrayOf(
    PropTypes.exact({
      target     :PropTypes.string,
      className  :PropTypes.number,
      stroke     :PropTypes.boolean,
      strokeWidth:PropTypes.number,
    }),
  ),

  /**
   * The SVG property stroke-width to apply in case of a single target
   */
  strokeWidth:PropTypes.number,

  /**
   * Whether to apply an animation class (C.anim)
   */
  animated:PropTypes.bool,
}

SVG.defaultProps = {
  preserveAspectRatio:'xMinYMin meet',
  viewBox            :'-4 -4 516 516',
  /* height:'2.2em',
     as:'p', */
}

export default SVG

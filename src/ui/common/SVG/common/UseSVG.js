/* @fwrlines/generator-react-component 1.0.1 */
import * as React from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */


const UseSVG = ({
  id,
  className,
  style,

  sprite,
  target,
  source,

  strokeWidth
}) => {
  return (
    <use
      className={
        [
          className,
        ].filter(e => e).join(' ')
      }
      href={source ? source : (sprite) + (target ? '#' + target : '')}
      style={ strokeWidth ?
        {
          ...style,
          '--sw':Number(strokeWidth)
        } : { style }}
      id={ id }
    />
  )}

UseSVG.propTypes = {
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
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * The url to the svg sprite
   */
  sprite:PropTypes.string,

  /**
   * The target image id in the sprite
   */
  target:PropTypes.string,

  /**
   * The source image in case this is not a sprite
   */
  source:PropTypes.string,

  /**
   * The SVG property stroke-width
   */
  strokeWidth:PropTypes.number,
}

UseSVG.defaultProps = {
  sprite: '/s2.svg'
}

export default UseSVG

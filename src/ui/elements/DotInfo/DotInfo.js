/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import PropTypes from 'prop-types'

import { Subtitle } from 'ui/common'

import { gql } from 'graphql-tag'

import C from 'ui/cssClasses'

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./dot_info.scss')
}

const baseClassName = 'dot_info'

/**
 * Circle has color `y` and text has color `x`
 *
 *
 */
const DotInfo = ({
  id,
  className,
  style,

  children,
  //link,

  circleClassName,
  subtitleClassName,
  subtitleUpper,

  boolean,
  trueClassName,
  falseClassName
}) => {


  return (
    <div
      className={
        [
          baseClassName,
          (typeof boolean === 'boolean') && (boolean ? trueClassName : falseClassName), 
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <div className={
        [
          'yib wb',
          C.circle,
          circleClassName
        ].filter(e => e).join(' ')
      }
      >
      </div>
      { children && 
      <div className={ C.content + ' yib wb ph05' }>
        <Subtitle
          upper={ subtitleUpper }
          className={ subtitleClassName }
        >
          { children }
        </Subtitle>
      </div>}
    </div>
  )}

DotInfo.propTypes = {
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
   * A link, on Click (internal or external)
   */
  //link: PropTypes.string,

  /**
   * The class name of the subtitle
   */
  subtitleClassName:PropTypes.string,

  /**
   * The class name of the circle
   */
  circleClassName:PropTypes.string,

  /**
   * The class name of the circle in case `boolean` is provided and is `true`
   */
  trueClassName:PropTypes.string,

  /**
   * The class name of the circle in case `boolean` is provided and is `false`
   */
  falseClassName:PropTypes.string,

  /**
   * A boolean to set the circle color to 
   */
  boolean:PropTypes.bool,
}

DotInfo.defaultProps = {
  subtitleUpper:true,
  trueClassName:'y-success',
  falseClassName:'y-error'
}

export default DotInfo

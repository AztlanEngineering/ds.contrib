/* @fwrlines/generator-react-component 1.1.1 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config*/
import C from 'ui/cssClasses'

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./label.scss')
}

const baseClassName = 'label'

const Label = ({
  id,
  className,
  style,
  children,

  icon,
  basic,
  simple,
  circle,
  dash,

  as:Wrapper,
  
  ...otherProps
}) => {


  return (
    <Wrapper
      className={
        [
          baseClassName,
          className,
          C.transition,
          basic && C.basic,
          simple && C.simple,
          circle && C.circle,
          dash && C.dash,
          /*   icon && (C.fontIcon + ' ' + C.iconInside) */
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      { ...otherProps }
    >
      { children }
    </Wrapper>
  )}

Label.propTypes = {
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
  children:PropTypes.node.isRequired,

  /**
   * With html tag to use
   */
  as:PropTypes.string,

  /**
   * Circular
   */
  circle:PropTypes.bool,

  /**
   * Whether to apply the dash style
   */
  dash:PropTypes.bool,

  /**
   * Icon only
   */
  icon:PropTypes.bool,

  /**
   * Simple style, in the spirit of semantic-ui
   */
  simple:PropTypes.bool,

  /**
   * Basic style, in the spirit of semantic-ui
   */
  basic:PropTypes.bool,
}

Label.defaultProps = {
  as    :'span',
  basic :false,
  simple:false,
  dash:false
}

export default Label

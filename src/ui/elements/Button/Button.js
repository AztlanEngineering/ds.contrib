/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import PropTypes from 'prop-types'

import C from 'ui/cssClasses'
import { InlineLoader } from 'ui/common'

//Relative imports x
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import( './button.scss')
}
import { Group } from './common'

const baseClassName = 'button'

const Button = React.forwardRef(({
  id,
  className,
  style,
  children,

  basic,
  simple,
  in3d,

  icon,
  iconSide,

  disabled,
  loading,
  loaderType,

  as:Element,
  dangerouslySetInnerHTML,

  ...additionalProps
}, ref) => {

  return (
    <Element
      id={ id }
      style={ style }
      className={
        [
          baseClassName,
          C.transition,
          disabled && C.disabled,
          icon && C.iconInside + ((iconSide && !loading) ? iconSide : 'c'),
          simple && C.simple,
          (simple && !disabled) && C.simpleHover,
          //circle && C.circle,
          basic && C.basic,
          (basic && !disabled) && C.basicHover,
          in3d && C.in3d,
          (in3d && !disabled) && C.in3dHover,
          loading && C.loading,
          className
        ].filter(e => e).join(' ')
      }
      ref={ ref }
      disabled={ disabled }
      { ...additionalProps }
    >
      { loading ?
        <>
          <InlineLoader
            height='100%'
            type={ loaderType }
            style={{ '--x': 'var(--on-x)' }}
          />
        </>
	  :
        <>
          { dangerouslySetInnerHTML ?
            <span
              dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
            >
            </span> : children }
          { icon && <i className={'fi'}>{ icon }</i>}
        </>
      }
    </Element>
  )}
)

Button.propTypes = {
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
   * The icon to add, as a fontastic char
   */
  icon:PropTypes.string,

  /**
   * Which side to display the icon on
   */
  iconSide:PropTypes.oneOf(['c', 'l', 'r']),

  /**
   * Whether to use a "simple" style
   */
  simple:PropTypes.bool,

  /**
   * Whether to apply the "basic" style
   */
  basic:PropTypes.bool,

  /**
   * Whether to apply the 3D style
   */
  in3d:PropTypes.bool,

  /**
   * Whether the element is disabled
   */
  disabled:PropTypes.bool,

  /**
   * Whether the element is loading
   */
  loading:PropTypes.bool,

  /**
   *
   */
  loaderType:PropTypes.oneOf(['bars', 'circle'])
}

Button.defaultProps = {
  as        :'button',
  loaderType:'bars',
  simple    :false,
  basic     :false,
  disabled  :false,
  loading   :false
}

Button.Group = Group

export default Button

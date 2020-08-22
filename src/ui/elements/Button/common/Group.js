/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import PropTypes from 'prop-types'



import C from 'ui/cssClasses'

//Relative imports

const baseClassName = C.group + ' buttons'

const Group = ({
  id,
  className,
  style,
  children,

  vertical,
  independent,
  stretch
}) => {


  return (
    <div
      className={
        [
          baseClassName,
          stretch == 'horizontal' && C.horizontalStretch,
          stretch == 'vertical' && C.verticalStretch,
          vertical && C.vertical,
          independent && C.independent,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { children }
    </div>
  )}

Group.propTypes = {
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
   * If this is a vertical group
   */
  vertical:PropTypes.bool,

  /**
   * How the group should stretch
   */
  stretch:PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * Whether the element is loading
   */
  independent:PropTypes.bool,
}

Group.defaultProps = {
  vertical   :false,
  independent:false,
}

export default Group

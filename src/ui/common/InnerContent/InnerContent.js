/* @fwrlines/generator-react-component 1.0.1 */
import * as React from 'react'
import PropTypes from 'prop-types'

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./inner_content.scss')
}

const baseClassName = 'inner_content'

const InnerContent = ({
  id,
  className,
  style,
  children,

  dangerouslySetInnerHTML,
}) => {


  return (
    <div
      className={
        [
          baseClassName,
          //'u2 pu',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
    >
      { children }
    </div>
  )
}

InnerContent.propTypes = {
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
  children               :PropTypes.node,
  dangerouslySetInnerHTML:PropTypes.string,

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['primary', 'stroke', 'flat'])
  */
}

/*
InnerContent.defaultProps = {
  status: 'neutral',
}
*/

export default InnerContent

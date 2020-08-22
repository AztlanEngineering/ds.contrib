/* @fwrlines/generator-react-component 1.1.2 */
import React from 'react'
import PropTypes from 'prop-types'



import C from 'ui/cssClasses'


const baseClassName = C.section

const Section = ({
  id,
  className,
  style,
  children,

  image,
  hidden,

  as:Wrapper,
  hiddenAs:HiddenWrapper,
  ...otherProps
}) => {

  const ComputedWrapper = hidden ? HiddenWrapper : Wrapper

  return (
    <ComputedWrapper
      className={
        [
          baseClassName,
          image && C.image,
          hidden ? 'h' : 'visible',
          className
        ].filter(e => e).join(' ')
      }
      id={id}
      style={style}
      { ...otherProps }
    >
      { children }
    </ComputedWrapper>
  )}

Section.propTypes = {
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
   * Whether the element has a full size image inside
   */
  image:PropTypes.bool,

  /* The node to display the element with */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
  * The node to display the element with 
  * */
  hiddenAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
}

Section.defaultProps = {
  /* status: 'neutral',
     height:'2.2em', */
  as:'section',
  hiddenAs:'div'
}

export default Section

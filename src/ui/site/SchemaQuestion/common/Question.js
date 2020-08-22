/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

//Relative imports

const baseClassName = 'question'

const Question = ({
  id,
  className,
  style,
  children,

  dangerouslySetInnerHTML,

  as:Wrapper,
}) => {


  return (
    <Wrapper
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      itemProp='name'
      dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
    >
      { children }
    </Wrapper>
  )}

Question.propTypes = {
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
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
}

Question.defaultProps = {
  as:'p',
}

export default Question

/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './schema_question.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./schema_question.scss')
}
import { Question, Answer } from './common'

const baseClassName = 'schema_question'

/**
 * TODO padding and block separation
 */
const SchemaQuestion = ({
  id,
  className,
  style,
  children
}) => {


  return (
    <div
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      itemScope
      itemProp='mainEntity'
      itemType='https://schema.org/Question'
    >
      {children}
    </div>
  )}

SchemaQuestion.propTypes = {
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

}

/*
SchemaQuestion.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

SchemaQuestion.Question = Question
SchemaQuestion.Answer = Answer

export default SchemaQuestion

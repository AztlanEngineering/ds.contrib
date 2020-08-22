/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import PropTypes from 'prop-types'



//import C from 'ui/cssClasses'
import { Subtitle } from 'ui/common'

/* Relative imports*/
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import ('./quote.scss')
}

const baseClassName = 'quote'

const Quote = ({
  id,
  className,
  style,
  children,

  author,
  cite
}) => {

  return (
    <figure
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <blockquote cite={ cite }>
        { children }
      </blockquote>
      { author &&
        <Subtitle
          as='figcaption'
          className='ur'
        >
          { author }
        </Subtitle>
      }
    </figure>
  )}

Quote.propTypes = {
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
   * The author of the quote
   */
  author:PropTypes.string,

  /**
   * The blockquote cite (an http link)
   */
  cite:PropTypes.string,
}

/*
Quote.defaultProps = {
  status: 'neutral',
}
*/

export default Quote

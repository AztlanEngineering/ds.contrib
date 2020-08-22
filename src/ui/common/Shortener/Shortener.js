/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'




//Intl

import { FormattedMessage} from 'react-intl'
import messages from './messages'

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './shortener.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./shortener.scss')
}

const baseClassName = 'shortener'


/**
 * Use `Shortener` to
 * Has color `x`
 */
const Shortener = ({
  id,
  className,
  style,
  children:text,

  as:Element,

  limit,
  separator,
  min,
}) => {

  const [displayFull, setDisplayFull] = useState(false)

  return (
    <Element
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { text && (!displayFull && (text.split(separator).length > limit)) ?
        <>
          { text.split(separator).slice(0, limit).join(separator) }{ '... ' }
          <a
            href='#'
            onClick={ (e) => {
              e.preventDefault()
              e.stopPropagation()
              setDisplayFull(true) }
            }
          >
            { min ?
              <FormattedMessage {...messages.show} /> :
            <FormattedMessage {...messages.readMore} />
            }
          </a>
        </>:
        text
      }
    </Element>
  )}

Shortener.propTypes = {
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
   * The text to display or shorten
   */
  children:PropTypes.string.isRequired,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * How many separated element to accept before the read more
   */
  limit:PropTypes.number,

  /**
   * Which separator to use
   */
  separator:PropTypes.string.isRequired,


  /**
   * Whether the shortener style is minimal. ATM is only gives a shorter message
   */
  min:PropTypes.bool,

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

Shortener.defaultProps = {
  as   :'span',
  separator:' ',
  limit:20,
  min:false,

  /* height:'2.2em',
     as:'p', */
}

export default Shortener

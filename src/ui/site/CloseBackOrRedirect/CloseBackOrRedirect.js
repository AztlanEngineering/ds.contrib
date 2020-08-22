/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'


import { useHistory, Link } from 'react-router-dom'


//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './close_back_or_redirect.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./close_back_or_redirect.scss')
}

const baseClassName = 'close_back_or_redirect'


/**
 * Use `CloseBackOrRedirect` to
 * Has color `x`
 */
const CloseBackOrRedirect = ({
  id,
  className,
  style,

  icon,
  redirectTo
}) => {

  const history = useHistory()

  const onClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('click', history)
    if (history.length) {
      console.log('back')
      history.goBack()
    } else {
      history.push(redirectTo)
    }
  }

  return (
    <a
      href={ redirectTo }
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'pointer',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      onClick={onClick}
    >
      <span className='fi-icon fi s0 k-s pointer'>
        { icon }
      </span>
    </a>
  )}

CloseBackOrRedirect.propTypes = {
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
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,
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

CloseBackOrRedirect.defaultProps = {
  'redirectTo':'/',
  'icon'      :'p',
  /* height:'2.2em',
     as:'p', */
}

export default CloseBackOrRedirect

/* @fwrlines/generator-react-component 2.1.3 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import { SiteContext } from 'ui/common'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './support_email_link.scss'
   import('./support_email_link.scss') */

//const baseClassName = 'support_email_link'


/**
 * Use `SupportEmailLink` to
 * Has color `x`
 */
const SupportEmailLink = ({
  id,
  className,
  style,

  as:Wrapper,

  label,
  ...otherProps
}) => {

  const { SUPPORT_EMAIL } = useContext(SiteContext)

  return (
    <Wrapper
      className={
        [
        //styles[baseClassName],
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      { ...otherProps }
    >
      <a href={ 'mailto:' + SUPPORT_EMAIL }>{ label }</a>
    </Wrapper>
  )}

SupportEmailLink.propTypes = {
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

SupportEmailLink.defaultProps = {
  label:'email support',
  as   :'span'
  /* height:'2.2em',
     as:'p', */
}

export default SupportEmailLink

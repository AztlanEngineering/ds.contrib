/* @fwrlines/generator-react-component 2.4.0 */
import * as React from 'react'
import { useContext, memo } from 'react'
import PropTypes from 'prop-types'

import { generatePath, Link as BaseLink } from 'react-router-dom'

import { useBlog } from '../Context'


//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './link.scss' */
import { isBackend } from 'ui/isBackend'


const baseClassName='blog_link'

/**
 * Use `Link` to
 * Has color `x`
 */
const Link = ({
  id,
  className,
  style,
  children,

  to,
  params,
  ...otherProps
}) => {

  const {
    generateLocalPath
  } = useBlog()

  const path = generateLocalPath(
    to,
    params
  )

  return (
    <BaseLink
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      to={ path }
      { ...otherProps }
    >
      { children }
    </BaseLink>
  )}

Link.propTypes = {
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
   * Where to. This must be a url name passed to BlogContext routes
   */
  to:PropTypes.string,

  /**
   * Params to generate the url
   */
  params:PropTypes.string,
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

Link.defaultProps = {
  params:{},
  to    :'HOME'
  /* height:'2.2em',
     as:'p', */
}

export default Link

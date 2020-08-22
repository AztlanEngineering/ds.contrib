/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'

import Context from './Context'

import { generatePath } from 'react-router-dom'

import { useSite } from '@fwrlines/ds/common'
//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './blog_context.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  //import('./blog_context.scss')
}

//const baseClassName = 'blog_context'

/**
 * Use `BlogContext` to
 * Has color `x`
 */
const BlogContext = ({
  id,
  className,
  style,
  children,
  routes,
  value
}) => {

  const {
    SITE_CANONICAL
  } = useSite()

  const generateLocalPath = (to, params, canonical=false) => {
    const path = generatePath(
      routes[to],
      params
    )
    return canonical ? [SITE_CANONICAL, path].join('') : path

  }

  return (
    <Context.Provider value={{
      ...routes,
      ...value,
      generateLocalPath
    }}
    >
      {/*
    <div
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
    </div>*/}
      { children }
    </Context.Provider>
  )}

BlogContext.propTypes = {
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
   * The width of the element
   */
  routes:PropTypes.shape({
    BASE              :PropTypes.string.isRequired,
    HOME              :PropTypes.string.isRequired,
    HOME_PAGINATED    :PropTypes.string.isRequired,
    CATEGORY          :PropTypes.string,
    CATEGORY_PAGINATED:PropTypes.string,
    SINGLE            :PropTypes.string.isRequired,
  }),

  /**
   * Extra values to pass to the context
   */
  values:PropTypes.object,
  /*
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

BlogContext.defaultProps = {
  values:{}
  /* height:'2.2em',
     as:'p', */
}

export default BlogContext

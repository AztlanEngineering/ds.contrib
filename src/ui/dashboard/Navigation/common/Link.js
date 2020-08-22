/* @fwrlines/generator-react-component 2.1.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Heading } from '@fwrlines/ds/elements'

import { useRouteMatch, Link as RouterLink } from 'react-router-dom'

//Config
import C from 'ui/cssClasses'



/* Relative imports
   import styles from './item.scss'*/

import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./link.scss')
}

const baseClassName = 'navlink'


/**
 * Use `Link` to. Props are passed to the heading component
 * Has color `x`
 */
const Link = ({
  id,
  className,
  style,
  children,

  as:Wrapper,
  to,
  ...otherProps
}) => {

  const match = useRouteMatch(to)

  return (
    <Wrapper
      className={
        [
          /* styles[baseClassName],*/
          baseClassName,
          //C.pointer,
          match && match.isExact && C.active,
          'yib',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      { ...otherProps }
    >
      <RouterLink to={ to }>
        { children }
      </RouterLink>
    </Wrapper>
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
   * Where the link goes to, this is passed to react-router-dom Link
   */
  to:PropTypes.string,

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
}

Link.defaultProps = {
  /* status: 'neutral',
     height:'2.2em', */
  as:'span',
}

export default Link

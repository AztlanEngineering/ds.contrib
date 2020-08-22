/* @fwrlines/generator-react-component 2.1.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { useLocation } from 'react-router-dom'

import {
  Slide,
  Item,
  HorizontalNavBar as HorizontalBar
} from './common'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './navigation.scss' */

import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./navigation.scss')
}

const baseClassName = 'navigation'

/**
 * Use `Navigation` to
 * Has color `x`
 */
const Navigation = ({
  id,
  className,
  style,
  as:Wrapper,

  tree,

  compact,
  iconHover,
  iconSelected,

  footer,
}) => {

  const {
    title:rootTitle,
    subItems:rootSubItems,
    pathname:rootPathname,
    footer:rootFooter,
    logo:rootLogo,
  } = tree

  const currentLocation = useLocation()

  return (
    <Wrapper
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
      <Item
        logo={ rootLogo }
        slideClassName='y-background b-y'
        title={ rootTitle }
        subItems={ rootSubItems }
        pathname={ rootPathname }
        compact={ compact }
        iconHover={ iconHover }
        iconSelected={ iconSelected }
        parentLocation={ rootPathname }
        currentLocation={ currentLocation }
        footer={ rootFooter || footer }
      />

    </Wrapper>
  )}

Navigation.propTypes = {
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
   * The navigation tree
   */
  tree:PropTypes.shape({
    section :PropTypes.string,
    title   :PropTypes.string.isRequired,
    pathname:PropTypes.string.isRequired,
    //baseMatch:PropTypes.string.isRequired,
    children:PropTypes.array

  }),

  /**
   * Whether the list should appear in a compact way
   */
  compact:PropTypes.bool,

  /**
   * The icon to display on mouse hover
   */
  iconHover:PropTypes.string,

  /**
   * The icon for selected menu item
   */
  iconSelected:PropTypes.string,

  /**
   * The default footer of the navigation element
   */
  footer:PropTypes.node,

}

Navigation.defaultProps = {
  as          :'nav',
  compact     :false,
  iconHover   :'L',
  iconSelected:'    ',
  /* height:'2.2em',
     as:'p', */
}

Navigation.Item = Item
Navigation.Slide = Slide
Navigation.HorizontalBar = HorizontalBar

export default Navigation

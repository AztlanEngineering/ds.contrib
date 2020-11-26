/* @fwrlines/generator-react-component 2.1.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { DashboardContext } from '../../common'
//import { Subtitle, IconList } from 'ds-core'
import Slide from './Slide.js' //Circular recursion by design
import NavLink from './Link.js'


import { injectIntl } from 'react-intl'

/* const ri = require('react-intl')
   console.log(89989, ri) */
/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './item.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./item.scss')
}

const baseClassName = 'item'

/**
 * Use `Item` to
 * Has color `x`
 */
class Item extends React.PureComponent {

  //static contextType = IntlContext

  /*
  static contextTypes = {
    intl:IntlContext,
  }*/

  static defaultProps = {
    treeDepth:-1,
  }

  constructor(props) {
    super(props)
  }

  get isLast() {
    return (
      this.props.subItems || this.props.content
    ) ? false : true
  }

  get isNormalSlide() {
    return this.props.subItems ? true : false
  }

  get isCustomSlide() {
    return this.props.content ? true : false
  }

  get isActive() {
    return this.props.currentLocation.pathname == this.props.pathname //TODO change this by a match
  }

  get titleAsString() {
    const content = this.props.title
    return typeof content === 'string' ? content : this.props.intl.formatMessage(content)
  }

  componentDidUpdate(p) {
    //console.log('was active', this.wasActive(p))
    /*
    if (this.isActive && (p.currentLocation.pathname != this.props.currentLocation.pathname)) {
      //this.context.setFocus(this.isLast ? 'main':'sidebar')
    }*/
  }

  render () {

    const {
      /*
      id,
      className,
      style,
      as:Wrapper,
      */
      //tree,

      slideClassName,
      slideStyle,

      iconHover,
      iconSelected,

      treeDepth,
      //currentLocation,

      //title,
      parentName,
      pathname,
      rootNode,
      //subItems,
    } = this.props

    //const { setFocus } = this.context

    const ListItem = 'li'

    /*
    const onClick = (e) => {
      e.persist()
      setFocus(
        this.isLast ? 'main': 'sidebar'
      )
    }*/

    if (rootNode) return (
      <Slide
        { ...this.props }
        className={ slideClassName }
        style={ slideStyle }
        treeDepth={ treeDepth + 1 }
      />
    )

    else if (this.isCustomSlide) return (
      <ListItem >
        { this.titleAsString }
        {' '}
        ( Custom Slide )
      </ListItem>
    )

    else if (this.isNormalSlide) return (
      <ListItem >
        <NavLink
          //onClick={ onClick }
          state={{
            displayMainContent        :false,
            previousTitle             :parentName,
            previousDisplayMainContent:false
          }}
          to={ pathname }
        >
          { this.titleAsString }
        </NavLink>
        <Slide
          { ...this.props }
          className={ slideClassName }
          style={ slideStyle }
          treeDepth={ treeDepth + 1 }
        />
      </ListItem>
    )

    else return ( // is this.isLast
      <ListItem >
        <NavLink
          //onClick={ onClick }
          state={{
            displayMainContent        :true,
            previousTitle             :parentName,
            previousDisplayMainContent:false
          }}
          to={ pathname }
        >
          { this.titleAsString }
        </NavLink>
      </ListItem>

    )

  }
}

Item.propTypes = {
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
   *  The title of the navigation element. This will be displayed both as the default value in the list, and, if the element is the parent of another slide, as the title of that children slide.
   */
  title:PropTypes.string.isReauired,

  /**
   * The footer of the slide
   */
  header:PropTypes.node,

  /**
   * The footer of the slide
   */
  footer:PropTypes.node,

  /**
   * The location to push to when the user clicks the element.
   */
  pathname:PropTypes.string.isRequired,

  /**
   * The child elements. If this is set, the element when appear as a slide when clicked.
   */
  subItems:PropTypes.arrayOf(PropTypes.object),

  /**
   * Whether when clicking this element, we should display special content in the slide instead of the regular one. Just provide a react node that will supersede any other conf.
   */
  content:PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

}

export default injectIntl(Item)

/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

import { BodyLocker } from 'ui/site/NavBar/common' //:oveto co;;on
import { AnimatedVCaret } from 'ui/common'
import { useScrollspy } from '@fwrlines/utils'

import C from 'ui/cssClasses'

import { LocalIndex } from 'ui/elements'
//import { Link as ScrollLink } from 'react-scroll'

/* Relative imports
   import styles from './content_tree.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./content_tree.scss')
}
import {
  Context,
  //Provider,
  DisplayTree
} from './common'


const defaultDurationFromDistance = (distance) => Math.abs(distance) / 4

const baseClassName = 'content_tree'

const ContentTree = ({
  id,
  className,
  style,
  children,

  title,

  elementClassName,
  activeClassName,
  pastClassName,

  unfoldActive,
  onElementClick:userOnElementClick,

  offsetPx,

  withScrollLink,
  scrollLinkOffset,
  scrollLinkSmooth,
  scrollLinkDuration,

  as:Element,
  itemAs,

  sticky,
  min
}) => {

  const [isOpen, setIsOpen] = useState(false)

  const {
    contentTree,
    idList,
  } = useContext(Context)

  const {
    activeId,
    pastIds
  } = useScrollspy(
    {
      idList,
      offsetPx
    }
  )

  const onElementClick = min ? () => setIsOpen(false) : userOnElementClick

  const clickToOpen = (e) => {
    e.stopPropagation()
    setIsOpen(true)
  }

  

  const params = {
    tree:contentTree,
    activeId,
    pastIds,
    onElementClick:onElementClick || min && clickToOpen,
    withScrollLink,
    scrollLinkOffset,
    scrollLinkSmooth,
    scrollLinkDuration,
    elementClassName,
    activeClassName,
    pastClassName,
    unfoldActive,
    as  :itemAs,
    isOpen:min ? isOpen : true,
  }

  return(
    <Element
      title={ title }
      className={
        [
          baseClassName,
          sticky && 'sticky',
          min && 'min s-1',
          min && !isOpen && 'pointer',
          isOpen && 'active',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      onClick= { (min && !isOpen) && clickToOpen }
    >
      { children }
      <DisplayTree { ...params } />
      { min &&
        <>
          <AnimatedVCaret
            className='z-paragraph'
            width='1.4em'
            duration='0.3'
            id={ id + '_arrow' }
            active={ isOpen }
            setActive={ setIsOpen }
          />
          { isOpen && <BodyLocker /> }
        </>
      }
    </Element>

  )}

ContentTree.propTypes = {
  /**
   * Provide an HTML id to this element. This is required if min is true.
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
   * The title to display for the local index
   */
  title:PropTypes.string,

  /**
   * HTML class of an item
   */
  elementClassName:PropTypes.string,

  /**
   * HTML class toggled for active items
   */
  activeClassName:PropTypes.string,

  /**
   * HTML class applied to "past" items
   */
  pastClassName:PropTypes.string,

  /**
   * Whether to unfold the current subsection
   */
  unfoldActive:PropTypes.bool,

  /**
   * The offset in px to pass to the listener
   */
  offsetPx:PropTypes.number,

  /**
   * Callback on element click
   */
  onElementClick:PropTypes.func,

  /**
   * Whether we use ScrollLink for links (from react-scroller)
   */
  withScrollLink:PropTypes.bool,

  /**
   * Offset to pass to the ScrollLink
   */
  scrollLinkOffset:PropTypes.number,

  /**
   * Whether the ScrollLink is smooth
   */
  scrollLinkSmooth:PropTypes.bool,

  /**
   * Duration to pass to the ScrollLink. If a function, should be (currentOffset) => milliseconds
   */
  scrollLinkDuration:PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func
  ]),

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),

  /**
   * Which html tag to use for the children
   */
  itemAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),

  /**
   * If its sticky
   */
  sticky:PropTypes.bool,

  /**
   * Accordion style
   */
  min:PropTypes.bool,
}

ContentTree.defaultProps = {
  offsetPx          :-100,
  scrollLinkOffset  :0,
  scrollLinkSmooth  :true,
  scrollLinkDuration:defaultDurationFromDistance,
  activeClassName   :'x-blue c-x',
  as                :LocalIndex,
  itemAs            :LocalIndex.Item,
  sticky            :false,
  min               :false,
}

export default ContentTree

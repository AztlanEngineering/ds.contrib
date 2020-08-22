/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import PropTypes from 'prop-types'
import { Link as ScrollLink } from 'react-scroll'

import C from 'ui/cssClasses'


const DisplayTree = ({
  tree,

  ...props
}
) =>{
  const {
    style,

    isOpen,

    activeId,
    pastIds,
    onElementClick,



    withScrollLink,
    scrollLinkOffset,
    scrollLinkSmooth,
    scrollLinkDuration,

    elementClassName,
    activeClassName,
    pastClassName,
    linkClassName,

    unfoldActive,
    as:Element,

  } = props

  const childrenReducer = (a,e) => {
    a.push(e.id)
    return a


  }


  return(
    tree.map((e) =>
      <Element
        key={ e.id }
        title={
          isOpen ? withScrollLink ?
            <ScrollLink
              to={ e.id }
              offset={scrollLinkOffset}
              spy={ false }
              smooth={scrollLinkSmooth}
              duration={scrollLinkDuration}
              onClick={ onElementClick }
              isDynamic={ false }
              style={ style }
              className={ linkClassName }
            >
              { e.innerText }
            </ScrollLink>
            :
            <a
              href={'#' + e.id}
              onClick={ onElementClick }
              className={ linkClassName }
            >
              { e.innerText }
            </a> :
            <span
              onClick={ onElementClick }
              className={ linkClassName }
            >
              { e.innerText }
            </span>
        }

        className={
          [
            elementClassName,
            (activeId == e.id) && activeClassName,
            (activeId == e.id) && C.active,
            (pastClassName && pastIds.includes(e.id)) && pastClassName,
          ].filter(e => e).join(' ')
        }
      >
        { e.children
          && (!unfoldActive ||
                (unfoldActive &&
                  ((activeId == e.id) || e.children.reduce(
                    childrenReducer,
                    []).includes(activeId))
                )
          )
            && <DisplayTree
              tree={ e.children }
              { ...props }
               />
        }
      </Element>
    )
  )
}

DisplayTree.propTypes = {
  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,

  /**
   * the content tree starting from this element
   */
  tree:PropTypes.object.isRequired,

  /**
   * The current active part of the content
   */
  activeId:PropTypes.string.isRequired,

  /**
   * The width of the element
   */
  pastIds:PropTypes.arrayOf(PropTypes.string),

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
   * HTML class of an item
   */
  elementClassName:PropTypes.string,

  /**
   * HTML class applied to the links
   */
  linkClassName:PropTypes.string,

  /**
   * HTML class toggled for active items
   */
  activeClassName:PropTypes.string,

  /**
   * HTML class applied to "past" items
   */
  pastClassName:PropTypes.string,


  /**
   * Whether the menu is open. If not, the link will not be clickable
   */
  isOpen:PropTypes.bool,

  /**
   * Whether to unfold the current subsection
   */
  unfoldActive:PropTypes.bool,
}

DisplayTree.defaultProps = {
  unfoldActive:false,
  isOpen      :true,
  tree:[]
}

export default DisplayTree

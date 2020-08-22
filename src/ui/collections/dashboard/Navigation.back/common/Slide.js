/* @fwrlines/generator-react-component 2.1.0 */
import * as React from 'react'
import { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import { DashboardContext } from '../../common'

import { Subtitle, IconList } from '@fwrlines/ds/common'
import { Heading, Button } from '@fwrlines/ds/elements'
import { HorizontalBar } from '@fwrlines/ds/site'

import NavItem from './Item'
import HorizontalNavBar from './HorizontalNavBar'

// Config
import C from 'ui/cssClasses'

import { useHistory } from 'react-router-dom'

/* Relative imports
   import styles from './slide.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./slide.scss')
}

const baseClassName = 'slide'

/**
 * Use `Slide` to
 * Has color `x`
 */
const Slide = ({
  id,
  className,
  style,
  children,

  treeDepth,

  title,
  match,
  content,
  location,

  parentName,
  parentLocation,

  isPreviousSlide,
  isNextSlide,

  compact,
  iconHover,
  iconSelected,
}) => {

  const { navigate } = useContext(DashboardContext)

  const history = useHistory()

  useEffect(() => {
    match &&
      (match.path != location) &&
      history.push(location)
  },
  [match, location, history]
  )

  return (
    <div
      className={
        [
          //styles[baseClassName],
          baseClassName,
          match && C.active,
          isPreviousSlide && C.previous,
          isNextSlide && C.next,
          'u2 s0 l-s',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      {
        parentLocation &&
          <HorizontalNavBar
            backLabel={treeDepth == 1 ?

              'Home' :
              parentName
            }
            backOnClick={() => navigate(parentLocation, 'sidebar')}
          />
      }
      <Heading
        className='h3 v1 mv-v mh-u pl-v'
        heading={ title }
      />
      <IconList
        className={
          [
            compact && C.compact,
            'u2 ph-u v1 pv-v',
          ].filter(e => e).join(' ')
        }
      >
        { content && content.map((e, i, a) =>
          <>
            {(
              ((i == 0) && e.section ) ||
            (e.section && (e.section != a[i-1].section ) )
            ) &&
              <IconList.Item >
                <Subtitle
                  className='s-1 k-s u1 mt-u v2 ml-v w50 mb-w'
                  upper
                >
                  { e.section }
                </Subtitle>
              </IconList.Item >
            }
            <IconList.Item
              icon={ e.match ? iconSelected : undefined } //TODO provide better default
              iconHover={ iconHover }
            >
              <NavItem
                onClick={ () => navigate(
                  e.location,
                  e.children ? 'sidebar ': 'main'
                ) }
              >
                { console.log(e.children, e.location) }
                { e.title }
              </NavItem>

              { e.children &&
                <Slide
                  className={ className }
                  style={ style }
                  title={ e.title }
                  match={ e.match }
                  location={ e.location }
                  content={ e.children }
                  parentName={ title }
                  parentLocation={ location }
                  treeDepth={ treeDepth + 1 }
                  isNextSlide={
                    (match && true) ||
                    isNextSlide
                  }
                  isPreviousSlide={
                    (isPreviousSlide && !e.match)
                  }
                />
              }
            </IconList.Item>
          </>
        ) }
        { children }
      </IconList>
    </div>
  )}

Slide.propTypes = {
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
   * treeDepth
   */
  treeDepth:PropTypes.number,

  /**
   * The title of the navigation slide
   */
  title:PropTypes.string,

  /**
   * On which location should the slide be displayed
   */
  match:PropTypes.object,

  /**
   * On which location should the slide be displayed
   */
  content:PropTypes.object,

  /**
   * On which location should the slide be displayed
   */
  location:PropTypes.string,

  /**
   * The name of the parent to display in the return button
   */
  parentName:PropTypes.string,

  /**
   * The location of the parent slide, for the return button
   */
  parentLocation:PropTypes.string,

  /**
   * Is this slide is after the active slide
   */
  isNextSlide:PropTypes.bool,

  /**
   * Whether this slide is before the active slide
   */
  isPreviousSlide:PropTypes.bool,

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

Slide.defaultProps = {
  isNextSlide    :false,
  isPreviousSlide:false,
  iconHover      :'L',
  iconSelected   :'    ',
}

export default Slide

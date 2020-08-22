/* @fwrlines/generator-react-component 2.1.1 */
import * as React from 'react'
import { useEffect, useMemo, useContext } from 'react'
import PropTypes from 'prop-types'

import { Subtitle, IconList, Image } from '@fwrlines/ds/common'
import { Heading, Button } from '@fwrlines/ds/elements'
import { HorizontalBar } from '@fwrlines/ds/site'

import { DashboardContext } from '../../common'

import NavItem from './Item' //Circular reference by design
import HorizontalNavBar from './HorizontalNavBar'

import { useRouteMatch, useLocation, useHistory} from 'react-router-dom'

/* Config */
import C from 'ui/cssClasses'

/* Relative imports
   import styles from './slide.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./slide.scss')
}

const baseClassName = 'slide'

const TEXT = {
  //BACK_LABEL     :'Back',
  BACK_HOME_LABEL:'Home',
}


/**
 * Use `Slide` to
 * Has color `x`
 */
const Slide = ({
  id,
  className,
  style,

  logo,
  title,
  subItems,
  pathname,
  redirectFromPathname,

  treeDepth,
  currentLocation,

  parentName,
  parentLocation,

  compact,
  iconHover,
  iconSelected,

  footer,
}) => {

  //const { navigate, setFocus } = useContext(DashboardContext)

  //const history = useHistory()


  /*
  const shouldRedirectMatch = useRouteMatch(redirectFromPathname)

  useEffect(() =>
  {
    if (shouldRedirectMatch) history.push(pathname)
  }
  ,[shouldRedirectMatch, history])
    */


  const displayUrls = useMemo(() => {
    const list = subItems ?
      subItems.filter(e => !e.subItems).reduce((a,e) => {
        a.push(e.pathname)
        return a
      },
      []
      ) : []
    //console.log('in memo', pathname, list)
    list.push(pathname)
    return list

  },
  [subItems, pathname, redirectFromPathname]
  )

  const match = useRouteMatch(displayUrls)

  const isActive = (match && match.isExact) ?
    displayUrls.includes(match.path) : false

  const isPrev = (match && !match.isExact)

  const isNext = (!isActive && !isPrev)

  //console.log('display this slide when the location matches one of those ', displayUrls, match, currentLocation.pathname)

  //console.log(title, ' is active ? ', isActive)

  return (
    <div
      className={
        [
        //styles[baseClassName],
          baseClassName,
          isActive && C.active,
          isPrev && C.previous,
          isNext && C.next,
          's0 l-s',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      {
        parentLocation &&
          <HorizontalNavBar
            backMessage={
              treeDepth == 1 ?
                TEXT.BACK_HOME_LABEL :
                parentName
            }
            backTo={parentLocation}
            dummy={ treeDepth == 0 }
          />
      }
      <div className={ C.content + ' u2 ph-u v1 pv-v' }>

        { logo &&
          <Image
            src={ logo }
            alt={ title }
            objectFit='contain'
            style={{ height: '100px' }}
          />
        }
        <Heading
          className='h3 v1 mv-v'
          heading={ title }
        />

        { subItems &&
          <ul
            className={
              [
                compact && C.compact,
                'v1 pv-v',
              ].filter(e => e).join(' ')
            }
          >
            { subItems.map((e, i, a) =>
              <>
                {(
                  ((i == 0) && e.section ) ||
            (e.section && (String(e.section) != String(a[i-1].section) ) )
                ) &&
                  <li
                    key={ `${i}-t` }
                    className={ C.section }
                  >
                    <Subtitle
                      className='s-2 k-s'
                      upper
                    >
                      { e.section }
                    </Subtitle>
                  </li >
                }
                <NavItem
                  key={ i }
                  treeDepth={ treeDepth }
                  iconHover={ iconHover }
                  iconSelected={ iconSelected }
                  parentName={ title }
                  parentLocation={ pathname } //TODO change by match render
                  currentLocation={ currentLocation }
                  slideClassName={ className }
                  slideStyle={ style }
                  { ...e }
                  footer={ e.footer || footer }
                />
              </>
            )}

          </ul>
        }
      </div>
      { footer &&
        <footer className='s-1 k-s uc u2 ph-u v1 pv-v'>
          { footer }
          {' '}
          <span className='x-metadata c-x'>Copyright mycompany 2020 - privacy policy - the best software in town</span>
        </footer>
      }
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
   *  The title of the navigation element. This will be displayed both as the default value in the list, and, if the element is the parent of another slide, as the title of that children slide.
   */
  title:PropTypes.string.isRequired,

  /**
   * The pathname of the current slide.
   */
  pathname:PropTypes.string.isRequired,

  /**
   * The child elements. If this is set, the element when appear as a slide when clicked.
   */
  subItems:PropTypes.arrayOf(PropTypes.object),

  /**
   * treeDepth
   */
  treeDepth:PropTypes.number.isRequired,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * The footer of the slide
   */
  footer:PropTypes.node,

  /**
   * The name of the parent to display in the return button
   */
  parentName:PropTypes.string,

  /**
   * The location of the parent slide, for the return button
   */
  parentLocation:PropTypes.string,
}

Slide.defaultProps = {
  //treeDepth:0,
}

export default Slide

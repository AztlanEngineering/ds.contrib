/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useEffect, useState, useContext, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

import { Item, BodyLocker } from './common'
import { SiteContext } from 'ui/common'
import { PageProgressBar } from 'ui/elements'
import { HamburgerIcon } from 'ui/site'
import { Link, useLocation } from 'react-router-dom'

import { useIsTop } from '@fwrlines/utils'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './nav_bar.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./nav_bar.scss')
}

const baseClassName = 'nav_bar'


const DefaultTitleComponent = ({title, className, link, open,...otherProps}) => {

  const {
    SITE_NAME,
    HOME_URL,
  } = useContext(SiteContext)
  return(
    <div
      className={
        [
        //styles[baseClassName],
          'm0 v-v',
          className
        ].filter(e => e).join(' ')
      }
      {...otherProps}
    >
      <Link to={ HOME_URL }>
        <p className='fh m-v tb s2 k-s'>{ SITE_NAME }</p>
      </Link>
    </div>
  )

}

const DefaultFooterComponent = ({ open }) =>
  <footer className='i-footer'>
    &nbsp;
  </footer>
/**
 * Use `NavBar` to
 * Has color `x`
 */
const NavBar = ({
  id,
  className,
  style,
  children,

  as:Wrapper,
  Leader,
  offsetPx,

  TitleComponent,
  FooterComponent,
  ExtraContentComponent,
  MobileContent,

  openClassName,
  closedClassName,

  headerClassName,
  headerOpenClassName,
  headerClosedClassName,
  headerStyle,

  contentClassName,
  contentOpenClassName,
  contentClosedClassName,
  contentStyle,

  min,

  progressBar,
  progressBarProps,

  ...otherProps

}) => {

  const location = useLocation()

  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!open)

  const isTop = useIsTop({offsetPx})

  useEffect(() => {
    setOpen(false)
  },[location]) //In case the link clicked redirects to the same view

  const DesktopContent=({ className, ...props }) => (<ul
    className={
      [
        'v0 mv-v',
        'i-content',
        className,
        open ? contentOpenClassName : contentClosedClassName,
        contentClassName
      ].filter(e => e).join(' ')
    }
    style={ contentStyle }
  >
    { children }
    <ExtraContentComponent open={open}/>
                                                     </ul>)

  return (
    <Wrapper
      className={
        [
        //styles[baseClassName],
          baseClassName,
          open && 'open',
          open ? openClassName : closedClassName,
          't',
          //'s1 k-s',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      { ...otherProps }
    >
      { open && <BodyLocker /> }
      <header
        className={
          [
            'i-header',
            open ? headerOpenClassName : headerClosedClassName,
            headerClassName
          ].filter(e => e).join(' ')
        }
        style={ headerStyle }
      >

        { !min &&
          <HamburgerIcon
            onClick={ toggleOpen }
            active={open}
            className='md-h lg-h'
          />}
        <TitleComponent
          className='title'
          open={ open }
        />
        {  }
      </header>
      { Leader ?
        <>
          <div className='md-h lg-h'>
            { open &&
              <DesktopContent className='i-content'/>
            }
            {! open &&
              <Leader
                isTop={ isTop }
                open={ open }
              />
            }
            { (!open && MobileContent) &&
              <MobileContent isTop={isTop}/>
            }

          </div>
          <div className='xs-h sm-h'>
            <DesktopContent/>
          </div>
          { !open ? isTop ?
            <FooterComponent open={open}/>
            : <FooterComponent
              open={open}
              className='xs-h sm-h'
              />
            : <FooterComponent open={open}/>
          }
        </>
        :
        <>
          <DesktopContent className='i-content'/>
          <FooterComponent open={open}/>
        </>
      }
      { progressBar &&
        <PageProgressBar
          spyOn={ (typeof progressBar !== 'boolean') && progressBar }
          { ...{
            style:{
              ...(progressBarProps || {}).style,
              zIndex  :'-1',
              '--fill':'var(--link)'

            },
            ...progressBarProps,
            offsetPx:-300
          }}
        />
      }

    </Wrapper>
  )}

NavBar.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  openClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  closedClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  headerClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  headerOpenClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  headerClosedClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  contentClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  contentOpenClassName:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  contentClosedClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  headerStyle:PropTypes.object,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  contentStyle:PropTypes.object,

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

  /**
   * Whether the navbar should display a progressbar. Can be true (tracks all the page), or a specific html id selector
   */
  progressBar:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),

  /**
   * Progress bar props
   */
  progressBarProps:PropTypes.object,

  /**
   *  The children JSX for the title. Takes prop `open` as a boolean
   */
  TitleComponent:PropTypes.node,

  /**
   *  The children JSX for the footer. Takes prop `open` as a boolean
   */
  FooterComponent:PropTypes.node,

  /**
   *  The children JSX for the footer. Takes prop `open` as a boolean
   */
  ExtraContentComponent:PropTypes.node,

  /**
   * A leader to display more advanced logic. Please give it .gc-content
   */
  Leader:PropTypes.node,


  /**
   * At how many pxs from the top trigger the Leader
   */
  offsetPx:PropTypes.number,


  /**
   * A component to be displayed om mobile instead of the normal one
   *
   */
  MobileContent:PropTypes.node,

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
  /**
   * Whether this is a minimal menu (only header and footer)
   */
  min:PropTypes.bool,
}

NavBar.defaultProps = {
  as                   :'nav',
  TitleComponent       :DefaultTitleComponent,
  FooterComponent      :DefaultFooterComponent,
  ExtraContentComponent:() => null,
  offsetPx             :400,
  min                  :false,
  //headerClassName:'',
  /* height:'2.2em',
     as:'p', */
}

NavBar.Item = Item
export default NavBar

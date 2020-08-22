/* @fwrlines/generator-react-component 2.4.0 */
import * as React from 'react'
import { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

import { useIntl } from 'react-intl'

import { SiteContext } from 'ui/common'
import { Heading } from 'ui/elements'

import { Link } from 'react-router-dom'


//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './main.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./main.scss')
}

const baseClassName = 'main'


/**
 * Use `Main` to
 * Has color `x`
 */
const Main = ({
  id,
  className,
  style,
  children,

  overrides
}) => {
  const intl = useIntl()

  const context = useContext(SiteContext)

  const localVars =[
    'SITE_NAME',
    'FACEBOOK',
    'INSTAGRAM',
    'TWITTER',
    'HOME_URL',
    'SITE_DESCRIPTION'
  ]

  const computedVars = {}

  localVars.forEach((e) =>  {
    computedVars[e] = overrides[e] || context[e]

  })

  const cv = computedVars

  const socials = useMemo(() => {

    let ntks = [
      {
        url :cv.FACEBOOK,
        name:'facebook'
      },
      {
        url :cv.INSTAGRAM,
        name:'instagram'
      },
      {
        url :cv.TWITTER,
        name:'twitter'
      },
    ]

    return ntks.filter(e => e.url)

  }, [cv.INSTAGRAM, cv.TWITTER, cv.FACEBOOK]
  )

  const SocialsComp = useMemo(() => () => <ul 
      className='inline'
  >
    {socials.map(
    (e) => 
      <li>
        <a href={ typeof e.url === 'string' ? e.url : intl.formatMessage(e.url.props) } rel='noreferrer nofollow' target='_blank'>{ e.name }</a>
      </li>
  )}
  </ul>

  ,
    [socials]
  )




  return (
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
      <div className=''>
        <Link to={ cv.HOME_URL }>
        <Heading
          heading={ cv.SITE_NAME }
          headingClassName='h3'
          subtitle={
            <SocialsComp/>
          }
        />
        </Link>
      </div>
      { cv.SITE_DESCRIPTION &&
      <div className="">
        <p>
          { cv.SITE_DESCRIPTION}
        </p>
      </div>
      }
      { children }
    </div>
  )}

Main.propTypes = {
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
   * Override the site context
   */
  overrides: PropTypes.object,

  /**
   * A dictionnary of keys to override sitecontext
   * /
  overrides:PropTypes.object
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

Main.defaultProps = {
  overrides:{}
  //height:'2.2em',
  //as:'p',
}
export default Main

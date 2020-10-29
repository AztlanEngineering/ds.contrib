/* @fwrlines/generator-react-component 2.1.1 */
import * as React from 'react'
import { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

import { useHistory, useLocation } from 'react-router-dom'

import { HorizontalBar, Heading, Button } from 'ds-core'

import {FormattedMessage} from 'react-intl'
import messages from './messages'

import { DashboardContext } from '../../common'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './horizontal_nav_bar.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./horizontal_nav_bar.scss')
}

const baseClassName = 'horizontal_nav_bar'


/**
 * Use `HorizontalNavBar` to
 * Inner padding is read from `u`
 * */
const HorizontalNavBar = ({
  id,
  className,
  style,
  backMessage,
  backDefaultMessage,
  backIcon,
  isContentNavigation,
  backTo,
  dummy
}) => {
  const { state={} } = useLocation()

  const history = useHistory()

  const navigateBack = backTo ?
    (e) => {
      e.persist()
      history.push(backTo)
    } :
    (e) => {
      e.persist()
      history.goBack()
    }
  if(isContentNavigation && !state.displayMainContent) return null

  return (
    <HorizontalBar
      className={
        [
        //styles[baseClassName],
          baseClassName,
          's-1 k-s',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      //style={ style }
      style={ style }
    >
      <div className='yf inside'>
        { !dummy ?
          <Button
            simple
            compact
            className='it x-subtitle xh-paragraph k-s s1'
            icon={ backIcon }
            iconSide='l'
            onClick={ navigateBack }
          >
            { backMessage || state.previousTitle || backDefaultMessage }
          </Button>
          :
          <Button
            compact
            simple
            className='it k-s s1'
            disabled
          >
            { ' ' }
          </Button>
        }
        {/*<p>Its me</p>*/}
      </div>
    </HorizontalBar>
  )}

HorizontalNavBar.propTypes = {
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
  //children:PropTypes.node,

  /**
   * The back button label. This trumps both the previousTitle and the default message
   */
  backMessage:PropTypes.object,

  /**
   * The back button label. This is trumped by the backMessage and the previousTitle
   */
  backDefaultMessage:PropTypes.object,

  /**
   * The back button icon
   */
  backIcon:PropTypes.string,

  /**
   * Whether to hide if not main content
   */
  isContentNavigation:PropTypes.bool,

  /**
   * Whether the button is a dummy
   */
  dummy:PropTypes.bool
}

HorizontalNavBar.defaultProps = {
  className         :'u50',
  backIcon          :'h',
  backDefaultMessage:<FormattedMessage { ...messages.back }/>,
  isContentNavigation:false
  //as:'p',
}

export default HorizontalNavBar

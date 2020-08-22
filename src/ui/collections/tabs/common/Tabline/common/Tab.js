/* @fwrlines/generator-react-component 2.2.5 */
import * as React from 'react'
import { useContext, useCallback } from 'react'
import PropTypes from 'prop-types'

import { Button } from '@fwrlines/ds/elements'
import { Context as TabContext } from '../../Context'


//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

import C from 'ui/cssClasses'

/* Relative imports
   import styles from './tab.scss' */
//import('./tab.scss')

const baseClassName = 'tab'


/**
 * Use `Tab` to
 * Has color `x`
 */
const Tab = ({
  id,
  className,
  style,
  children,

  as:Wrapper,

  //active,
  tabId,
  closable,
}) => {

  const {
    closeTab,
    selectTab,
    focus,
  } = useContext(TabContext)

  const isTabActive = focus === tabId

  const onTabClick = useCallback((e) => {
    //console.log(e.target)
    e.stopPropagation()
    selectTab(tabId)
  }, [tabId])

  const onCloseClick = useCallback((e) => {
    e.stopPropagation()
    closeTab(tabId)
  }, [tabId])

  return (
    <Wrapper
      className={
        [
        //styles[baseClassName],
          baseClassName,
          isTabActive && C.active,
          closable && 'closable',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      onClick={ onTabClick }
    >
      <span>
        { children }
      </span>

      { closable &&
        <Button
          onClick={ onCloseClick }
          className='x-heading s-1 k-s'
          simple
          icon='p'
        />
      }
    </Wrapper>
  )}

Tab.propTypes = {
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

  /**
   * Whether the tab is active
   */
  // active:PropTypes.bool,

  /**
   * Whether the tab can be closed
   */
  closable:PropTypes.bool,

  /**
   * The id of the tab, according to the context
   */
  tabId:PropTypes.string.isRequired,
}

Tab.defaultProps = {
  as      :'li',
  closable:true
}

export default Tab

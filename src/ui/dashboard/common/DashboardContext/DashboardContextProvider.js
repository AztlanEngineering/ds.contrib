/* @fwrlines/generator-react-component 1.2.2 */
import * as React from 'react'
import {useReducer, useContext } from 'react'
import PropTypes from 'prop-types'

import Cookies from 'universal-cookie'

/* Config
   import C from 'ui/cssClasses' */
import { SiteContext } from '@fwrlines/ds/common'
import { DashboardContext } from './common'

import gql from 'graphql-tag'
import { useLazyQuery, useApolloClient } from '@apollo/client'

//import { useCookies } from 'react-cookie'

import { useLocation, useHistory } from 'react-router-dom'

import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./dashboard_context_provider.scss')
}

const baseClassName = 'dashboard'
/*
const DataProcessor = (data) => {
  if (data.me) return { ...data.me }
}
 */

const reducer = (state, action) =>{
  switch (action.type) {
  case 'SET_FOCUS':
    return {
      ...state,
      focus:action.payload
    }
  default:
    return state
  }

}
/**
 * Use `DashboardContextProvider` to
 * Has color `x`
 */
const DashboardContextProvider = ({
  className,
  id,
  style,
  children,
  as:Wrapper
}) => {

  const [state, dispatch] = useReducer(reducer, {
    focus:'sidebar'
  })

  //const location = useLocation()

  const history = useHistory()

  const setFocus = (whereToFocus) => {
    dispatch({
      type   :'SET_FOCUS',
      payload:whereToFocus, //'sidebar', 'main'
    })
  }

  const navigate = (destination, whereToFocus=false) => {
    history.push(destination)
    if (
      whereToFocus &&
      (whereToFocus != state.focus)
    ) setFocus(whereToFocus)
  }

  const { userTheme } = useContext(SiteContext)

  /*
  const isLocalUrl = (url) => url
    .split('/')
    .slice(-1)
    .pop()
    .includes('#')
    */

  return (
    <DashboardContext.Provider value={{
      setFocus,
      navigate,
      //isLocalUrl,
      ...state
    }}
    >
      <Wrapper
        className={
          [
            //styles[baseClassName],
            baseClassName,
            userTheme && 'ui-'+ userTheme,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
      >
        { children }
      </Wrapper>
    </DashboardContext.Provider>
  )}

DashboardContextProvider.propTypes = {
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
  children:PropTypes.node.isRequired,


  /**
 * Which html tag to use
 */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /**
   * The absolute path to login
   */
  //loginPath:PropTypes.string,
}

DashboardContextProvider.defaultProps = {
  as:'div'
}

export default DashboardContextProvider

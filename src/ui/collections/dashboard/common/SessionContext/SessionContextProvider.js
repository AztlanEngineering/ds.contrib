/* @fwrlines/generator-react-component 1.2.2 */
import * as React from 'react'
import { useEffect, useState, useCallback, useMemo} from 'react'
import PropTypes from 'prop-types'

import Cookies from 'universal-cookie'

/* Config
   import C from 'ui/cssClasses' */

import { SessionContext } from './common'

import gql from 'graphql-tag'
import { useLazyQuery, useApolloClient } from '@apollo/client'

//import { useCookies } from 'react-cookie'

import { useHistory } from 'react-router-dom'
/*
const DataProcessor = (data) => {
  if (data.me) return { ...data.me }
}
 */


/**
 * Use `SessionContextProvider` to
 * Has color `x`
 */

const SessionContextProvider = ({
  children,
  GQL_QUERY_ME,

  //processor,

  loginPath,
  logoutPath,
  dashboardHomePath,

  cookieName,
  cookiePath,
}) => {

  /* Logic for setting and removing session cookies
     const [cookies, setCookie, removeCookie] = useCookies([cookieName]) */

  const client = useApolloClient()

  const [loadCurrentUser, {
    error:currentUserError,
    loading:currentUserLoading,
    data={}
  }] = useLazyQuery(gql(GQL_QUERY_ME))

  //console.log('got the result of data', data)

  const { me:currentUserData } = data

  const history = useHistory()

  const cookies = useMemo(() => new Cookies)

  const setSessionCookie = useCallback(
    (value, options) => cookies.set(cookieName, value, { path: cookiePath, ...options }),
    [cookies]
  )
  const removeSessionCookie = useCallback(
    (options) => cookies.remove(cookieName, { path: cookiePath, ...options }),
    [cookies]
  )

  const sessionCookie = useMemo(
    () => cookies.get(cookieName),
    [cookies]
  )

  const logout = () => {
    removeSessionCookie()
    client.clearStore().then(() => {
      history.push(loginPath)
      if(typeof window === 'object'){
        window.location.reload()
      }
    })
  }

  useEffect(() => {
    if(sessionCookie) {
      loadCurrentUser()
    }
  },
  [sessionCookie]
  )

  const isConnected = currentUserData ? true : false

  return (
    <SessionContext.Provider value={{
      logoutPath,
      loginPath,
      dashboardHomePath,

      setSessionCookie,
      removeSessionCookie,
      sessionCookie,
      logout,

      currentUserError,
      currentUserLoading,
      currentUserData,

      isConnected
    }}
    >
      { children }
    </SessionContext.Provider>
  )}

SessionContextProvider.propTypes = {
  /**
   *  The children JSX
   */
  children:PropTypes.node.isRequired,

  /**
   * The absolute path to login
   */
  loginPath:PropTypes.string,

  /**
   * The absolute path to logout
   */
  logoutPath:PropTypes.string,

  /**
   * The absolute path to the dashboard home
   */
  dashboardHomePath:PropTypes.string,

  /**
   * The graphql query to get the user profile
   */
  GQL_QUERY_ME:PropTypes.string,

  /**
   * The name of the session cookie
   */
  cookieName:PropTypes.string,

  /**
   * The path of the session cookie
   */
  cookiePath:PropTypes.string,
}

SessionContextProvider.defaultProps = {
  logoutPath:'/logout',
  loginPath :'/login',
  cookieName:'session',
  cookiePath:'/'
  //processor:DataProcessor
}

export default SessionContextProvider

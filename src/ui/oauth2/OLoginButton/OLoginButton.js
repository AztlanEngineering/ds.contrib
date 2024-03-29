/* @fwrlines/generator-react-component 1.0.1 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */
import { Button } from 'ds-core'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import QUERY_GOOGLE from './graphql/oAuth2Google.gql'

import {FormattedMessage} from 'react-intl'
import messages from './messages'

/* Relative imports
   import styles from './o_login_button.scss' */
import { isBackend } from 'ui/isBackend'

import { useLocation } from 'react-router-dom'

if(!isBackend) {
  import('./o_login_button.scss')
}


const baseClassName = 'o_login_button'

const OLoginButton = ({
  id,
  className,
  style,

  query,
  //dataKey,
  simple,
  buttonClassName,

  providerName,
  from:userFrom
}) => {

  const location = useLocation()


  const { from } = location.state || {}

  const fromPathname = (from && (from.pathname !== '/') && from.pathname) || userFrom || undefined

  const {
    loading,
    error,
    data
  } = useQuery(gql(query), {
    variables:{
      next:fromPathname
    }
  })
  /* console.log(loading, error, data)
      */
  const finalData = useMemo(() => {
    var result
    //console.log(99, data)
    if(data) {
      const dataKey = Object.keys(data).reduce((a, e) => e)
      result = data[dataKey]
    }
    return result
  },
  [loading, data])

  return(
    <>
      <a
        className={
          [
            baseClassName,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
        href={ !loading ? finalData : ''}
      >
        <Button
          simple={ simple }
          loading={ loading }
          disabled={ loading }
          className={
            [
              buttonClassName,
            ].filter(e => e).join(' ')
          }
        >
          <FormattedMessage
            {...messages.label}
            values={{providerName}}
          />
        </Button>
      </a>
    </>
  )
}

OLoginButton.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to the wrapper
   */
  className:PropTypes.string,

  /**
   * The html class names to be provided to the inner button
   */
  buttonClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * Whether the style is simple
   */
  simple:PropTypes.bool,

  /**
   * The query (.gql file import with babel import inline)
   */
  query:PropTypes.string.isRequired,

  /**
   * The key to the query data object
   */
  //dataKey:PropTypes.string.isRequired,

  /**
   * The button label
   */
  providerName:PropTypes.string.isRequired,

  /**
   * A slug that overrides the location state from. This is passed as a variable to the query
   */
  from:PropTypes.string
}

OLoginButton.defaultProps = {
  query       :QUERY_GOOGLE,
  dataKey     :'oAuth2Google',
  className   :'x-orange',
  simple      :true,
  providerName:'Google'
  //buttonClassName:'x-green',
}

export default OLoginButton

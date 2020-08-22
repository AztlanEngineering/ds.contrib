/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'



import { useQuery, } from '@apollo/client'
import gql from 'graphql-tag'
import QUERY from './graphql/time.graphql'
//import CONFIG from 'config'

import { DotInfo } from '@fwrlines/ds/elements'

//Intl

import { FormattedMessage} from 'react-intl'
import messages from './messages'

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './connection_status.scss'
   import { isBackend } from 'ui/isBackend' */

const baseClassName = 'connection_status'


/**
 * Use `ConnectionStatus` to
 * Has color `x`
 */
const ConnectionStatus = ({
  id,
  className,
  style
}) => {

  const [displayResult, setDisplayResult] = useState(false)

  const toggleDisplayResult = () => setDisplayResult(!displayResult)


  const {
    loading,
    error,
    data:{ time:response }={},
    refetch,
    //networkStatus,
  } = useQuery(gql(QUERY), {
    notifyOnNetworkStatusChange:true
  })


  const connected = response ? true : false

  const messagesContext = {
    endpoint:process.env.GRAPHQL_ENDPOINT || '{ endpoint_url }',
    response,
  }

  return (
    <DotInfo
      className={
        [
        //styles[baseClassName],
          baseClassName,
          loading && 'y-primary',
          !loading && (connected ? 'y-success' : 'y-error'),
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      subtitleUpper={false}
      subtitleClassName={ 'x-subtitle' }
      style={ style }
    >
      {
        loading &&
          <>
            <span className='sm-h xs-h'>
              <FormattedMessage
                {...messages.loading }
                values={ messagesContext }
              />
            </span>
            <span className='md-h lg-h'>
              <FormattedMessage
                {...messages.loadingShort }
                values={ messagesContext }
              />
            </span>
          </>
      }
      {! loading && (connected ?
        <>
          { !displayResult ?
            <>
              <span
                className='pointer xs-h sm-h'
                onClick={ toggleDisplayResult }
              >
                <FormattedMessage
                  {...messages.connected }
                  values={ messagesContext }
                />
              </span>
              <span
                className='pointer md-h lg-h'
                onClick={ toggleDisplayResult }
              >
                <FormattedMessage
                  {...messages.connectedShort }
                  values={ messagesContext }
                />
              </span>
            </>:
            <>
              <span
                className='pointer md-h lg-h'
                onClick={ toggleDisplayResult }
              >
                <FormattedMessage
                  {...messages.responseIsShort }
                  values={ messagesContext }
                />
                {' '}
                <span
                  className='pointer'
                  onClick={ (e) => {
                    e.stopPropagation()
                    refetch() }
                  }
                >
                  <FormattedMessage
                    {...messages.update }
                    values={ messagesContext }
                  />
                </span>
              </span>
              <span
                className='pointer sm-h xs-h'
                onClick={ toggleDisplayResult }
              >
                <FormattedMessage
                  {...messages.responseIs }
                  values={ messagesContext }
                />
                {' '}
                <span
                  className='pointer'
                  onClick={ (e) => {
                    e.stopPropagation()
                    refetch() }
                  }
                >
                  <FormattedMessage
                    {...messages.update }
                    values={ messagesContext }
                  />
                </span>
              </span>
            </>
          }
        </>
        :
        <>
          <span className='xs-h sm-h'>
            <FormattedMessage
              {...messages.connectionError }
              values={ messagesContext }
            />
            {' '}
            <span
              className='pointer'
              onClick={ () => refetch() }
            >
              <FormattedMessage
                {...messages.retry }
                values={ messagesContext }
              />
            </span>
          </span>
          <span className='lg-h md-h'>
            <FormattedMessage
              {...messages.connectionErrorShort }
              values={ messagesContext }
            />
            {' '}
            <span
              className='pointer'
              onClick={ () => refetch() }
            >
              <FormattedMessage
                {...messages.retry }
                values={ messagesContext }
              />
            </span>
          </span>
        </>

      )}
    </DotInfo>
  )}

ConnectionStatus.propTypes = {
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
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,
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

/*
ConnectionStatus.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default ConnectionStatus

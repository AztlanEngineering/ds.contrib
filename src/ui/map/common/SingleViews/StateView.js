/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useCallback, useEffect, useMemo } from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'


import {
  ActionGrid
} from '../ActionGrid'

import {
  GraphQLErrorView
} from '../GraphQLErrorView'

import { ObjectState } from '../ObjectState'

import { Link, useLocation, useParams, useHistory } from 'react-router-dom'

import {
  useModelMap,
} from '../Context'

import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/client'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './state_view.scss' */

const baseClassName = 'state_view'


/**
 * Use `StateView` to
 * Has color `x`
 */
const StateView = ({
  id,
  className,
  style,
  itemId,
  setCurrentTab
}) => {

  const location = useLocation()


  const {
    guid:currentId,
    ...routeParams
  } = useParams()

  const {
    currentType,
    generateLocalPath
  } = useModelMap()

  const {
    loading,
    error,
    data,
    refetch
  } = useQuery(gql(currentType.graphql.queries.FULL),
    {
      variables:{
        id:itemId || currentId
      },
      skip                       :!currentId || !currentType.name,
      notifyOnNetworkStatusChange:true
    })

  const finalData = useMemo(() => {
    var result = {}
    if(data) {
      const dataKey = Object.keys(data).reduce((a, e) => e)
      result = data[dataKey]
    }
    return result
  },
  [currentType.name, loading, location, data])


  //console.log(777, loading, error, data, finalData, currentId)

  const name = currentId ? (finalData._string || finalData.name || (finalData.id && finalData.id.substring(0, 8)) || 'Loading') : `New ${currentType.name}`

  useEffect(() =>
  {
    setCurrentTab && setCurrentTab({
      path :`${location.pathname}`,
      title:`${name}`
    })
  },
  [finalData.id]
  )

  if(!finalData.__typename) return(
    <GraphQLErrorView
      item={ finalData }
      loadingSingle={ loading }
      currentSingleView='State'
      title='State'
      error={ error }
      refetch={refetch}
    />
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
      <ActionGrid
        item={ finalData }
        loadingSingle={ loading }
        currentSingleView='State'
        title='State'
        refetch={ refetch }
      >
      </ActionGrid>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', 'alignItems': 'center' }}>
        <div className='uc pv-u'>
          <ObjectState
            simple
            item={ finalData }
          />
        </div>
        <div className='uc'>
          <ObjectState
            item={ finalData }
          />
        </div>
      </div>
    </div>
  )}

StateView.propTypes = {
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
   * Overloads the automatic detection of the id in the url
   */
  itemId:PropTypes.string,

  /**
   * Overloads the automatic detection of the id in the url
   */
  setCurrentTab:PropTypes.object,

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
}

/*
StateView.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default StateView

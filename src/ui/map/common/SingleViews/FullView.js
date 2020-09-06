/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo} from 'react'
import PropTypes from 'prop-types'


import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/client'

import {
  Button,
} from 'ds-core'

import {
  ActionGrid
} from '../ActionGrid'

import {
  useModelMap,
} from '../Context'
//Intl
import { Link, useLocation, useParams, useHistory } from 'react-router-dom'

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './full_view.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./full_view.scss')
}

const baseClassName = 'full_view'


/**
 * Use `FullView` to
 * Has color `x`
 */
const FullView = ({
  id,
  className,
  style,
  itemId
}) => {

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


  if(!currentId || finalData.__typename) return (
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
        loadingSingle={ loading  }
        currentSingleView='Full'
        title='Full Graph'
      >
        <Button onClick={ refetch } className='pointer x-green'>
          Refetch
          </Button>
      </ActionGrid>
      <pre className='s-1 k-s x-paragraph c-x'>
        { JSON.stringify(finalData, null, 2) }
      </pre>
    </div>
  )

  else return(
    <div
      className={
        [
          //styles[baseClassName],
          baseClassName,
          'x-paragraph',
          's-2 k-s',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <ActionGrid
        item={ finalData }
        loadingSingle={ loading  }
        currentSingleView='Full'
        title={ name }
      >
        <Button onClick={ refetch } className='pointer x-green'>Refetch</Button>
      </ActionGrid>

      <pre className='c-x'>
        { error && JSON.stringify(error, null, 2) }
      </pre>
      {!(loading || error) &&
        <p className='c-x'>
          If nothing else appears, the object was not found or there was no data returned
          <pre>
            { JSON.stringify(finalData) }
            { JSON.stringify(data) }
          </pre>
        </p>}

    </div>
  )
}

FullView.propTypes = {
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
FullView.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default FullView

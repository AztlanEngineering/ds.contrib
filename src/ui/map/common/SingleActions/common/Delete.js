/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'


import { Button } from 'ds-core'


import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import { useModelMap } from '../../Context'

import { useHistory, useParams } from 'react-router-dom'
//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './delete.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./delete.scss')
}

const baseClassName = 'delete'


/**
 * Use `Delete` to
 * Has color `x`
 */
const Delete = ({
  id,
  className,
  style,
  item,
  itemId:userItemId,

  objectType,

  refetch,
  redirect,
  ...otherProps
}) => {

  const routeParams = useParams()

  const history = useHistory()

  const {
    currentType:localType,
    generateLocalPath,
    getType
  } = useModelMap()

  const currentType = useMemo(() => objectType ? getType(objectType) : localType, [routeParams])

  const { DELETE } = currentType.graphql.mutations

  const itemName = item ? item._string || item.name || item.id : userItemId
  const itemId = item ? item.id : userItemId

  const [deleteItem, {
    data={},
    loading,
    error
  }] = useMutation(gql(DELETE))

  const finalData = useMemo(() => (data && data[Object.keys(data).reduce((a, e) => {
    return e
  }, '')]) || '',
  [currentType.name, loading])

  const onClick = (e) => {
    const variables = {
      id:itemId
    }
    if (confirm(`Please confirm you want to delete ${itemName }`) == true) {
      deleteItem({ variables })
    }
  }

  useEffect(() => {
    if(redirect && (finalData === item.id)) {
      const url = generateLocalPath(
        'list',
        {
          ...routeParams
        }
      )
      history.push(url)
    }
  }, [finalData])

  useEffect(() => {
    //console.log('WILL NOW REFETCH', finalData)
    finalData.id && refetch && refetch()
  }
  , [finalData] )

  useEffect(() => {
    if (error && !(typeof window === 'undefined')){
      alert(JSON.stringify(error, null, 2) )
    } 
  }, [error])

  return (
    <Button
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      loading={ loading }
      onClick={ !loading ? onClick : undefined }
    >
      Delete
    </Button>
  )}

Delete.propTypes = {
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
   * A dict of values representing the current item. Must have key id
   */
  item:PropTypes.object.isRequired,


  /**
   *  function that will be executed after the end of the mutation
   */
  refetch:PropTypes.func,

  /**
   *  Whether to redirect to the main list page after deletion 
   */
  redirect:PropTypes.bool
}

/*
Delete.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Delete

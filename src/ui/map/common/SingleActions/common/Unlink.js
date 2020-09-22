/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'



import { Button, Label } from 'ds-core'


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
   import styles from './unlink.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./unlink.scss')
}

const baseClassName = 'unlink'


/**
 * Use `Unlink` to
 * Has color `x`
 */
const Unlink = ({
  id,
  className,
  style,

  item,
  itemId:userItemId,

  objectType,
  relatedType,
  foreignKey,

  refetch,
  reverseRelation,
}) => {

  const {
    guid:currentId,
    ...routeParams
  } = useParams()

  const {
    currentType:localType,
    generateLocalPath,
    getType
  } = useModelMap()

  const currentType = useMemo(() => objectType ? getType(objectType) : localType, [routeParams])

  const relatedTypeInfo = useMemo(() => getType(relatedType), [routeParams])



  const itemName = item ? item._string || item.name || item.id : userItemId
  const itemId = item ? item.id : userItemId

  const finalType = reverseRelation ? currentType : relatedTypeInfo
  const finalId = reverseRelation ? itemId : currentId
  const finalRelatedType = reverseRelation ? relatedTypeInfo : currentType

  const { UPDATE } = finalType.graphql.mutations

  const [unlinkItem, {
    data={},
    loading,
    error
  }] = useMutation(gql(UPDATE))

  const finalData = useMemo(() => (data && data[Object.keys(data).reduce((a, e) => {
    return e
  }, '')]) || '',
  [relatedType.name, loading])

  const onClick = (e) => {
    const variables = {
      id          :finalId,
      [foreignKey]:null
    }
    console.log(variables)
    if(!reverseRelation) {
      if (confirm(`Please confirm you know what youre doing. You will now unlink \n\n${currentType.name}:${itemName}\n\nfrom\n\n${relatedType}:${currentId}\n\nVariables :\n\n${JSON.stringify(variables, null, 2)}`) == true) {
        unlinkItem({ variables })

      }
    } else {
      if (confirm(`Please confirm you know what youre doing. You will now unlink \n\n${finalRelatedType.name}:${currentId}\n\nfrom\n\n${finalType.name}:${finalId}\n\nVariables :\n\n${JSON.stringify(variables, null, 2)}`) == true) {
        unlinkItem({ variables })
      }
    }
  }

  useEffect(() => {
    if (finalData.id) {
      //console.log('WILL NOW REFETCH', finalData, refetch)
      refetch()
    }
  }
  , [finalData] )

  { error && JSON.stringify(error) }

  useEffect(() => {
    if (error && !(typeof window === 'undefined')){
      alert(JSON.stringify(error, null, 2) )
    }
  }, [error])

  return (

    <Button
      compact
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'yf',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      loading={ loading }
      onClick={ !loading ? onClick : undefined }
    >
      <span>
        { `Unlink` }
        &nbsp;
      </span>
      <Label className='f-mono s-1 k-s x-white'>
        { finalType.name }
        {'.'}
        { foreignKey }
      </Label>
    </Button>

  )}

Unlink.propTypes = {
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
   * A dict of values representing the current item. Must have key id
   */
  item:PropTypes.object.isRequired,

  /**
   * Overloads the automatic detection of the id in the url
   */
  itemId:PropTypes.string,

  /**
   * the name of each type that is represented to the component
   */
  objectType:PropTypes.string,

  /**
   * If this is displayed in the context of a fk, please enter here the foreign key from the current type
   */
  foreignKey:PropTypes.string,

  /**
   * refetch data
   */
  refetch:PropTypes.func,

  /**
   * defines the related type (for unlink)
   */
  relatedType:PropTypes.string.isRequired,

}

/*
Unlink.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Unlink

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
  foreignKey,

  refetch,
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

  const { UPDATE } = currentType.graphql.mutations

  const itemName = item ? item._string || item.name || item.id : userItemId
  const itemId = item ? item.id : userItemId

  const [unlinkItem, {
    data={},
    loading,
    error
  }] = useMutation(gql(UPDATE))

  const finalData = useMemo(() => (data && data[Object.keys(data).reduce((a, e) => {
    return e
  }, '')]) || '',
  [currentType.name, loading])

  const onClick = (e) => {
    const variables = {
      id          :itemId,
      [foreignKey]:null
    }
    if (confirm(`Please confirm you know what youre doing. You will now unlink ${itemName} from ${objectType}:${currentId}`) == true) {
      unlinkItem({ variables })
    }
  }

  useEffect(() => {
    //console.log('WILL NOW REFETCH', finalData)
    finalData.id && refetch && refetch()
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
        { objectType }{'.'}
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

}

/*
Unlink.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Unlink

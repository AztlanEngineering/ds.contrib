/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'


import { Button } from 'ds-core'

import { useParams, Link } from 'react-router-dom'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './edit.scss' */
import { isBackend } from 'ui/isBackend'

import { useModelMap } from '../../Context'

if(!isBackend) {
  import('./edit.scss')
}

const baseClassName = 'edit'


/**
 * Use `FullViewButton` to
 * Has color `x`
 */
const FullViewButton = ({
  id,
  className,
  style,
  item,
  itemId:userItemId,

  objectType,

  //These are extracted not to be passed to the children button
  refetch,
  condition,

  short,

  ...otherProps
}) => {
  const itemId = item ? item.id : userItemId

  const routeParams = useParams()

  const {
    currentType:localType,
    generateLocalPath,
    getType
  } = useModelMap()

  const currentType = useMemo(() => objectType ? getType(objectType) : localType, [routeParams])

  const content = short ? 'F' : 'Full Graph'

  return (
    <Link to={ itemId && generateLocalPath(
      'singleAlt',
      {
        ...routeParams,
        guid:itemId,
        type:currentType.baseUrl,
        view:'full'
      }
    ) }
    >
      <Button
        className={
          [
            //styles[baseClassName],
            baseClassName,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={{
          whiteSpace:'nowrap',
          ...style
        }}
        { ...otherProps }
      >
        { content }
      </Button>
    </Link>
  )}

FullViewButton.propTypes = {
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
   * A dict of values representing the current item. Must have key id
   */
  item:PropTypes.object.isRequired,

  /**
   * The item it. This is less optimal than providing the full object but ok still. Please note that either item or itemId must be provided.
   */
  itemId:PropTypes.string,

  /**
   * defines the type of object that the component has to have
   */
  objectType:PropTypes.string,

  /**
   *  function that will be executed after the end of the mutation
   */
  refetch:PropTypes.func,

  /**
   * extra actions to be added
   */
  condition:PropTypes.func,

  /**
   * Whether to display a short name instead of the full name
   */
  short:PropTypes.bool,
}

/*
FullViewButton.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default FullViewButton

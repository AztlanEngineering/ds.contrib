/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'ds-core'

import { useModelMap } from '../Context'

import {
  Delete,
  Edit,
  Unlink,
  FullViewButton,
  AssociationsViewButton,
} from './common'

import { 
  ObjectState
} from '../ObjectState'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './actions.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./actions.scss')
}

const baseClassName = 'actions'


/**
 * Use `Actions` to
 * Has color `x`
 */
const Actions = ({
  id,
  className,
  style,
  lean,
  short,
  item,
  itemId,
  objectType,
  relatedType,
  reverseRelation,
  refetch,
  enableEdit,
  enableDelete,
  enableUnlink,
  enableState,
  foreignKey,
  extraActions,
  reverse,
  redirectAfterDelete,
  ...otherProps
}) => {

  const {
    currentType:localType,
    generateLocalPath,
    getType
  } = useModelMap()

  const currentType = useMemo(() => objectType ? getType(objectType) : localType, [objectType, localType])

  const {
    actions:typeActions
  } = currentType

  const actions = useMemo(() => {
    var acts = []
    !lean && enableEdit && acts.push(
      {
        condition:(user) => true,
        Component:Edit,
        className:'x-blue',
      })

    enableDelete && acts.push(
      {
        condition:(user) => true,
        Component:Delete,
        className:'x-error',
      })

    enableUnlink && acts.push(
      {
        condition:(user) => true,
        Component:Unlink,
        className:'x-grey',
      }
    )

    !lean && currentType.defaultViews.state && enableState && acts.push(
      {
        condition:(user) => true,
        Component:ObjectState,
        //className:'x-warning',
        simple:true
      }
    )

    !lean && currentType.graphql.queries.FULL && acts.push(
      {
        condition:(user) => true,
        Component:FullViewButton,
        className:'x-yellow',
      }
    )

    !lean && currentType.associations && currentType.associations.belongsTo && acts.push(
      {
        condition:(user) => true,
        Component:AssociationsViewButton,
        className:'x-secondary',
      }
    )

    const res = [
      ...acts,
      ...extraActions
    ]
    reverse && res.reverse()
    return res


  }
  ,
  [currentType, extraActions, reverse]
  )


  return (
    actions.map(({ Component, extraProps, ...e }, i) =>
      <Component
        {...e}
        compact
        key={ i }
        item={ item }
        itemId={ itemId }
        objectType={ objectType }
        foreignKey={ foreignKey }
        refetch={ refetch }
        short={ short }
        reverseRelation={ reverseRelation }
        redirect={ redirectAfterDelete }
        relatedType={relatedType}
        { ...extraProps }
      />

    )
    /*
    <Button.Group
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      { ...otherProps }
    >
    </Button.Group>
    */
  )}

Actions.propTypes = {
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
  item:PropTypes.object,

  /**
   * The item it. This is less optimal than providing the full object but ok still. Please note that either item or itemId must be provided.
   */
  itemId:PropTypes.string,

  /**
   * defines the type of object that the component has to have
   */
  objectType:PropTypes.string,

  /**
   * defines the related type (for unlink)
   */
  relatedType:PropTypes.string,

  /**
   * the function that fetches the data for the component after every change
   */
  refetch:PropTypes.func,

  /**
   *  Whether to display the edit action
   */
  enableEdit:PropTypes.bool,

  /**
   *  Whether to display the delete action
   */
  enableDelete:PropTypes.bool,

  /**
   *  Whether to display the unlink action
   */
  enableUnlick:PropTypes.bool,

  /**
   *  Whether to display the state view button. Please not that this only applies to types that have a `state` key in their `defaultViews`
   */
  enableState:PropTypes.bool,

  /**
   * the key that opens the connections between to types
   */
  foreignKey:PropTypes.string,

  /**
   * Whether we are wish to unlink from inside this type instead of the opposite
   */
  reverseRelation:PropTypes.bool,

  /**
   * Extra actions to be added
   */
  extraActions:PropTypes.arrayOf(
    PropTypes.shape({
      condition:PropTypes.func,
      Component:PropTypes.node.isRequired,
    })
  ),

  /**
   *  Whether to reverse the order of the actions
   */
  reverse:PropTypes.bool,

  /**
   *  Whether to redirect to the list after deletion. This is only needed in singleviews
   */
  redirectAfterDelete:PropTypes.bool,

  /**
   * Whether to display the minimum number of actions  
   */
  lean:PropTypes.bool,


  /**
   * Whether to display a short name instead of the full name
   */
  short:PropTypes.bool,
}

Actions.defaultProps = {
  enableEdit         :true,
  enableDelete       :true,
  enableUnlink       :false,
  enableState:true,
  short:false,
  redirectAfterDelete:false,
  extraActions       :[],
  reverse            :true
}

Actions.Delete = Delete
Actions.Edit = Edit

export default Actions

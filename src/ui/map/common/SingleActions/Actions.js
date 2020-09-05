/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'ds-core'

import { useModelMap } from '../Context'

import {
  Delete,
  Edit,
  Unlink
} from './common'

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
  item,
  itemId,
  objectType,
  refetch,
  enableEdit,
  enableDelete,
  enableUnlink,
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
    enableEdit && acts.push(
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
    actions.map(({ Component, ...e }, i) =>
      <Component
        {...e}
        key={ i }
        item={ item }
        itemId={ itemId }
        objectType={ objectType }
        foreignKey={ foreignKey }
        refetch={ refetch }
        redirect={ redirectAfterDelete }
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
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   *  Whether to display the edit action
   */
  enableEdit:PropTypes.bool,

  /**
   *  Whether to display the delete action
   */
  enableDelete:PropTypes.bool,

  /**
   *  Whether to reverse the order of the actions
   */
  reverse:PropTypes.bool,

  /**
   *  Whether to redirect to the list after deletion. This is only needed in singleviews
   */
  redirectAfterDelete:PropTypes.bool,

  /**
   * Extra actions to be added
   */
  extraActions:PropTypes.arrayOf(
    PropTypes.shape({
      condition:PropTypes.func,
      Component:PropTypes.node.isRequired,
    })
  )

}

Actions.defaultProps = {
  enableEdit         :true,
  enableDelete       :true,
  enableUnlink:false,
  redirectAfterDelete:false,
  extraActions       :[],
  reverse            :true
}

Actions.Delete = Delete
Actions.Edit = Edit

export default Actions

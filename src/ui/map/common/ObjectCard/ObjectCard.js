/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import {
  Card,
  Button
} from 'ds-core'


import {
  SingleActions
} from '../SingleActions'


//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './object_card.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./object_card.scss')
}

const baseClassName = 'object_card'


/**
 * Use `ObjectCard` to
 * Has color `x`
 */
const ObjectCard = ({
  id,
  className,
  style,
  children,

  item,

  refetch,
  enableDelete,
  enableEdit,
  extraActions,
  reverse,
  redirectAfterDelete,
}) => {

  const actionProps = {
    item,
    refetch,
    reverse,
    enableDelete,
    enableEdit,
    extraActions,
    redirectAfterDelete
  }

  return (
    <Card
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'y-red b-y',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { children }
      { item && item.tests &&
        <Card.Section>
        </Card.Section>
      }
      <Card.Section>
        <Button.Group
          className='s-2 k-s'
          style={{ justifyContent: 'flex-end' }}
        >
          <SingleActions
            { ...actionProps }
          />
        </Button.Group>
      </Card.Section>
    </Card>
  )}

ObjectCard.propTypes = {
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
   * refetch data
   */
  refetch:PropTypes.func,

  /**
   *  Whether to display the delete action
   */
  enableDelete:PropTypes.bool,

  /**
   *  Whether to display the edit action
   */
  enableEdit:PropTypes.bool,

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
   *  Whether to redirect to the list after deletion. This is only needed in singleviews
   */
  redirectAfterDelete:PropTypes.bool,

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
ObjectCard.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

ObjectCard.Section = Card.Section
ObjectCard.Divider = Card.Divider

export default ObjectCard

/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'

import {
  Card,
  Button,
  Heading
} from 'ds-core'


import {
  SingleActions
} from '../SingleActions'

import {
  TypeButton
} from '../TypeButton'

import {
  ObjectState
} from '../ObjectState'

import {
  useModelMap,
} from '../Context'

import { Link, useLocation, useParams, useHistory } from 'react-router-dom'
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
  enableUnlink,
  extraActions,
  newActions,
  redirectAfterDelete,

  typeInfo,
  objectType,
  foreignKey,
  
  reverseRelation,
}) => {

  const routeParams = useParams()

  const {
    currentType:localType,
    generateLocalPath,
    getType,
  } = useModelMap()

  const relatedTypeInfo = useMemo(() => typeInfo ? getType(typeInfo) : ({})
    ,[typeInfo]
  )

  const currentType = useMemo(() => objectType ? getType(objectType) : localType, [routeParams])

  const actionProps = {
    item,
    refetch,
    enableDelete,
    enableEdit,
    enableUnlink,
    enableState:false,
    short:true,
    foreignKey,
    extraActions,
    objectType :currentType.name,
    relatedType:relatedTypeInfo.name,
    redirectAfterDelete,
    reverseRelation
  }

  return (
    <Card
      className={
        [
        //styles[baseClassName],
          baseClassName,
          //'y-red b-y',
          className
        ].filter(e => e).join(' ')
      }
      compact
      id={ id }
      style={ style }
      backFaceClassName='y-paragraph b-y'
      backFace={
        item.id &&
          <Card.Section>
            <div>
              <pre className='s-2 k-s c-x x-background'>{ JSON.stringify(item, null, 2) }</pre>
            </div>
          </Card.Section>
      }
    >
      { (typeInfo || (foreignKey && currentType)) &&
        <Card.Section className='y-background b-dark-y s-1 k-s'>
          <div>
            { foreignKey ?
              <span
                className='x-subtitle c-x'
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <span>
                  { 'Type' }
                  &nbsp;
                </span>
                <TypeButton
                  typename={ reverseRelation ? relatedTypeInfo.name : currentType.name }
                  className='yib s-2 k-s'
                />
                <span>
                  &nbsp;
                  {'linked from'}
                  &nbsp;
                </span>
                <TypeButton
                  typename={ reverseRelation ? currentType.name : relatedTypeInfo.name }
                  itemKey={ foreignKey }
                  //item={ item }
                  className='yib s-2 k-s'
                />
              </span>
              : <TypeButton
                typename={ item.__typename || typeInfo }
                className='s-1 k-s'
                /> }
          </div>
        </Card.Section>
      }
      { !item.id &&
        <>
          <Card.Section className='main'>
            <Heading
              heading='Empty'
              subtitle={`Empty ${currentType.name}. You can create one here.` }
              subtitleClassName='s-1 k-s'
            >
            </Heading>

          </Card.Section>
          <Card.Section>
            <Button.Group
              independent
              className='s-2 k-s'
              style={{ justifyContent: 'flex-end' }}
            >
              { newActions ? newActions :
              <Link to={ generateLocalPath('new', { type: relatedTypeInfo.baseUrl }) }>
                  <Button className='x-orange'>
                  {`New ${typeInfo}`}
                </Button>
                </Link>
              }
            </Button.Group>
          </Card.Section>
        </>
      }
      { item.id &&
        <>
          { children }
          { item._state &&
            <>
              <Card.Divider/>
              <Card.Section className='b-dark-y'>
                <ObjectState
                  className='s-1 k-s'
                  item={ item }
                  accordionDefaultIsOpen={ false }
                  min
                >
                </ObjectState>
              </Card.Section>
            </>
          }
          <Card.Section>
            <Button.Group
              independent
              className='s-2 k-s'
              style={{ justifyContent: 'flex-end' }}
            >
              <SingleActions
                { ...actionProps }
              />
            </Button.Group>
          </Card.Section>
        </>
      }
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
  item:PropTypes.object,

  /**
   * the function that fetches the data for the component after every change
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
   *  Whether to display the unlink action
   */
  enableUnlick:PropTypes.bool,

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
   *  replace the object actions with new form when the object is new (when the Card is empty)
   */
  newActions:PropTypes.node,

  /**
   *  Whether to redirect to the list after deletion. This is only needed in singleviews
   */
  redirectAfterDelete:PropTypes.bool,

  /**
   * Whether to display type info
   */
  typeInfo:PropTypes.bool,

  /**
   * If this is displayed in the context of a fk, please enter here the foreign key from the current type
   */
  foreignKey:PropTypes.string,

  /**
   * Whether we are wish to unlink from inside this type instead of the opposite
   */
  reverseRelation:PropTypes.bool,

  /**
   * This overloads the automatic detection of the type. Use this only if the card is display outside of its `/map/Type`
   */
  objectType:PropTypes.string,


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

ObjectCard.defaultProps = {
  typeInfo:false,
  item    :{},
}

ObjectCard.Section = Card.Section
ObjectCard.Divider = Card.Divider

export default ObjectCard

/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Button, Accordion, Label, DotInfo } from 'ds-core'
import { Link, useParams } from 'react-router-dom'


import { useModelMap } from '../Context'
//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

import C from 'ui/cssClasses'

/* Relative imports
   import styles from './object_state.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./object_state.scss')
}

const baseClassName = 'object_state'


/**
 * Use `ObjectState` to
 * Has color `x`
 */
const ObjectState = ({
  id,
  className,
  style,

  item,
  itemId:userItemId,

  itemState,
  simple,
  accordionMin,
  accordionDefaultIsOpen,
  min,
}) => {
  const itemId = item ? item.id : userItemId

  const routeParams = useParams()

  const {
    currentType:localType,
    generateLocalPath,
    getType
  } = useModelMap()

  const {
    warnings:JSONWarnings,
    errors:JSONErrors,
    valid:JSONValid,
    isValid
  } = itemState || item._state || {}

  const warnings = JSONWarnings && JSONWarnings.length && JSON.parse(JSONWarnings)
  const valid = JSONValid && JSONValid.length && JSON.parse(JSONValid)
  const errors = JSONErrors && JSONErrors.length && JSON.parse(JSONErrors)

  const warningCount = useMemo(() => Object.keys(warnings || {}).reduce((a, e) => {
    return a + warnings[e].length
  }, 0),
  [warnings])

  const validCount = useMemo(() => Object.keys(valid || {}).reduce((a, e) => {
    return a + valid[e].length
  }, 0),
  [valid])

  const errorCount = useMemo(() => Object.keys(errors|| {}).reduce((a, e) => {
    return a + errors[e].length
  }, 0),
  [errors])

  const contentMap = useMemo(() => [
    {
      content :errors,
      color   :'error',
      count   :errorCount,
      plural  :'errors',
      singular:'error',
    },
    {
      content :warnings,
      color   :'warning',
      count   :warningCount,
      plural  :'warnings',
      singular:'warning',
    },
    {
      content :valid,
      color   :'success',
      count   :validCount,
      plural  :' passed tests',
      singular:' passed test',
    }
  ], [errors, warnings, valid]
  )

  if (simple) {
    const linkToView = itemId ? generateLocalPath(
      'singleAlt',
      {
        ...routeParams,
        guid:itemId,
        type:localType.baseUrl,
        view:'state'
      }
    ) : ''


    return (
      <Link to={ linkToView }>
        <Button
          compact
          className={
            [
              //styles[baseClassName],
              baseClassName,
              'x-background',
              //simple && C.simple,
              className
            ].filter(e => e).join(' ')
          }
          id={ id }
          style={{
            whiteSpace:'nowrap',
            ...style
          }}

        >
          <span style={{ whiteSpace: 'nowrap' }}>
            { validCount &&
              <span className={
                [
                  !errorCount && 'x-success c-x',
                  errorCount && 'x-error c-x',
                ].filter(e => e).join(' ')
              }
              >
                <span className='fi s-1 k-s'>
                  { errorCount ?
                    'j' : 'k'
                  }
                </span>
                { (errorCount > 0) && `${Math.floor(100  * (validCount) / (validCount + errorCount ))}%` }
              </span>
            }
            {/* errorCount &&
              <span
                className='x-error c-x'
              >
                <span className='fi'>
                  j
                </span>
                { errorCount }
              </span>
              */}
            {(warningCount > 0) &&
              <>
                <span className='x-metadata c-x'>
                  ●
                </span>
                <span
                  className='x-warning c-x'
                >
                  { warningCount }
                </span>
              </>
            }
          </span>
        </Button>
      </Link>

    )


  }

  else return (
    <Accordion
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'ul',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      toggleStyle='plus'
      min
    >
      { contentMap.map((item, i) =>
        (item.count > 0) && <Accordion.Item
          className='message-item'
          defaultIsOpen={ accordionDefaultIsOpen }
          id={`state-${itemId.split('-')[0]}-${item.color}`}
          title={
            <p
              className={` x-${item.count ? item.color : 'grey'} c-x`}
              style={{ display: 'flex' }}
            >
              <Label
                circle
                className='s-1 k-s'
              >
                { item.count }
              </Label>
              <span>
                &nbsp;
                { (item.count > 1) ? item.plural : item.singular }
              </span>
            </p>


          }
        >
          { item.content && Object.keys(item.content).map((fieldName, i) => (
            <>
              <div
                className='field ul'
                key={ fieldName }
              >
                <span className='x-heading c-x'>
                  { fieldName }
                </span>
              </div>
              { item.content[fieldName].map((message, j) =>
                <div
                  className='message error ul'
                  key={`${item.color}-${fieldName}-${j}`}
                >
                  <span className='x-subtitle c-x'>{ message }</span>
                </div>
              ) }
            </>
          )) }

        </Accordion.Item>

      ) }
      { !min &&
        <>
          <Accordion.Item
            id='State'
            title={
              <p className='tb'>State. (Empty means broken.)</p>
            }
          >
              <pre className='s-2 k-s x-paragraph c-x' style={{ wordBreak:'break-all', overflowX:'auto', whiteSpace:'pre-wrap' }}>
              { JSON.stringify(itemState || item._state, null, 2) }
            </pre>


          </Accordion.Item>
          { item &&
            <Accordion.Item
              id='Item'
              title={
                <p className='tb'>Item. Can be empty</p>
              }
            >
              <pre className='s-2 k-s x-paragraph c-x' style={{ wordBreak:'break-all', overflowX:'auto', whiteSpace:'pre-wrap' }}>

                { JSON.stringify(item, null, 2) }
              </pre>

            </Accordion.Item>
          }
        </>}

    </Accordion>

  )}

ObjectState.propTypes = {
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
   * state of each element warning/error etc
   */
  itemState:PropTypes.string,

  /**
   * whether a class is true
   */
  simple:PropTypes.bool,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * whether to display addition info at the end
   */
  min:PropTypes.bool,
}

ObjectState.defaultProps = {
  min:false,
  item                  :{},
  accordionMin          :false,
  accordionDefaultIsOpen:true,
}

export default ObjectState

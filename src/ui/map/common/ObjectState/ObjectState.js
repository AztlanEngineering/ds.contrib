/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Label, DotInfo } from 'ds-core'


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
  itemState,
  simple
}) => {

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

  if (simple) return (
    <div
      className={
        [
        //styles[baseClassName],
          baseClassName,
          simple && C.simple,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { validCount &&
        <Label className='x-success'>
          { validCount }
        </Label>
      }
      { warningCount &&
        <Label
          className='x-warning'
          circle
        >
          { warningCount }
        </Label>
      }
      { errorCount &&
        <Label
          className='x-error'
          circle
        >
          { errorCount }
        </Label>
      }
    </div>

  )

  else return (
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
      { errors &&
        <>
          <p className='summary x-error c-x'>
            { errorCount }
            {' '}
            errors
          </p>
          { Object.keys(errors).map((e, i) => (
            <>
              <div className='field'>
                <DotInfo
                  className='y-error'
                  subtitleUpper={ false }
                >
                  { e }
                </DotInfo>
              </div>
              { errors[e].map((f, j) =>
                <div
                  className='message error'
                  key={j}
                >
                  <span>{ f }</span>
                </div>
              ) }
            </>
          )) }
        </>
      }
      { warnings &&
        <>
          <p className='summary x-warning c-x'>
            { warningCount }
            {' '}
            warnings
          </p>
          { Object.keys(warnings).map((e, i) => (
            <>
              <div className='field'>
                <DotInfo
                  className='y-warning'
                  subtitleUpper={ false }
                >
                  { e }
                </DotInfo>
              </div>
              { warnings[e].map((f, j) =>
                <div
                  className='message warning'
                  key={j}
                >
                  <span>{ f }</span>
                </div>
              ) }
            </>
          )) }
        </>
      }
      { valid &&
        <>
          <p className='summary x-success c-x'>
            { validCount }
            {' '}
            passed tests
          </p>
          { Object.keys(valid).map((e, i) => (
            <>
              <div className='field'>
                <DotInfo
                  className='y-success'
                  subtitleUpper={ false }
                >
                  { e }
                </DotInfo>
              </div>
              { valid[e].map((f, j) =>
                <div
                  className='message valid'
                  key={j}
                >
                  <span>{ f }</span>
                </div>
              ) }
            </>
          )) }
        </>
      }
    </div>
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
ObjectState.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default ObjectState

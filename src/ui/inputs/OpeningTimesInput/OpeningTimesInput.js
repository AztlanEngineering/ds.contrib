/* @fwrlines/generator-react-component 2.5.1 */
import * as React from 'react'
import { useMemo, useState, useEffect, useReducer, useCallback } from 'react'
import PropTypes from 'prop-types'

import {
  Button
} from 'ds-core'

import {
  useFormInput,
  FormContext,
  InputHolder,
} from 'ds-form'


//Intl

import { useIntl, FormattedMessage} from 'react-intl'
import messages from './messages'
//<FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './opening_times_input.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./opening_times_input.scss')
}

const baseClassName = 'opening_times_input'

const generateRandomString = () => Math.random().toString(36).substring(5)

const reducer = (state, action) =>{
  switch (action.type) {
  case 'MERGE_HOURS':
    return {
      ...state,
      hours:[
        ...state.hours,
        ...action.payload
      ]
    }
  case 'ADD_HOURS':
    return {
      ...state,
      hours:[
        ...state.hours,
        {
          id   :generateRandomString(),
          hours:action.payload,
        }
      ]
    }
  case 'REMOVE_HOURS':
    return {
      ...state,
      hours:state.hours.filter(e => e.id !== action.payload)
    }

  case 'OPEN_DAY':
    return {
      ...state,
      openedDay:action.payload,
      status   :'edit'
    }

  case 'CLOSE_FORMS':
    return {
      ...state,
      openedDay:null,
      openedNew:null,
      status   :'list'
    }

  case 'OPEN_NEW':
    return {
      ...state,
      status   :'new',
      openedNew:generateRandomString()
    }

  default:
    return state
  }

}

const Day = ({ content }) => {
  //
  return (
    <div
      {...props}
      className='day_checkbox'
    >
      <label htmlFor={ id }>{ content }</label>
      <input
        type='checkbox'
        checked={ checked }
        name={ name }
        id={ otherId }
        value={ otherValue }
        disabled={ disabled }
        checked={ value === otherValue }
      />
    </div>
  )
}


/**
 * Use `OpeningTimesInput` to
 * Has color `x`
 */
const OpeningTimesInput = ({
  id,
  className,
  style,

  valid,
  disabled,
  optional,
  aesthetic,
  compact,

  name,
  context,
  cleanup,

  label,
  labelId,
  labelClassName,
  labelStyle,

  description,
  descriptionAs,
  descriptionClassName,
  descriptionStyle,

  selectableDays,
  isSelectorOpenDefault

}) => {

  const intl = useIntl()

  const dayMap = {
    '0':intl.formatMessage(messages.monday),//[0].toUppercase(),
    '1':intl.formatMessage(messages.tuesday),//[0].toUppercase(),
    '2':intl.formatMessage(messages.wednesday),//[0].toUppercase(),
    '3':intl.formatMessage(messages.thursday),//[0].toUppercase(),
    '4':intl.formatMessage(messages.friday),//[0].toUppercase(),
    '5':intl.formatMessage(messages.saturday),//[0].toUppercase(),
    '6':intl.formatMessage(messages.sunday),//[0].toUppercase()
  }

  const holderProps = {
    id,
    className:[
    //styles[baseClassName],
      baseClassName,
      className
    ].filter(e => e).join(' '),
    style,

    errors,
    valid,

    disabled,
    optional,

    aesthetic,
    compact,

    //inputId,

    label,
    labelId,
    labelClassName,
    labelStyle,

    description,
    descriptionAs,
    descriptionClassName,
    descriptionStyle,
  }

  const {
    value,
    touched,
    errors,
    setInputValue,
    setInputTouched,
  } = useFormInput(name, context, cleanup)

  const [
    {
      openedNew,
      openedEdit,
      ...state
    }
    , dispatch
  ] = useReducer(reducer, {
    status:'list',
    hours :[]
  })

  useEffect(() => {
    setInputValue([
      [0, 1, 0, 3],
      [1, 3, 1, 14],
      [2, 3, 2, 14],
      [3, 3, 3, 14],
      [6, 3, 8, 19]
    ])
  }, [])

  useEffect(() => {
    if((value !== undefined) &&(value !== state.hours)) {
      setInputValue(state.hours)
    }

  }, [state.hours])

  const addHours = useCallback(hours => {
    dispatch({
      type   :'ADD_HOURS',
      payload:hours
    }
    )}, [dispatch])

  const removeHours = useCallback(id => {
    dispatch({
      type   :'REMOVE_HOURS',
      payload:id
    }
    )}, [dispatch])

  const mergeHours = useCallback(hoursList => {
    dispatch({
      type   :'MERGE_HOURS',
      payload:hoursList
    }
    )}, [dispatch])

  useEffect(() => {
    if((value !== undefined) &&(value !== state.hours)) {
      mergeHours(value)
    }
  }, [value])

  const openDay = useCallback(day => {
    dispatch({
      type   :'OPEN_DAY',
      payload:day
    })},[dispatch])

  const closeForms = useCallback(() => {
    dispatch({
      type:'CLOSE_FORMS',
    })},[dispatch])

  const openNew = useCallback(() => {
    dispatch({
      type:'OPEN_NEW',
    })}, [dispatch])

  const whichHoursOnDay = useCallback(day => state.hours.filter(
    hours => [hours[0], hours[2] % 7].includes(day)
  ), [state.hours])

  const getIdenticalDays = useCallback(currentDayHours => state.hours.filter(
    hours =>
      (hours[0] !== currentDayHours[0]) //a different day
      && (hours[1] === currentDayHours[1]) // that opens at the same time
      && ((hours[2] - hours[0]) === (currentDayHours[2] - currentDayHours[0]))//closed with the same delta
    && (hours[3] === currentDayHours[3])
  ), [state.hours])

  const addHoursToDay = useCallback(day => hours => addHours([day, ...hours]))

  return (
    <InputHolder {...holderProps}>
      {
        (state.status === 'list') && <div>
          <div>
            <h1> opening times</h1>
          </div>
          <div>
            { selectableDays?.map(dayNumber => {
              //
              const hoursOnDay = whichHoursOnDay(dayNumber)

              if ( hoursOnDay.length ) return (
                <div className='day grid'>
                  <span>
                    {dayMap[dayNumber]}
                  </span>
                  { hoursOnDay.map(hours =>
                    JSON.stringify(hours)
                  ) }
                  <Button
                    onClick={ () => openDay(dayNumber) }
                  >
                    Edit
                    {' '}
                    { dayMap[dayNumber] }
                  </Button>
                </div>
              )
              else return null
            }) }
          </div>
          <div>
            <Button
              className='x-primary'
              icon='+'
              iconSide='r'
              onClick={ openNew }
            >
              Add new schedule
            </Button>
          </div>
        </div>}
      {
        (state.status === 'new') &&
          <div key={ state.openedNew }>
            <header>
              <Button
                //simple
                icon='p'
                onClick={ closeForms }
              />
            </header>
            <div>
              <h1>Add times</h1>
            </div>
          </div>
      }
      {

        (state.status === 'edit') &&
          <div>
            <header>
              <Button
                //simple
                icon='p'
                onClick={ closeForms }
              />
            </header>

            <div className='day grid'>
              <span>
                {dayMap[state.openedDay]}
              </span>
              <ul>
                { whichHoursOnDay(state.openedDay).map(hours =>{
                      const identicalTimes = getIdenticalDays(hours)

                 return (<li key={ hours.join('') }>
                    {JSON.stringify(hours)}
                    <div>
                      identicaldays :
                      { identicalTimes }
                      { identicalTimes.map(e => dayMap[state.openedDay]) }
                    </div>
                  </li>)

                }) }
              </ul>
            </div>
            <div>

              <h1>
                Edit
                {' '}
                { dayMap[state.openedDay] }
              </h1>
            </div>
          </div>
      }



    </InputHolder>
  )}

OpeningTimesInput.propTypes = {
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

OpeningTimesInput.defaultProps = {
  context              :FormContext,
  cleanup              :true,
  aesthetic            :'mars',
  selectableDays       :[0,1,2,3,4,5,6],
  isSelectorOpenDefault:false
}

export default OpeningTimesInput

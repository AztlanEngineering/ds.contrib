/* @fwrlines/generator-react-component 2.8.0 */
import * as React from 'react'
import { useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

import { InputHolder, useForm, FormContextProvider, FormContext as DefaultFormContext, useFormInput } from 'ds-form'

import { DayBooleanInput } from './common'

import LocalFormContext from './Context'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './select_days_input.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./select_days_input.scss')
}

const baseClassName = 'select_days_input'

const areArraysEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)

const getValue = (val) => val ? true : false
/**
 * Use `SelectDaysInput` to
 * Has color `x`
 */
const SelectDaysInputPayload = ({
  id,
  className,
  style,
  selectableDays,
  children,

  valid,
  disabled,
  optional,
  aesthetic,
  compact,

  name,
  context,
  cleanup,

  inputId,

  label,
  labelId,
  labelClassName,
  labelStyle,

  description,
  descriptionAs,
  descriptionClassName,
  descriptionStyle,
}) => {

  const {
    value,
    touched,
    errors,
    setInputTouched,
    setInputValue,
    onToggleSingle,
    onFocus,
    onBlur
  } = useFormInput(name, context, cleanup)

  const {
    parsed,
    mergeValues,
    ...form
  } = useForm(LocalFormContext)

  const selectedDays = useMemo(() => [0,1,2,3,4,5,6].reduce((a, dayNumber) => {
    if (selectableDays.includes(dayNumber)) {
      a.push(parsed[`day-${dayNumber}`]) || false

    } else a.push(false)

    return a
  }, []), [parsed, selectableDays])

  useEffect(()=> {
    if(!areArraysEqual(value,selectedDays)) {
      setInputValue(selectedDays)
    }
  }
  , [selectedDays])

  useEffect(() => {
    if(!areArraysEqual(value,selectedDays)) {
      console.log('new value', value, selectedDays, value == selectedDays, value === selectedDays)
      const newValues = (value || [false, false, false, false, false, false, false]).reduce((a, value, index) => {
        a[`day-${index}`] = value || false
        return a
      }, {})
      mergeValues(newValues)
    }
  }, [value])

  const selectAll = useCallback(() => {
    mergeValues({
      'day-0':true,
      'day-1':true,
      'day-2':true,
      'day-3':true,
      'day-4':true,
      'day-5':true,
      'day-6':true,
    })
  }, [mergeValues])

  const unselectAll = useCallback(() => {
    mergeValues({
      'day-0':false,
      'day-1':false,
      'day-2':false,
      'day-3':false,
      'day-4':false,
      'day-5':false,
      'day-6':false,
    })
  }, [mergeValues])


  const holderProps = {
    id,
    className:[
    //styles[baseClassName],
      baseClassName,
      className
    ].filter(e => e).join(' '),
    style,

    //errors,
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

    /*suffix:value && <span>
      { value.length }
      {' '}
      permission
      { (value.length > 1) && 's' }
      {' '}
      selected
    </span>*/

  }
  return (

    <InputHolder {...holderProps}>
      <div
        className='days'
        onClick={ onBlur }
      >
        { selectableDays.map(dayNumber =>
          <DayBooleanInput
            key={ `day-${dayNumber}` }
            dayNumber={dayNumber}
          />
        ) }
      </div>

      <div className='controls uc'>
        <span onClick={ selectAll }>Select All</span>
        <span onClick={ unselectAll }>Unselect All</span>
      </div>
    </InputHolder>
  )}


const SelectDaysInput = ({formProps, children, ...props}) => {
  return (
    <FormContextProvider
      {...formProps}
      context={ LocalFormContext }
    >
      <SelectDaysInputPayload { ...props }/>
      { children }
    </FormContextProvider>


  )
}

SelectDaysInput.propTypes = {
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
  * Whether the input is valid. If a sentence, will be displayed before the description.
  */
  valid:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),

  /**
  * Whether the input is disabled. This property is applied at the wrapper level, and only if the wrapper is a fieldset
  */
  disabled:PropTypes.bool,

  /**
  * Whether the input is optional. Is considered a better practice than to mark the required fields
  */
  optional:PropTypes.bool,

  /**
  * The display style.
  */
  aesthetic:PropTypes.oneOf(['mars', 'saturn']),

  /**
  * Whether the input is compact
  */
  compact:PropTypes.bool,

  /**
   * The input name
   */
  name:PropTypes.string.isRequired,

  /**
 * The content of the label
 */
  label:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
 * Provide an HTML id to the label
 */
  labelId:PropTypes.string,

  /**
 * The html class names to be provided to the label
 */
  labelClassName:PropTypes.string,

  /**
 * The JSX-Written, css styles to apply to the label.
 */
  labelStyle :PropTypes.object,
  /**
 * The input description
 */
  description:PropTypes.string,

  /**
 * The html class names to be provided to the input description
 */
  descriptionClassName:PropTypes.string,

  /**
 * The JSX-Written, css styles to apply to the input description.
 */
  descriptionStyle:PropTypes.object,

  /**
 * Which html tag to use
 */
  descriptionAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),


}

SelectDaysInput.defaultProps = {
  selectableDays:[0,1,2,3,4,5,6],
  context       :DefaultFormContext,
  cleanup       :true,
  aesthetic     :'mars',
}

export default SelectDaysInput

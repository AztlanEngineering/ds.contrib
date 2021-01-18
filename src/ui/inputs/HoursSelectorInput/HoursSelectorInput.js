/* @fwrlines/generator-react-component 2.8.0 */
import * as React from 'react'
import { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'ds-core'
import { InputHolder, useForm, Form, FormContext as DefaultFormContext, useFormInput, useMultiForm, FormInput, } from 'ds-form'
import { useIntl, FormattedMessage } from 'react-intl'
import messages from './messages'

import LocalFormContext from './Context'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './hours_selector_input.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./hours_selector_input.scss')
}

const baseClassName = 'hours_selector_input'


const areArraysEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)
const doesExist = (a) => !(typeof a === 'undefined')

const openingAtInputName = 'opens-at'
const closingAtInputName = 'closes-at'
/**
 * Use `HoursSelectorInput` to
 * Has color `x`
 */
const HoursSelectorInputPayload = ({
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

  inputId,

  label,
  labelId,
  labelClassName,
  labelStyle,

  description,
  descriptionAs,
  descriptionClassName,
  descriptionStyle,

  defaultExtra,

  minimumOpeningHour,
  maximumOpeningHour,
  canSelectFullDay,
  step,
}) => {
  const intl = useIntl()

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

  const {
    extraInfo,
    formsInfo,
    formsIds,
    addExtraForm,
    objectsArray,
    objectsDict,
    removeLastExtraForm,
    forms,
  } = useMultiForm({
    confirmRemove:false,
    inputMap     :[],
    extra        :defaultExtra,
    Context      :LocalFormContext
  })

  useEffect(() => {
    console.log('VL', value)
  }
  , [value])

  useEffect(() => {
    if (objectsArray?.length) {
      const inputValue = []
      objectsArray.forEach(values => {
        const opensAt = values[openingAtInputName]
        const closesAt = values[closingAtInputName]
        if(doesExist(opensAt) && doesExist(closesAt)){
          inputValue.push(
            [
              Number(opensAt),
              Number(closesAt)
            ]
          )
        }
      })
      if (!areArraysEqual(inputValue, value)) {
        setInputValue(inputValue)
      }
    }
  }, [objectsArray])

  const generateOpeningTimeOptions = useCallback(
    (localMinimum, isClosingTime) => {
      var minimum, maximum

      if(minimumOpeningHour || localMinimum) minimum=Math.max(minimumOpeningHour, localMinimum)
      else minimum=0

      if(maximumOpeningHour) maximum=maximumOpeningHour
      else maximum=24

      const options = []

      options.push({
        value   :undefined,
        disabled:true,
        label   :!isClosingTime ? intl.formatMessage(messages.opensAtPlaceholder) : intl.formatMessage(messages.closesAtPlaceholder)
      })

      const canSelect24Hours = isClosingTime && canSelectFullDay && (minimum === (0 + step))

      if (canSelect24Hours) {
        options.push({
          value:-1,
          label:intl.formatMessage(messages.hours24Option),
          id   :`time-fullDay`
        })
      }

      else if(isClosingTime && canSelectFullDay) {
        options.push({
          value:-1,
          label:intl.formatMessage(messages.fullDayOption),
          id   :`time-fullday`
        })
      }



      for(let i=minimum; i<=maximum; i+=step) {
        const labelDate = new Date(0,0)
        labelDate.setMinutes(+i * 60)
        const labelString = labelDate.toTimeString().slice(0, 5)
        options.push({
          value:i,
          label:labelString,
          id   :`time-${i}`
        })
      }
      return options

    }
    , [ minimumOpeningHour, maximumOpeningHour ])



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
      { forms.map(({ methods, inputMap, _formId, prefix }, i) => {
        const localMinimum = Number(objectsDict?.[_formId]?.[openingAtInputName]) || 0
        const localMaximum = Number(objectsDict?.[_formId]?.[closingAtInputName]) || 0
        const previousObject = (i > 0) ? objectsDict[forms[i-1]._formId] || {} : null
        const previousMinimum = (i > 0) ? previousObject[closingAtInputName] ? (Number(previousObject[closingAtInputName]) + step) : (Number(previousObject[openingAtInputName]) + step * 2) : null

        return(
          <>
            <div className='row s-1'>
              <FormInput
                name={`${prefix}${openingAtInputName}`}
                key={`${prefix}${openingAtInputName}-${ previousMinimum || 'base' }`}
                options={ generateOpeningTimeOptions(previousMinimum) }
                label={ intl.formatMessage(messages.opensAtLabel) }
                type='select'
                placeholder='Blah'
                context={ LocalFormContext }
                compact
              />
              <FormInput
                name={`${prefix}${closingAtInputName}`}
                key={ `${prefix}${closingAtInputName}-${Math.max(localMinimum, previousMinimum) || 'base'}` }
                type='select'
                options={ generateOpeningTimeOptions(Math.max(localMinimum,  minimumOpeningHour, previousMinimum) + step, true) }
                label={ intl.formatMessage(messages.closesAtLabel) }
                placeholder='Blah'
                context={ LocalFormContext }
                compact
              />
              {/* JSON.stringify(objectsDict) }
          { JSON.stringify(objectsDict?.[_formId]) */}
              { !(i === 0) ?
                <Button
                  onClick={ methods.remove }
                  simple
                  className='x-paragraph xh-error'
                  icon='p'
                >
                </Button> : <Button simple>&nbsp;</Button>
              }

            </div>
            { !(formsInfo.length > 2)  && (i === (forms.length -1)) && (localMaximum !== -1) &&
              <div className='uc add-extra'>
                <Button
                  className='x-blue sm-h xs-h'
                  onClick={ addExtraForm }
                >
                  <FormattedMessage { ...messages.addHoursRangeLong }/>
                </Button>
                <Button
                  className='x-blue md-h lg-h'
                  onClick={ addExtraForm }
                >
                  <FormattedMessage { ...messages.addHoursRange }/>
                </Button>
              </div>
            }
          </>
        )}

      ) }
    </InputHolder>
  )}

const HoursSelectorInput = ({formProps, children, ...props}) => {
  return (
    <Form
      {...formProps}
      context={ LocalFormContext }
    >
      <HoursSelectorInputPayload { ...props }/>
      { children }
    </Form>


  )
}

HoursSelectorInput.propTypes = {
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

HoursSelectorInput.defaultProps = {
  context           :DefaultFormContext,
  cleanup           :true,
  aesthetic         :'mars',
  defaultExtra      :1,
  canSelectFullDay  :true,
  minimumOpeningHour:null,
  maximumOpeningHour:null,
  step              :.25,
  /* height:'2.2em',
     as:'p', */
}
/*  */
export default HoursSelectorInput

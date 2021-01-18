/* @fwrlines/generator-react-component 2.8.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { FormInput, FormContextProvider, useForm } from 'ds-form'

import FormContext from './DaysFormContext.js'

//import DayBooleanInput from './DayBooleanInput.js'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './days_form.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./days_form.scss')
}

const baseClassName = 'days_form'


/**
 * Use `DaysForm` to
 * Has color `x`
 */
const DaysFormPayload = ({
  id,
  className,
  style,
  children,

  selectableDays,
}) => {


  const form = useForm()

  return (
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
      <FormattedMessage { ...messages.dayFormLabel }/>
      { (selectableDays).map(dayNumber =>

        <DayBooleanInput
          dayNumber={dayNumber}
          key={ `day-${dayNumber}` }
        />
      )}
      { children }
    </div>
  )}

const DaysForm = (props, formProps={}) => {
  //
  return (
    <FormContextProvider
      {...formProps}
      context={ FormContext }
    >
      <DaysFormPayload { ...props }/>
    </FormContextProvider>


  )
}

DaysForm.propTypes = {
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

DaysForm.defaultProps = {
  selectableDays:[0, 1, 2, 3, 4, 5, 6 ]
  /* height:'2.2em',
     as:'p', */
}

export default DaysForm


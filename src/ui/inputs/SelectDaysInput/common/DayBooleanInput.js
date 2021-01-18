/* @fwrlines/generator-react-component 2.8.0 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'

import { useDayMap } from 'ds-core'
import { useFormInput } from 'ds-form'

import FormContext from '../Context.js'
//Intl

import { useIntl } from 'react-intl'
/*import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './day_boolean_input.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./day_boolean_input.scss')
}

const baseClassName = 'day_boolean_input'

/**
 * Use `DayBooleanInput` to
 * Has color `x`
 */
const DayBooleanInput = ({
  id,
  className,
  style,
  dayNumber,

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
  //
  const finalInputId = inputId ? inputId : `day-${dayNumber}`
  const finalInputName = name ? id : `day-${dayNumber}`

  const {
    value,
    touched,
    errors,
    setInputTouched,
    onToggleSingle,
    onFocus,
    onBlur
  } = useFormInput(finalInputName, context, cleanup)

  const dayMap = useDayMap()

  return (
    <div
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'input',
          aesthetic,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      //onFocus={ onFocus }
      onClick={ onBlur }
    >
      <input
        type={ 'checkbox' }
        id={ finalInputId }
        checked={ value && true }
        name={ finalInputName }
        onClick={ onToggleSingle }
      />
      <label
        htmlFor={ finalInputId }
        className={[
          'xs-h sm-h',
          !disabled && 'pointer'
        ].filter(e => e).join(' ')
        }
      >
        <span>
          { dayMap[dayNumber] }
        </span>

      </label>
      <label
        htmlFor={ finalInputId }
        className={[
          'md-h lg-h',
          !disabled && 'pointer'
        ].filter(e => e).join(' ')
        }
      >
        { dayMap[dayNumber].slice(0,1) }

      </label>
    </div>
  )}

DayBooleanInput.propTypes = {
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

DayBooleanInput.defaultProps = {
  context  :FormContext,
  cleanup  :true,
  aesthetic:'mars',
}

export default DayBooleanInput

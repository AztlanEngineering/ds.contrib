/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'


import { BaseHTMLCheckbox } from '../../baseInputs'

import { InputHolder, InputInside } from '../../elements'


//Intl

//import { FormattedMessage} from "react-intl";
//import messages from "./messages";
// <FormattedMessage {...messages.title} />

//Config

//import C from 'ui/cssClasses'

//Relative imports
//import styles from './checkbox.scss'
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./checkbox.scss')
}

const baseClassName = 'checkbox'


/**
 * Use `Checkbox` to
 * Has color `x` 
 */
const Checkbox = ({
  id,
  className,
  style,
  errors,
  valid,

  disabled,
  optional,

  as,
  aesthetic,
  compact,

  inputId,
  inputClassName,
  inputStyle,
  inputDisabled,

  label,
  labelId,
  labelClassName,
  labelStyle,

  description,
  descriptionAs,
  descriptionClassName,
  descriptionStyle,

  // From here these are different
  /*
  leftSide,
  rightSide,
  sidesClassName,
  sidesStyle,

  leftIcon,
  rightIcon,
  iconsClassName,
  iconsStyle,

  errorIcon,
  validIcon,
  */

  name,
  value,
  onToggleSingle,
  onBlur,
  onFocus,
}) => {
  
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

    as,
    aesthetic,
    compact,

    inputId,

    label,
    labelId,
    labelClassName,
    labelStyle,

    description,
    descriptionAs,
    descriptionClassName,
    descriptionStyle,

  }

  /*

  const insideContainerProps = {
    errors,
    valid,

    leftSide,
    rightSide,
    sidesClassName,
    sidesStyle,

    leftIcon,
    rightIcon,
    iconsClassName,
    iconsStyle,

    errorIcon,
    validIcon,

  }*/

  const inputProps = {
    id       :inputId,
    className:inputClassName,
    style    :inputStyle,
    disabled :inputDisabled,

    name,

    value,
    onChange:onToggleSingle,
    onBlur,
    onFocus,

  }

  
  return (
    <InputHolder
      { ...holderProps }
    >
        <BaseHTMLCheckbox
          { ...inputProps }
        />
    </InputHolder>
)}

Checkbox.propTypes = {
  /**
   * Provide an HTML id to the wrapper
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to the wrapper
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the wrapper.
   */
  style:PropTypes.object,

  /**
   * Whether the input is on an errors state. Will be displayed before the description.
   */
  errors:PropTypes.string,

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
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * The display style.
   */
  aesthetic:PropTypes.oneOf(['mars', 'saturn']),

  /**
   * Whether the input is compact
   */
  compact:PropTypes.bool,

  /**
   * Provide an HTML id to the input
   */
  inputId:PropTypes.string.isRequired,

  /**
   * The html class names to be provided to the input
   */
  inputClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the input.
   */
  inputStyle:PropTypes.object,

  /**
   * Whether the input is disabled. Do not apply at the same time as 'disabled'
   */
  inputDisabled:PropTypes.bool,

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

  /**
   * A text to display on the input left side
   */
  leftSide:PropTypes.string,

  /**
   * A text to display on the input right side
   */
  rightSide:PropTypes.string,

  /**
   * The html class names to be provided to the input sides
   */
  sidesClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the input sides.
   */
  sidesStyle:PropTypes.object,

  /**
   * Which icon to display on the left side of the input. Refer to "Storybook/Icons/Default" for possible choices
   */
  leftIcon:PropTypes.string,

  /**
   * Which icon to display on the right side of the input. Refer to "Storybook/Icons/Default" for possible choices. Please not that the rightIcon is superseded by the State Icon Class
   */
  rightIcon:PropTypes.string,

  /**
   * The icon to be displayed on the right side of the input when valid. Refer to "Storybook/Icons/Default" for possible choices.
   */
  validIcon:PropTypes.string,

  /**
   * The icon to be displayed on the right side of the input when invalid. Refer to"Storybook/Icons/Default" for possible choices.
   */
  errorIcon:PropTypes.string,

  /**
   * The html class names to be provided to the input icons
   */
  iconsClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the input icons.
   */
  iconsStyle:PropTypes.object,

  /**
   * The input name
   */
  name:PropTypes.string.isRequired,

  /**
   * The value of the input, for controlled inputs
   */
  value:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),

  /**
   * Which function to call on value change, for controlled inputs
   */
  onChange:PropTypes.func,

  /**
   * Which function to call on input focus
   */
  onFocus:PropTypes.func,

  /**
   * Which function to call on input blur
   */
  onBlur:PropTypes.func,
}

/*
Checkbox.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Checkbox

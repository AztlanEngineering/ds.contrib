/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { BaseCardChoice } from '../../baseInputs'

import { InputHolder } from '../../elements'


/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './card_choice.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./card_choice.scss')
}

const baseClassName = 'card_choice'


/**
 * Use `CardChoice` to
 * Has color `x`
 */
const CardChoice = ({
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

  name,
  multiple,
  options,
  other,
  otherId,

  value,
  onChange,
  onToggle,
  onFocus,
  //onBlur,

  variant,
}) => {

  const holderProps = {
    /* A) props passed
       className, */
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

    labelAs:'legend',
    // The prop labelAs is a new prop
  }


  const inputProps = {
    id       :inputId,
    className:inputClassName,
    style    :inputStyle,
    disabled :inputDisabled,

    name,
    multiple,
    options,

    other,
    otherId,

    value,
    onChange:multiple ? onToggle : onChange,
    onFocus,
    //onBlur,

    variant,

  }


  return (
    <InputHolder
      { ...holderProps }
    >
      <BaseCardChoice
        { ...inputProps }
      />
    </InputHolder>
  )}

CardChoice.propTypes = {
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
   * The input name
   */
  name:PropTypes.string.isRequired,

  /**
   * Whether multiple options are selectable (will switch from radios to checkboxes)
   */
  multiple:PropTypes.bool,

  /**
   * The input options, necessary for
   */
  options:PropTypes.arrayOf(
    PropTypes.shape({
    //id: PropTypes.string.isRequired,
      value   :PropTypes.string.isRequired,
      label   :PropTypes.node.isRequired,
      id      :PropTypes.string.isRequired,
      disabled:PropTypes.bool
    }),

  ).isRequired,

  /**
   * In case options are provided, whether we accept a custom user-defined value
   */
  /* other:PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
     ]), */

  /**
   * In case options are defined and we enable a user-defined value, let's give it an ID
   */
  //otherId:PropTypes.string,


  /**
   * The variant. Look at exact components documentation. See SVGChoice
   */
  variant:PropTypes.string,

  /**
   * The value of the input, for controlled inputs
   */
  value:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.instanceOf(Set)
  ]),

  /**
   * Which function to call on value change, for controlled inputs
   */
  onChange:PropTypes.func,

  /**
   * Which function to call on value toggle, for controlled multiple choice inputs
   */
  onToggle:PropTypes.func,

  /**
   * Which function to call on input focus
   */
  onFocus:PropTypes.func,

  /**
   * Which function to call on input blur
   */
  //onBlur:PropTypes.func,
}

CardChoice.defaultProps = {
  compact:true,
  /*
  multiple:false,
  other   :false,
  disabled:false,
  variant:'not implemented',
  */
}

export default CardChoice

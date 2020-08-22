/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
import PropTypes from 'prop-types'

import {
  InputLabel,
  InputDescription,
} from '../../common'

/* Config */
import C from 'ui/cssClasses'

/* Relative imports
   import styles from './wrapper.scss' */

import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./input_holder.scss')
}
const baseClassName = C.input // should equal input by default


/**
 * Use `InputHolder` to
 * Has color `x`
 */
const InputHolder = ({
  className,
  id,
  style,
  children,

  errors,
  valid,

  disabled,
  optional,

  as:Wrapper,
  aesthetic,
  compact,

  inputId,

  label,
  labelAs, //This is the only new prop compared to Input
  labelId,
  labelClassName,
  labelStyle,
  labelAdditionalProps, // This as well. For downshift

  description,
  descriptionAs,
  descriptionClassName,
  descriptionStyle,
}) => {
  return(
    <Wrapper
      className={[
      //styles[baseClassName],
        baseClassName,
        className,
        aesthetic,
        errors && C.error,
        valid && C.valid,
        compact && C.compact
      ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      disabled={ Wrapper === 'fieldset' ? disabled : undefined }
    >
      { label &&
        <InputLabel
          id={ labelId }
          className={ labelClassName }
          style={ labelStyle }
          htmlFor={ inputId }
          optional={ optional }
          labelAs={ labelAs }
          { ...labelAdditionalProps }
        >
          { label }
        </InputLabel>
      }
      { children }
      { (description || errors || valid) &&
        <InputDescription
          as={ descriptionAs }
          className={[
            descriptionClassName,
            errors && C.error,
            valid && C.valid
          ].filter( e => e ).join(' ') }
          style={ descriptionStyle }
        >
          {errors && (
            ['string', 'object'].includes(typeof errors) ? errors :
          <ul>
          { errors && errors.map((e, i) => <li key={i} className='x-error c-x'>{e}</li>) }
          </ul>

          ) 
          }
          { !errors && (valid || description) }
        </InputDescription>
      }
    </Wrapper>
  )
}

InputHolder.propTypes = {
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

  /**
   * The content of the label
   */
  label:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * Whether the input is on an errors state. Will be displayed before the description.
   */
  errors:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object ]),

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
   * Whether the input is compact
   */
  compact:PropTypes.bool,

  /**
   * The display style.
   */
  aesthetic:PropTypes.oneOf(['mars', 'saturn']),

  /**
   * Provide an HTML id to the input
   */
  inputId:PropTypes.string.isRequired,

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
  labelStyle:PropTypes.object,

  /**
   * The extra props passed to the label ( useful in downshift for instance) ( this prop doesn't exist in the input component )
   */
  labelAdditionalProps:PropTypes.object,

  /**
   * Which html tag to use to display the label (This prop doesnt exist in the input component)
   */
  labelAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

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

InputHolder.defaultProps = {
  labelAs:'label',
  as     :'fieldset'
  /* height:'2.2em',
     as:'p', */
}

export default InputHolder

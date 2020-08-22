/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './h_t_m_l_choice.scss' */
//import './h_t_m_l_choice.scss'

//const baseClassName = 'h_t_m_l_choice'


/**
 * Use `HTMLChoice` to
 * Has color `x`
 */
const HTMLChoice = ({
  id,
  className,
  style,

  name,
  multiple,
  options,
  disabled,

  other,
  otherId,

  value,

  ...otherProps //include synthetic even callbacks
}) => {

  const {
    onFocus:onClick,
    onChange,
  } = otherProps

  const [otherValue, setOtherValue] = useState('')

  return (
    <ul
      id={ id }
    >
      { options.map((e,i) =>
        <li
          key={ i }
          className={
            [
            //styles[baseClassName],
              className
            ].filter(e => e).join(' ')
          }
          style={ style }
          onClick={ onClick }
        >
          <input
            type={ multiple ? 'checkbox' : 'radio' }
            name={ name }
            id={ e.id }
            value={ e.value }
            disabled={ disabled || e.disabled }
            checked={ (multiple && value) ? 
                value.has(e.value) :
              value === e.value 
            }
            { ...otherProps }
          />
          <label htmlFor={ e.id }>{ e.label }</label>
        </li>
      ) }

      { !multiple && other &&
        <li
          className={
            [
            //styles[baseClassName],
              className
            ].filter(e => e).join(' ')
          }
          style={ style }
          onClick={ onClick }
        >
          <input
            type={ multiple ? 'checkbox' : 'radio' }
            name={ name }
            id={ otherId }
            value={ otherValue }
            checked={ value === otherValue }
            { ...otherProps }
          />
          <label
            htmlFor={ otherId }
            onClick={
              e => e.target.children.length && e.target.children[
                [
                  otherId,
                  'setter'
                ].filter(e => e).join('_')
              ].focus()
            }
          >
            { typeof(other) === 'string' ? other : 'Other' }
            &nbsp;
            :
            &nbsp;
            <input
              type='text'
              value={ otherValue }
              id={
                [
                  otherId,
                  'setter'
                ].filter(e => e).join('_')
              }
              onChange={ e => {
                setOtherValue(e.target.value)
                onChange(e)
              }
              }
              onFocus={ e => e.target.parentNode.click() } //TODO dubious
            />
          </label>
        </li>
      }
    </ul>
  )}

HTMLChoice.propTypes = {
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
   * Whether the input is disabled. Trumps individual options
   */
  disabled:PropTypes.bool,

  /**
   * The input name
   */
  name:PropTypes.string.isRequired,

  /**
   * Whether multiple choices are possible. Will create checkboxes rather than radios
   */
  multiple:PropTypes.bool.isRequired,

  /**
   * The input options
   */
  options:PropTypes.arrayOf(
    PropTypes.shape({
    //id: PropTypes.string.isRequired,
      value   :PropTypes.string.isRequired,
      label   :PropTypes.node.isRequired,
      id      :PropTypes.string.isRequired,
      disabled:PropTypes.bool
    }),

  ),

  /**
   * Whether we accept a custom user-defined value. Only for radios (multiple = true)
   */
  other:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),

  /**
   * In case we enable the other value, let's give it an ID. Only for radios (multiple = true)
   */
  otherId:PropTypes.string,

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

HTMLChoice.defaultProps = {
  multiple:false,
  disabled:false,
  other   :false,
  otherId :'other'
}
export default HTMLChoice

/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './base_h_t_m_l_select.scss' */

//const baseClassName = 'base_h_t_m_l_select'


/**
 * Use `BaseHTMLSelect` to
 * Has color `x`
 */
const BaseHTMLSelect = ({
  id,
  className,
  style,

  name,
  //multiple,
  options,
  disabled,

  value,

  ...otherProps
}) => {


  return (
    <select
      className={
        [
        /* styles[baseClassName],
           baseClassName, */
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      disabled={ disabled }
      name={ name }
      { ...otherProps }
    >
      { options.map((e,i) =>
      <>
          { e.label }
        <option
          key={ i }
          value={ e.value }
          selected={ value === e.value }
          disabled={ disabled || e.disabled }
          hidden={ e.hidden }
        >
          { e.label }
        </option>
      </>
      )
      }
    </select>
  )}

BaseHTMLSelect.propTypes = {
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
   * Whether the input is disabled. Trumps individual options
   */
  disabled:PropTypes.bool,
}

BaseHTMLSelect.defaultProps = {
  multiple:false,
  disabled:false,
  /* other   :false,
     height:'2.2em',
     as:'p', */
}

export default BaseHTMLSelect

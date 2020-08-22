/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports */
//import './html_input.scss'

//const baseClassName = 'html_input'


/**
 * Use `HTMLInput` to
 * Has color `x`. Look at composed inputs for props
 */
const HTMLInput = React.forwardRef((
  props

  /*{
  id,
  className,
  style,

  type,
  placeholder,
  name,
  disabled,

  value,
  onChange,
  onBlur,
}
*/
  , ref) => {

  return (
    <input
      /*
      className={
        [
        //styles[baseClassName],
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      type={ type }
      placeholder={ placeholder }
      name={ name }
      disabled={ disabled }
      value={ value }
      onChange={ onChange }
      onBlur={ onBlur }
       */
      { ...props }
      ref={ ref }
    />
  )}
)

HTMLInput.propTypes = {
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
   * The type of the input
   */
  type:PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'date',
    'datetime',
    'month',
    'tel'
  ]),

  /**
   * The input placeholder
   */
  placeholder:PropTypes.string,

  /**
   * Whether the input is disabled
   */
  disabled:PropTypes.bool,

  /**
   * The input name
   */
  name:PropTypes.string.isRequired,

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  */
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
   * Which function to call on input blur
   */
  onBlur:PropTypes.func,
}

HTMLInput.defaultProps = {
  //disabled:false //We dont set the default here as we want control at the fieldset leve
}
export default HTMLInput

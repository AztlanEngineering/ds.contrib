/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'




//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './base_h_t_m_l_checkbox.scss' */



/**
 * Use `HTMLCheckbox` to
 * Has color `x`
 */
const HTMLCheckbox = ({
  id,

  value,

  ...otherProps //include synthetic even callbacks
}) => {

  return (
    <input
      type={ 'checkbox' }
      id={ id }
      checked={ value && true }
      { ...otherProps }
    />
  )}

HTMLCheckbox.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The value of the input 
   */
  value:PropTypes.bool,

}

/*
HTMLCheckbox.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default HTMLCheckbox

/* @fwrlines/generator-react-component 2.8.0 */
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
   import styles from './select_days_input.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./select_days_input.scss')
}

const baseClassName = 'select_days_input'


/**
 * Use `SelectDaysInput` to
 * Has color `x`
 */
const SelectDaysInput = ({
  id,
  className,
  style,

  selectableDays
}) => null



SelectDaysInput.propTypes = {
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

SelectDaysInput.defaultProps = {
  selectableDays:[0,1,2,3,4,5,6]
  /* height:'2.2em',
     as:'p', */
}

export default SelectDaysInput

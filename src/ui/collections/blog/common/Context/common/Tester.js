/* @fwrlines/generator-react-component 2.4.0 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'




import Context from '../Context.js'

//Intl

/* import { FormattedMessage from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './tester.scss' */


/**
 * Use `Tester` to
 * Has color `x`
 */
const Tester = ({
  id,
  className,
  style
}) => {

  const context  = useContext(Context)

  return (
    <div
      className={
        [
        //styles[baseClassName],
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <h2>The blog context is :</h2>
      { context && Object.keys(context).map((e, i) =>
        <p>
          <strong>{ e }</strong>
          {' : '}
          { context[e] }
        </p>
      ) }
    </div>
  )}

Tester.propTypes = {
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
}

/*
Tester.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Tester

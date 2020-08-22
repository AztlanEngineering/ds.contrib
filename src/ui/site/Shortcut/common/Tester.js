/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'




//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './tester.scss' */

const baseClassName = 'tester'


/**
 * Use `Tester` to
 * Has color `x`
 */
const Tester = ({
  id,
  className,
  style
}) => {

  const [keyPressed, setKeyPressed] = useState(false)



  // If pressed key is our target key then set to true
  /*

  altKey: false
  code: "KeyA"
  ctrlKey: false
  key: "A"
  keyCode: 65
  metaKey: false
  shiftKey: true
*/

  function downHandler({ key, shiftKey, ctrlKey }) {
    console.log('DOWN', key)
    setKeyPressed(
      `${ctrlKey ? 'CTRL+':''}${shiftKey ? 'SHIFT+':''}${key}`
    )
    /*
    if (key === targetKey) {
      setKeyPressed(true);
    }*/
  }


  // If released key is our target key then set to false

  const upHandler = ({ key, ...rest }) => {
    //console.log('UP', key, rest)
    /*
    if (key === targetKey) {
      setKeyPressed(false);
    }*/
  }


  // Add event listeners

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount



  return (
    <div
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <p>Press a key or a combination of keys</p>
      { keyPressed }
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
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,
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

/*
Tester.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Tester

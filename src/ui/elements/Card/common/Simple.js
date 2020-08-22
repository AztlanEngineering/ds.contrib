/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import Section from './Section'
import Divider from './Divider'



//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

import C from 'ui/cssClasses'

/* Relative imports
   import styles from './simple.scss' */
import { isBackend } from 'ui/isBackend'

const baseClassName = 'card'

/**
 * Use `Simple` to
 * Has color `x`
 */
const Simple = ({
  id,
  className,
  style,
  children,
  as:Wrapper,

  active,
  selectable,
  basic,
  simple,

  ...otherProps
}) => {


  return (
    <Wrapper
      className={
        [
          baseClassName,
          active && C.active,
          selectable && C.selectable,
          basic && C.basic,
          simple && C.simple,
          className
        ].filter(e => e).join(' ')
      }
      id={id}
      style={style}
      { ...otherProps }
    >
      { children }
    </Wrapper>


  )}

Simple.propTypes = {
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
   * Whether the element has a full size image inside
   */
  image:PropTypes.bool,

  /**
   * Whether the card is active
   */
  active:PropTypes.bool,

  /**
   * Whether to use a "simple" style
   */
  simple:PropTypes.bool,

  /**
   * Whether to apply the "basic" style
   */
  basic:PropTypes.bool,

  /**
   * Whether the card is selectable
   */
  selectable:PropTypes.bool
}

Simple.defaultProps = {
  as:'div',
  selectable:false,
  basic     :false,
  simple    :false,
  active    :false,
  /* height:'2.2em',
     as:'p', */
}

Simple.Section = Section
Simple.Divider = Divider

export default Simple

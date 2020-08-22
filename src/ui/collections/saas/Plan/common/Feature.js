/* @fwrlines/generator-react-component 2.3.3 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import { IconList } from '@fwrlines/ds/common'

import PlanContext from '../Context'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './feature.scss' */

const baseClassName = 'feature'

const BaseComponent = IconList.Item

/**
 * Use `Feature` to
 * Has color `x`
 */
const Feature = ({
  id,
  className,
  style,
  children,

  ...props
}) => {
  const { textClassName } = useContext(PlanContext)

  return (
    <BaseComponent
      className={
        [
        //styles[baseClassName],
          baseClassName,
          textClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      icon='o'
      { ...props }
    >
      { children }

    </BaseComponent>
  )}

Feature.propTypes = {
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
}

/*
Feature.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Feature

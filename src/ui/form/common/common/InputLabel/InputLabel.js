/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import PropTypes from 'prop-types'

import {
  Label
} from '@fwrlines/ds/common'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './input_label.scss'
   import './input_label.scss' */

//const baseClassName = 'input_label'
import { FormattedMessage} from 'react-intl'
import messages from './messages'


/**
 * Use `InputLabel` to
 * Has color `x`
 */
const InputLabel = ({
  id,
  className,
  style,
  children,

  htmlFor,

  as:Wrapper,

  optional,
}) => {

  return (
    <Wrapper
      className={
        [
          /* styles[baseClassName],
           baseClassName, */
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }

      htmlFor={ (Wrapper === 'label') ? htmlFor : undefined }
    >
      { children }
      { optional &&
        <Label
          className='k-s s-2 x-link'
          simple
          style={{
            fontWeight:'normal'
          }}
        >
          (
          <FormattedMessage {...messages.optional } />
          )
        </Label>
      }
    </Wrapper>
  )}

InputLabel.propTypes = {
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
   * The html "for" property. Only valid if as = label
   */
  htmlFor:PropTypes.string,

  /**
   * Whether the input is optional. Is considered a better practice than to mark the required fields
   */
  optional:PropTypes.bool,
}

InputLabel.defaultProps = {
  as      :'label',
  optional:false,
}

export default InputLabel

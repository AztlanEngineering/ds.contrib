/* @fwrlines/generator-react-component 2.3.3 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

//Intl

import { FormattedMessage} from 'react-intl'
import messages from './messages'

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './price.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./price.scss')
}

const baseClassName = 'price'


/**
 * Use `Price` to
 * Has color `x`
 */
const Price = ({
  id,
  className,
  style,

  currency,
  price,
}) => {

  const integer = Math.floor(price)
  const decimal = Math.floor((price - integer) * 100)

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
      { price ? <>
        <div className='currency'>{ currency }</div>
        <div className='integer'>{ integer }</div>
        <div className='decimal'>
          .
          { decimal }
        </div>
        <div className='periodicity'>
          <FormattedMessage {...messages.monthly} />
        </div>
      </>:
      <div className='free'>
          <FormattedMessage {...messages.free } />
        </div>
      }

    </div>
  )}

Price.propTypes = {
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
   * The currency of the price
   */
  currency:PropTypes.string.isRequired,

  /**
   * The price
   */
  price:PropTypes.number,
}

Price.defaultProps = {
}

export default Price

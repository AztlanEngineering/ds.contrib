/* @fwrlines/generator-react-component 1.0.1 */
import * as React from 'react'
import { useState }from 'react'
import PropTypes from 'prop-types'

import { useInterval } from '@fwrlines/utils'

//import C from 'ui/cssClasses'

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./number_increase.scss')
}

const baseClassName = 'number_increase'

const NumberIncrease = ({
  id,
  className,
  style,

  number,
  duration,

  suffix,
  suffixClassName,

  as:Wrapper,
}) => {

  const interval = duration / number
  let [count, setCount] = useState(0)
  const condition = count < number

  useInterval(() => {
    setCount(count + 1)
  }, interval, condition)

  if (number < 0) {
    return null
  }
  else {
    return (
      <Wrapper
        className={
          [
            baseClassName,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
      >
        { count }
        <span className={ suffixClassName }>
          { suffix }
        </span>
      </Wrapper>
    )
  }
}

NumberIncrease.propTypes = {
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
   * The number to increase to
   */
  number:PropTypes.number.isRequired,

  /**
   * The duration of the animation
   */
  duration:PropTypes.number.isRequired,

  /**
   * This suffix, for instance a unit measure, to append to the number
   */
  suffix:PropTypes.string,

  /**
   * The class name to apply to the suffix
   */
  suffixClassName:PropTypes.string,

  /**
   * With html tag to use
   */
  as:PropTypes.string,

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['primary', 'stroke', 'flat'])
  */
}

NumberIncrease.defaultProps = {
  as:'p',
}

export default NumberIncrease

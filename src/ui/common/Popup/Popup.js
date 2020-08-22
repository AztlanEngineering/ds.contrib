/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { useDynamicPosition } from '@fwrlines/utils'

/* Config */
import C from 'ui/cssClasses'

/* Relative imports*/
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./popup.scss')
}

const baseClassName = 'popup'


/**
 * Use `Popup` to display information that finds dynamically its spot on the page
 * Has color `x`
 * it is primordial the parent element has `position relative`
 */
const Popup = ({
  id,
  className,
  style,
  children,

  isVisible,
  preferredOrder,
  offsetXPx,
  offsetYPx,
  as:Wrapper
}) => {
  const wrapperRef = useRef()
  /*
  console.log('theref', wrapperRef)
  if ( wrapperRef && wrapperRef.current ) {
    console.log('the ref exists')
    console.log( wrapperRef.current.getBoundingClientRect )
  }
  */
  /*
  useEffect(() => {
    console.log('the wrapper ref changed')
    console.log(wrapperRef)
  }, [wrapperRef])
  */

  const position = useDynamicPosition({
    popupRef:wrapperRef,
    visible :isVisible,
    offsetXPx,
    offsetYPx,
    preferredOrder,
    /* throttleMs
       nameMap */
  })

  return (
    <Wrapper
      className={
        [
        //styles[baseClassName],
          baseClassName,
          isVisible && C.visible,
          C[position],
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      ref={ wrapperRef }
    >
      { children }
    </Wrapper>
  )}

Popup.propTypes = {
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
   * Whether the element is isVisible. Should be correlated to some state and event somewhere
   */
  isVisible:PropTypes.bool,

  /**
   * How many pixels to offset horizontally the parent to compute the position
   */
  offsetXPx:PropTypes.number,

  /**
   * How many pixels to offset vertically the parent to compute the position
   */
  offsetYPx:PropTypes.number,

  /**
   * In which order should we open the pop-up. Default is bottom, top, right, left
   */
  preferredOrder:PropTypes.arrayOf(
    PropTypes.oneOf([
      'bottom',
      'top',
      'right',
      'left'
    ])
  ),

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

Popup.defaultProps = {
  status   :'neutral',
  //height:'2.2em',
  as       :'div',
  isVisible:false,
  offsetXPx:0,
  offsetYPx:0,
}

export default Popup

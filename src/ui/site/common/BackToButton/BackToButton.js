/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import PropTypes from 'prop-types'

import {
  Link as ScrollLink,
  animateScroll as scroll
} from 'react-scroll'

import { Button } from 'ui/elements'

/* Config
   import C from 'ui/cssClasses' */

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./back_to_button.scss')
}

const baseClassName = 'back_to_button'

const BackToButton = ({
  id,
  className,
  style,
  children,

  to,
  dangerouslySetInnerHTML,
}) => {

  const wp={
    duration:800,
    delay   :0
  }
  let Wrapper, wrapper_props
  if (typeof to !== 'string') {
    Wrapper='a',
    wrapper_props={
      onClick:() => scroll.scrollToTop(wp)
    }
  }
  else {
    Wrapper=ScrollLink
    wrapper_props={
      to,
      smooth:true,
      spy   :true,
      ...wp
    }
  }

  return (
    <Wrapper
      className={
        [
          styles[baseClassName],
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      {...wrapper_props}
    >
      <Button
        dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
        icon='k'
        iconSide='l'
        className='x-grey'
      >
        { children }
      </Button>
    </Wrapper>
  )}

BackToButton.propTypes = {
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
   * The id of the anchor to scroll to (if blank will scroll back to the top)
   */
  to:PropTypes.string,
}

/*
BackToButton.defaultProps = {
  to:undefined,
}
*/

export default BackToButton

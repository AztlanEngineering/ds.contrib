/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import Context from './Context.js'

/* Config */
import C from 'ui/cssClasses'

/* Relative imports
   import styles from './slide.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./slide.scss')
}

const baseClassName = 'slide'


/**
 * Use `Slide` to
 * Has color `x`
 */
const Slide = ({
  id,
  className,
  style,
  children,

  as:Wrapper,

  index,
}) => {

  const {
    slides,
    currentSlide
  } = useContext(Context)

  const {
    id:currentSlideId
  } = currentSlide

  const {
    title,
    id:slideId,
  } = slides[index]

  const active = currentSlideId == slideId

  return (
    <Wrapper
      className={
        [
        //styles[baseClassName],
          baseClassName,
          active && C.active,
          'u1 p-u t',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { title }
      { children }
    </Wrapper>
  )}

Slide.propTypes = {
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
   * The index of this slide
   */
  index:PropTypes.number,

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

Slide.defaultProps = {
  //height:'2.2em',
  as:'div',
}

export default Slide

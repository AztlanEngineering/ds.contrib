/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link as ScrollLink } from 'react-scroll'

import C from 'ui/cssClasses'

//Relative imports
import Context from './Context'

const baseClassName = 'caret_down'

const CaretDown = ({
  id,
  className,
  style,

  destination,
  smooth,
  duration,

  icon

}) => {
  const pageContext = useContext(Context)
  return(
    <ScrollLink
      className={
        [
          baseClassName,
          'row uc',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      to={ destination + (pageContext.id ? '_' + pageContext.id : '') }
      spy={ true}
      smooth={ smooth }
      duration={ duration }
    >
      <i className={ C.icon /* fi*/ }>{ icon }</i>
    </ScrollLink>
  )
}


CaretDown.propTypes = {
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
   * Which id tag on the page is the target (without page suffix)
   */
  destination:PropTypes.string.isRequired,

  /**
   * Whether the click is animated (react-scroll)
   */
  smooth:PropTypes.bool,

  /**
   * The duration of the animation (react-scroll)
   */
  duration:PropTypes.number,

  /**
   * The icon to use (as a fontastic font letter)
   */
  icon:PropTypes.string,

}

CaretDown.defaultProps = {
  duration:900,
  animated:false,
  icon    :'j'
}

export default CaretDown

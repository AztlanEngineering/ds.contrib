/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'


import {
  Button
} from 'ui/elements'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './hamburger_icon.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./hamburger_icon.scss')
}

const baseClassName = 'hamburger'


/**
 * Use `HamburgerIcon` to display a menu toggle icon> Extra props are passed to the button container.
 * Has color `x`
 */
const HamburgerIcon = ({
  id,
  className,
  style,

  active,
  variant,
  ...otherProps
}) => {


  return (
    <Button
      className={
        [
        //styles[baseClassName],
          baseClassName,
          active && 'is-active',
          'pointer',
          '',
          variant,
          className
        ].filter(e => e).join(' ')
      }
      simple
      id={ id }
      style={ style }
      aria-label='menu'
      { ...otherProps }

    >
      <span className='hamburger-box pointer'>
        <span className='hamburger-inner pointer'></span>
      </span>
    </Button>

  )}

HamburgerIcon.propTypes = {
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
   * The height of the element
   */
  active:PropTypes.bool,

  /**
   * The selected variant. https://jonsuh.com/hamburgers/ for demos
   */
  variant:PropTypes.oneOf(['slider', 'squeeze', 'arrow'])
  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  */
}

HamburgerIcon.defaultProps = {
  active :false,
  variant:'slider',
  /* height:'2.2em',
     as:'p', */
}

export default HamburgerIcon

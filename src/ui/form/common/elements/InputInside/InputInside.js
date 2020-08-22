/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import {
  InputSide,
  InputIcon,
} from '../../common'

//Config
import C from 'ui/cssClasses'

/* Relative imports
   import styles from './inside.scss'

    import('./inside.scss' 
}
*/

import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./input_inside.scss')
}

const baseClassName = C.inside


/**
 * Use `InputInside` to
 * Has color `x`
 */
const InputInside = React.forwardRef(({
  /*id,
  className,
  style
  */
  children,

  error,
  valid,

  leftSide,
  rightSide,
  sidesClassName,
  sidesStyle,

  leftIcon,
  rightIcon,
  iconsClassName,
  iconsStyle,

  errorIcon,
  validIcon,
}, ref) => {


  return (
    <div
    /*
    className={
      [
        //styles[baseClassName],
        baseClassName,
        className
      ].filter(e => e).join(' ')
  }
     */
      className={ baseClassName }
      ref={ref}
    /* id={ id }
       style={ style } */
    >
      { leftSide &&
        <InputSide
          className={ sidesClassName }
          style={ sidesStyle }
        >
          { leftSide }
        </InputSide>
      }
      {
        leftIcon &&
          <InputIcon
            className={ iconsClassName }
            style={ iconsStyle }
            icon={ leftIcon }
          />
      }
      { children }
      {
        rightIcon &&
          <InputIcon
            className={ iconsClassName }
            style={ iconsStyle }
            icon={
              (error && errorIcon) ||
                (valid && validIcon) ||
                rightIcon }
          />
      }
      { rightSide &&
        <InputSide
          className={ sidesClassName }
          style={ sidesStyle }
        >
          { rightSide }
        </InputSide>
      }
    </div>
  )}
)

InputInside.propTypes = {

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * A text to display on the input left side (only valid for inputs assimilated to text)
   */
  leftSide:PropTypes.string,

  /**
   * A text to display on the input right side (only valid for inputs assimilated to text)
   */
  rightSide:PropTypes.string,

  /**
   * The html class names to be provided to the input sides
   */
  sidesClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the input sides.
   */
  sidesStyle:PropTypes.object,

  /**
   * Which icon to display on the left side of the input. Refer to "Storybook/Icons/Default" for possible choices
   */
  leftIcon:PropTypes.string,

  /**
   * Which icon to display on the right side of the input. Refer to "Storybook/Icons/Default" for possible choices. Please not that the rightIcon is superseded by the State Icon Class
   */
  rightIcon:PropTypes.string,

  /**
   * Whether the input is on an error state. Will be displayed before the description.
   */
  error:PropTypes.string,

  /**
   * Whether the input is valid. If a sentence, will be displayed before the description.
   */
  valid:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),

  /**
   * The icon to be displayed on the right side of the input when valid. Refer to "Storybook/Icons/Default" for possible choices.
   */
  validIcon:PropTypes.string,

  /**
   * The icon to be displayed on the right side of the input when invalid. Refer to"Storybook/Icons/Default" for possible choices.
   */
  errorIcon:PropTypes.string,

  /**
   * The html class names to be provided to the input icons
   */
  iconsClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the input icons.
   */
  iconsStyle:PropTypes.object,
}

InputInside.defaultProps = {
  validIcon:'o',
  errorIcon:'p'
  /* height:'2.2em',
     as:'p', */
}

export default InputInside

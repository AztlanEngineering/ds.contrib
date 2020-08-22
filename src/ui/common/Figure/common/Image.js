/* @fwrlines/generator-react-component 2.2.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'




//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './image.scss'
   import('./image.scss') */

//const baseClassName = 'image'


/**
 * Use `Image` to display an image. Can be passed additional props that will be forwarded to the inner `img` tag
 * Has color `x`
 */
const Image = ({
  /* id,
     className, */
  style,

  src,
  alt,
  objectFit,
  objectPosition,

  ...otherProps
}) => {


  return (
    <img
      src={src}
      alt={alt}
      style={{
        ...style,
        objectFit,
        objectPosition,
      }}
      {...otherProps}
    />
  )}

Image.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  //id: PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  //className: PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   * The image source
   */
  src:PropTypes.string.isRequired,

  /**
   * The image alt
   */
  alt:PropTypes.string.isRequired,

  /**
   * The JSX-Written, css styles to apply to the child image.
   */
  style:PropTypes.object,

  /**
   * the objectFit to be passed to the css. This is important for how the image is viewed in a responsive environment
   */
  objectFit:PropTypes.oneOf([
    'fill',
    'contain',
    'cover',
    'none',
    'scale-down'
  ]),

  /**
   * Where is the image pinned, for instance `center center` or `left bottom`
   */
  objectPosition:PropTypes.string
}

Image.defaultProps = {
  objectFit:'cover',
  objectPosition:'center center'
  /* height:'2.2em',
     as:'p', */
}

export default Image

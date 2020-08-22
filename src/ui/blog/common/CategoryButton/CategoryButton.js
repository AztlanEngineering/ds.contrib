/* @fwrlines/generator-react-component 2.4.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Button } from '@fwrlines/ds/elements'

import { BlogLink } from '../Link'
//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './category_button.scss' */
import { isBackend } from 'ui/isBackend'

const baseClassName = 'category_button'


/**
 * Use `CategoryButton` to
 * Has color `x`
 */
const CategoryButton = ({
  id,
  className,
  style,

  wrapperId,
  wrapperClassName,
  wrapperStyle,

  name,
  slug:category,
  ...otherProps
}) => {


  return (
    <BlogLink
      to='CATEGORY'
      params={{category}}
      className={ wrapperClassName }
      style={ wrapperStyle }
      id={ wrapperId }
    >
      <Button
        className={
          [
            //styles[baseClassName],
            baseClassName,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
        { ...otherProps }

      >
        { name }
      </Button>
    </BlogLink>
  )}

CategoryButton.propTypes = {
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
   * Provide an HTML id to the outer link
   */
  wrapperId:PropTypes.string,

  /**
   * The html class names to be provided to the outer link
   */
  wrapperClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the outer link
   */
  wrapperStyle:PropTypes.object,

  /**
   * The name of the category
   */
  name:PropTypes.string.isRequired,

  /**
   * The slug of the category
   */
  slug:PropTypes.string.isRequired,
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

/*
CategoryButton.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default CategoryButton

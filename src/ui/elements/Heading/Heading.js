/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import PropTypes from 'prop-types'

import { Subtitle, Label } from 'ui/common'
import C from 'ui/cssClasses'

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./heading.scss')
}

const baseClassName = 'heading'

const Heading = ({
  id,
  className,
  style,
  children,

  heading,
  headingClassName,
  headingAs:HeadingElement,
  headingStyle,
  headingProps,

  label,
  labelClassName,
  labelAs:LabelElement,
  labelStyle,
  labelProps,

  subtitle,
  subtitleClassName,
  subtitleStyle,
  subtitleProps,

  ...otherProps
}) => {

  return (
    <div
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      { ...otherProps }
    >
      { label &&
        <LabelElement
          className={
            (labelClassName ? ' ' + labelClassName : '')

          }
          style={ labelStyle }
          { ...labelProps }
        >
          { label }
        </LabelElement>
      }

      <HeadingElement
        className={
          C.content
      + (headingClassName ? ' ' + headingClassName : '')
        }
        style={ headingStyle }
        { ...headingProps }
      >
        { heading }
      </HeadingElement>

      { subtitle &&
        <Subtitle
          className={
            (subtitleClassName ? ' ' + subtitleClassName : '')
          }
    style={ subtitleStyle }
          { ...subtitleProps }
        >
          { subtitle }
        </Subtitle>
      }
      { children }
    </div>
  )}

Heading.propTypes = {
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
   * The heading text
   */
  heading:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,

  /**
   * The node to display the heading with
   */
  headingAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * The heading html class
   */
  headingClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  headingStyle:PropTypes.object,

  /**
   * Extra props to pass to the heading
   */
  headingProps:PropTypes.object,

  /**
   * the Label
   */
  label:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),

  /**
   * The label html class
   */
  labelClassName:PropTypes.string,

  /**
   * The node to display the label with
   */
  labelAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  labelStyle:PropTypes.object,

  /**
   * Extra props to pass to the label
   */
  labelProps:PropTypes.object,

  /**
   * The subtitle
   */
  subtitle:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),

  /**
   * The subtitle html class
   */
  subtitleClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  subtitleStyle:PropTypes.object,

  /**
   * Extra props to pass to the subtitle
   */
  subtitleProps:PropTypes.object,

}

Heading.defaultProps = {
  headingAs        :'p',
  headingProps     :{},
  subtitleClassName:'r-sm',
  subtitleProps    :{},
  labelAs          :Label,
  labelClassName   :'ls s-1',
  labelProps       :{},
}

export default Heading

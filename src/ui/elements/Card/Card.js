/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'


import C from 'ui/cssClasses'

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./card.scss')
}
import {
  Section,
  Divider,
  Simple as BaseCard,
  Group
} from './common'

//const baseClassName = 'card' //Provided by the simple card

const Card = ({
  id,
  className,
  style,
  children,

  wrapperClassName,
  wrapperId,
  wrapperStyle,

  basic,
  simple,
  selectable,
  active,
  onClick,

  backFace,
  backFaceClassName,

  ...otherProps
}) => {

  const [isFlipped, setFlip] = useState(false)
  const flipCard = () => setFlip(!isFlipped)
  const flipper = backFace &&
    <span
      className='flip fi fi-icon'
      onClick={ flipCard }
    >
      i
    </span>

  const cardProps = {

    active,
    selectable,
    basic,
    simple,
    onClick,
  }

  return (
    <div
      className={
        [
          'scene',
          wrapperClassName
        ].filter(e => e).join(' ')
      }
      id={wrapperId}
      style={wrapperStyle}
      { ...otherProps }
    >
      <div
        className={
          [
            C.ensemble,
            isFlipped && 'flipped',
          ].filter(e => e).join(' ')
        }
      >
        <BaseCard
          { ...cardProps }
          className={
            [
              backFace && 'front-face',
              className
            ].filter(e => e).join(' ')
          }
          onClick={onClick}
          style={style}
          id={ id }
        >
          { backFace && flipper}
          { children }
        </BaseCard>
        { backFace &&
          <BaseCard
            { ...cardProps }
            className={
              [
                'back-face',
                backFaceClassName || className
              ].filter(e => e).join(' ')
            }
            id={id}
            onClick={onClick}
            style={style}
          >
            { flipper }
            { backFace }
          </BaseCard>
        }
      </div>
    </div>
  )}

Card.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * Provide an HTML id to this wrapper of this element
   */
  wrapperId:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The html class names to be provided to the wrapper of this element
   */
  wrapperClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to this element.
   */
  style:PropTypes.object,

  /**
   * The JSX-Written, css styles to apply to the wrapper of this element.
   */
  wrapperStyle:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   *  The children JSX for the back face
   */
  backFace:PropTypes.node,

  /**
   * The html class names to be provided to this element
   */
  backFaceClassName:PropTypes.string,

  /**
   * Whether the element has a full size image inside
   */
  image:PropTypes.bool,

  /**
   * What to do when the card is clicked
   */
  onClick:PropTypes.func,

  /**
   * Whether the card is active
   */
  active:PropTypes.bool,

  /**
   * Whether to use a "simple" style
   */
  simple:PropTypes.bool,

  /**
   * Whether to apply the "basic" style
   */
  basic:PropTypes.bool,

  /**
   * Whether the card is selectable
   */
  selectable:PropTypes.bool
}

Card.defaultProps = {
  selectable:false,
  active    :false,
}

Card.Section = Section
Card.Divider = Divider
Card.Group = Group

export default Card

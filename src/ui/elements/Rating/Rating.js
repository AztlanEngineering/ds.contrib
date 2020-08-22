/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import PropTypes from 'prop-types'



import C from 'ui/cssClasses'

/* Relative imports */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./rating.scss')
}

const baseClassName = 'rating'
const starsClassName = 'stars'

const Rating = ({
  id,
  className,
  style,

  title,
  content,
  name,
  source,

  rating,
  scale,
  emptyStars,

  as:Element,

  animated,

  TEXT,
}) => {

  const noStarChar = emptyStars ? 's':'S' //Depending on the font

  return (
    <Element
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >

      <p className={ starsClassName + ' fi' + (animated ? ' ' + C.anim : '')}>
        <span className='fp'>
          {rating}
          {' '}
        </span>
        { [...Array(scale)].map((e,i) =>
          i < rating ? <span className='yes'>S</span> : <span className='no'>{ noStarChar }</span>
        ) }
      </p>

      <p className={ C.title + '' }>
        { title }
      </p>

      <p className={ C.name + '' }>
        { TEXT.BY ? TEXT.BY : 'By ' }
        {' '}
        <span className={ C.content }>
          { name }
        </span>
      </p>

      <p className={ C.content + '' }>{ content }</p>
      { source &&
        <p className={ C.source + ' ur s-xs' }>
          <a
            href={ source }
            target='_blank'
            className='t'
            rel='nofollow'
          >
            { source }
          </a>
        </p>
      }
    </Element>

  )}

Rating.propTypes = {
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
   * The author name
   */
  author:PropTypes.string.isRequired,

  /**
   * The title of the review
   */
  title:PropTypes.string.isRequired,

  /**
   * The content of the review
   */
  content:PropTypes.string.isRequired,


  /**
   *  The rating
   */
  rating:PropTypes.number.isRequired,

  /**
   * The source of the review
   */
  source:PropTypes.string,

  /**
   * The scale
   */
  scale:PropTypes.number,

  /**
   * Whether to displayremaining starts as "empty"
   */
  emptyStars:PropTypes.boolean,


  /**
   * Whether the starts "shine"
   */
  animated:PropTypes.boolean,

  /**
   * The TEXT module
   */
  TEXT:PropTypes.object,

  /**
   * The node to display the rating as
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
}

Rating.defaultProps = {
  scale     :5,
  emptyStars:false,
  round     :true,
  animated  :true,
  as        :'div',
  TEXT      :{}
}

export default Rating

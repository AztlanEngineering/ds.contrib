/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { Subtitle } from 'ui/common'

import C from 'ui/cssClasses'

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./circle_info.scss')
}

const baseClassName = 'circle_info'

const CircleInfo = ({
  id,
  className,
  style,

  title,
  subtitle,
  link,

  image,
  imageAlt,

  circleClassName,
}) => {

  var Wrapper, wrapperArgs

  if (link){
    if(link.startsWith('/')) {
      Wrapper = Link
      wrapperArgs = {
        to:link
      }
    } else {
      Wrapper = 'a'
      wrapperArgs = {
        href  :link,
        target:'_blank',
        rel   :'nofollow'
      }
    }
  } else {
    Wrapper = React.Fragment
    wrapperArgs={}
  }

  return(
    <div
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <div className={
        [
          'yib wb',
          C.circle,
          circleClassName
        ].filter(e => e).join(' ')
      }
      >
        { image &&
          <img
            src={ image }
            alt={ imageAlt }
            className={
              [
                C.row,
                C.imgFit,
              ].filter(e => e).join(' ')


            }
            height='100%'
          />
        }
      </div>
      <div className={ C.content + ' yib wb' }>
        <div className='inside p05'>
          <Wrapper {...wrapperArgs}>
            <span
              className='s2 k-s fh'
            >
              { title }
            </span>
            { subtitle &&
              <Subtitle
              //upper
                className='s0 k-s'
              >
                { subtitle }
              </Subtitle>
            }
          </Wrapper>
        </div>
      </div>
    </div>
  )}

CircleInfo.propTypes = {
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
   *  The title of the element
   */
  title:PropTypes.string.isRequired,

  /**
   * The subtitle of the element
   */
  subtitle:PropTypes.string,

  /**
   * A link, on Click (internal or external)
   */
  link:PropTypes.string,

  /**
   * The url of the image
   */
  image:PropTypes.string,

  /**
   *
   */
  imageAlt:PropTypes.string,

  /**
   * The class name of the circle
   */
  circleClassName:PropTypes.string,
}

/*
CircleInfo.defaultProps = {
  status: 'neutral',
}
*/

export default CircleInfo

/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import {
  IconList
} from 'ui/common'

import {
  SideBar as BaseSideBar
} from '../../common'

import Context from './Context'


/* Config */
   import C from 'ui/cssClasses' 

/* Relative imports
   import styles from './side_bar.scss'
   import './side_bar.scss' */

//const baseClassName = 'side_bar'


/**
 * Use `SideBar` to
 * Has color `x`
 */
const SideBar = ({
  id,
  className,
  style,

  header,
  footer,

  ...otherProps
}) => {

  const {
    currentIndex,
    currentSlide,
    setNextSlide,
    setPrevSlide,
    setSlideIndex,
    isFirst,
    isLast,
    slides,
  } = useContext(Context)

  const {
    id:currentSlideId
  } = currentSlide

  return (
    <BaseSideBar
      className={
        [
        /* styles[baseClassName],
           baseClassName, */
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      { ...otherProps }
    >
      <header>{ header }</header>
      <main>
        <IconList className='u1'>
          { slides.map((e, i) =>
            <IconList.Item
              key={i}
              icon={
                (currentIndex == i) ? 'l' :
                  (i < currentIndex ) && 'o'
              }
              iconHover={
                (i < currentIndex) && 'L'
              }
              className={
                [
                  (currentIndex == i) ? 'x-primary' :
                    (i < currentIndex) ? 'x-subtitle xh-paragraph' :
                    'x-paragraph',
                  (i < currentIndex) && C.pointer,
                  'c-x'
                ].filter(e => e).join(' ')
              }
              onClick={
                (i < currentIndex) && (() => setSlideIndex(i))
              }

            >
              { e.title }
              {
              }
            </IconList.Item>
          ) }
        </IconList>
        <ul>

        </ul>
      </main>
      <footer>{ footer }</footer>
    </BaseSideBar>
  )}

SideBar.propTypes = {
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
   *  The children JSX for the header of the sidebar
   */
  header:PropTypes.node,

  /**
   *  The children JSX for the footer of the sidebar
   */
  footer:PropTypes.node,

}

/*
SideBar.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default SideBar

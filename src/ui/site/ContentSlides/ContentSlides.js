/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
import { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import { Context, Slide, HorizontalBar, SideBar } from './common'


/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './content_slides.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./content_slides.scss')
}

const baseClassName = 'content_slides'


const reducer = (state, action) => {
  switch (action.type) {
  case 'SET_SLIDE_INDEX':
    return {
      ...state,
      currentIndex:action.payload
    }

  case 'SET_CURRENT_SLIDE':
    return {
      ...state,
      ...action.payload
    }

  case 'SET_EXTRA_CONTEXT':
    return {
      ...state,
      ...action.payload
    }

  default:
    return state
  }
}

/**
 * Use `ContentSlides` to
 * Has color `x`
 */
const ContentSlides = ({
  id,
  className,
  style,
  children,

  slides,
  as:Wrapper,
}) => {
  const history = useHistory()

  const [state, dispatch] = useReducer(reducer, {
    currentIndex:0,
    currentSlide:slides[0]
    /* values :initialValues,
       touched:initialTouched, */
  })

  const {
    //currentSlide,
    currentIndex,
    isFirst,
    isLast
  } = state

  const setNextSlide = () => {
    if (!isLast) dispatch({
      type   :'SET_SLIDE_INDEX',
      payload:currentIndex + 1,
    })
  }

  const setPrevSlide = () => {
    if (!isFirst) dispatch({
      type   :'SET_SLIDE_INDEX',
      payload:currentIndex - 1,
    })
  }

  const setSlideIndex = index => {
    if (!isFirst) dispatch({
      type   :'SET_SLIDE_INDEX',
      payload:index,
    })
  }

  const setCurrentSlide = index => {
    const newSlide=slides[index]
    console.log('dispacthing new slide', index, newSlide)
    newSlide.location && history.push(newSlide.location)
    dispatch({
      type   :'SET_CURRENT_SLIDE',
      payload:{
        currentSlide:slides[index],
        isFirst     :index == 0,
        isLast      :index == (slides.length - 1)
      }
    })
  }

  useEffect(() => {
    setCurrentSlide(currentIndex)
  },
  [currentIndex]
  )

  return (
    <Context.Provider
      value={{
        slides,
        setNextSlide,
        setPrevSlide,
        setSlideIndex,
        dispatch,
        ...state
      }}
    >
      <div
        className={
          [
            //styles[baseClassName],
            baseClassName,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
      >
        { children }
      </div>
    </Context.Provider>
  )}

ContentSlides.propTypes = {
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
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The slides properties
   */
  slides:PropTypes.arrayOf(
    PropTypes.shape({
      id      :PropTypes.string.isRequired,
      title   :PropTypes.string.isRequired,
      progress:PropTypes.string.isRequired,
      location:PropTypes.string.isRequired,
    })
  ),

  /*
  )
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

ContentSlides.defaultProps = {
  status:'neutral',
  //height:'2.2em',
  as    :'div',
}

ContentSlides.Slide = Slide
ContentSlides.HorizontalBar = HorizontalBar
ContentSlides.SideBar = SideBar
ContentSlides.Context = Context

export default ContentSlides

/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useMemo, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'

import { useHistory, useRouteMatch } from 'react-router-dom'
import path from 'path'

import { Figure } from '@fwrlines/ds/common'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './album.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./album.scss')
}

const baseClassName = 'album'

const randrange = (length) => Math.floor(Math.random() * length)
const randomSort = (a,b) => 0.5 - Math.random()

const reducer = (state, action) =>{
  switch (action.type) {
  case 'SET_INITIAL_PICTURE':
    return {
      ...state,
      index       :action.payload || 0,
      currentSlide:state.slides[action.payload || 0]
    }
  case 'MOVE_FORWARD':
    return {
      ...state,
      index       :(state.index + 1) % (state.slides.length ),
      currentSlide:state.slides[(state.index + 1) % (state.slides.length )]
    }

  default:
    return state
  }

}

/**
 * Use `Album` to
 * Has color `x`
 */
const Album = ({
  id,
  className,
  style,
  as:Wrapper,

  slides:initialPictures,
  baseUrl
}) => {
  const getPath = (p) => path.join(baseUrl, p)

  const history = useHistory()
  const match = useRouteMatch(getPath('/:slideid'))

  const slideSet = useMemo(
    () => initialPictures.sort(randomSort),
    [initialPictures]
  )

  const [{
    slides,
    currentSlide,
    index
  }, dispatch] = useReducer(reducer, {
    slides      :slideSet,
    index       :0,
    currentSlide:{},
  })

  const setInitialPicture = (id=false) => {
    dispatch({
      type   :'SET_INITIAL_PICTURE',
      payload:id
    })
  }

  const moveForward = () => {
    console.log('movin frwd to', index+1, 'out of ', slides.length,'modular',  (index +1) %( slides.length ))
    dispatch({
      type:'MOVE_FORWARD',
    })
  }

  //Get initial slide
  useEffect( () => {
    const matchId = match ? match.params.slideid : null
    console.log('matched', matchId)
    const initialPictureIndex = matchId ? slides.findIndex(e => e.id === match.params.slideid) : null
    console.log('INITIAL', initialPictureIndex)
    setInitialPicture(initialPictureIndex)
  },
  []
  )


  useEffect( ()=> {
    console.log('slide chqnged', index, currentSlide)
    if (index > 0) {
      history.push(getPath(currentSlide.id))
    } else history.push(baseUrl)
  },
  [currentSlide.id]
  )


  return (
    <Wrapper
      className={
        [
        //styles[baseClassName],
          baseClassName,
          currentSlide.wrapperClassName,
          //'b-x',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <span
        className='uc u-4 p-u c-on-x md-h lg-h yb'
        id='rotationmsg'
      >
        Rotate  your device to landscape for a better experience.
      </span>
      <a
        className={[
          'pointer content',
          currentSlide.jsx ? 'jsx' : 'picture',
        ].filter(e => e).join(' ')
        }
        onClick={ moveForward }
      >
        { currentSlide.jsx ?
          currentSlide.jsx
          :
          <Figure
            src={ currentSlide.source }
            alt={currentSlide.alt}
            objectFit='contain'
          >
            <span className='c-on-x'>
              { currentSlide.caption }
            </span>
          </Figure>
        }
      </a>
    </Wrapper>
  )}

Album.propTypes = {
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
  //children: PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * The base url for the first slide
   */
  baseUrl:PropTypes.string,

  /**
   * The slides of the album
   */
  slides:PropTypes.arrayOf(PropTypes.shape({
    id              :PropTypes.string.isRequired,
    source          :PropTypes.string.isRequired,
    alt             :PropTypes.string,
    caption         :PropTypes.string.isRequired,
    wrapperClassName:PropTypes.string.isRequired,
  })).isRequired,

  /*
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

Album.defaultProps = {
  /* status: 'neutral',
     height:'2.2em', */
  baseUrl:'/',
  as     :'main',
}

export default Album

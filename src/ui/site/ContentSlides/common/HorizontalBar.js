/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import {
  ProgressBar
} from 'ui/common'

import {
  Button
} from 'ui/elements'

import {
  HorizontalBar as BaseHorizontalBar
} from '../../common'

import Context from './Context.js'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './horizontal_bar.scss'
   import './horizontal_bar.scss' */

//const baseClassName = 'horizontal_bar'


/**
 * Use `HorizontalBar` to
 * Has color `x`
 */
const HorizontalBar = ({
  id,
  className,
  style,
  progressBarClassName,
  ...otherProps
}) => {

  const {
    currentSlide,
    setNextSlide,
    setPrevSlide,
    isFirst,
    isLast
  } = useContext(Context)

  return (
    <BaseHorizontalBar
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
      <div className='yf inside u50 p-u'>
        <Button
          simple
          className='it x-subtitle xh-paragraph'
          icon='h'
          iconSide='l'
          onClick={() => setPrevSlide()}
        >
          Back
        </Button>
        <div className='row yib uc ph-u s2 ks yib'>
          <span className='fh'>
            { currentSlide.title }
          </span>
        </div>
        {/*
        <Button
          className='x-success'
          onClick={() => setNextSlide()}
        >
          Next
        </Button>
        */}
      </div>
      <ProgressBar
        current={ currentSlide.progress }
        className={ progressBarClassName }
      />
    </BaseHorizontalBar>
  )}

HorizontalBar.propTypes = {
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
   * The html class names to be provided to the progress bar. Warning : experimental api
   */
  progressBarClassName:PropTypes.string,
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

HorizontalBar.defaultProps = {
  progressBarClassName:'x-green xa xst',
  className           :'x-background b-dark-x u50'
  /* height:'2.2em',
     as:'p', */
}

export default HorizontalBar

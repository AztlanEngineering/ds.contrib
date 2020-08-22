/* @fwrlines/generator-react-component 1.1.1 */
import * as React from 'react'
import PropTypes from 'prop-types'

import {
  //useWindowSize,
  useScrollProgressSpy
} from '@fwrlines/utils'

import {
  ProgressBar
} from 'ui/common'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import './page_progress_bar.scss' */

//const baseClassName = 'page_progress_bar'


/**
 * Use `PageProgressBar`
 * See `common/ProgressBar` for bar props
 */
const PageProgressBar = ({
  /*
  id,
  className,
  style,

  rectClassName,
  strokeWidth,
  gradientMap,
  */

  initializeAt,
  spyOn,
  offsetPx,
  throttleMs=100,

  dependencies,

  ...barProps
}) => {

  const {
    progress
  } = useScrollProgressSpy({
    activeDefaultId:initializeAt,
    contentId      :spyOn,
    offsetPx,
    throttleMs,
    dependencies,
  })

  return (
    <ProgressBar
      {...barProps}
      maximum={'100'}
      current={ progress }
    />
  )}

PageProgressBar.propTypes = {

  /**
   * An html id representing the target position at module initalization
   */
  initializeAt:PropTypes.string,

  /**
   * The html ID to spy on, for instance a container of content
   */
  spyOn:PropTypes.string.isRequired,

  /**
   * Whats the minimum frequency before each update of the progress
   */
  throttleMs:PropTypes.number,

  /**
   * Offset for the page tracking, in pixels
   */
  offsetPx:PropTypes.number,

}

PageProgressBar.defaultProps = {
  strokeWidth:8,
  throttleMs :100
}

export default PageProgressBar

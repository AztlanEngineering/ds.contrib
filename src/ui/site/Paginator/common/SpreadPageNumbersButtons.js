/* @fwrlines/generator-react-component 1.1.2 */
import React from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */

import PageNumberButton from './PageNumberButton'
import JumpButton from './JumpButton'

const SpreadPageNumbersButtons = ({
  pageNumber,
  spread,
  variation,
  limit,
  ...props
}) =>{
  const followingPage = pageNumber + variation

  return (
    spread ?
      limit != followingPage
    && ( variation < 0 ?
      <>
        <SpreadPageNumbersButtons
          pageNumber={ followingPage }
          spread={ spread - 1 }
          limit={ limit }
          variation={ variation }
          { ...props }
        />
        <PageNumberButton
          pageNumber={ followingPage }
          { ...props }
        />
      </>
      :
      <>
        <PageNumberButton
          pageNumber={ followingPage }
          { ...props }
        />
        <SpreadPageNumbersButtons
          pageNumber={ followingPage }
          spread={ spread - 1 }
          limit={ limit }
          variation={ variation }
          { ...props }
        />
      </>
    )
      : (followingPage != limit) && <JumpButton/>
  )}


SpreadPageNumbersButtons.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  pageNumber:PropTypes.number,

  /**
   * The spread, a counter of the iterations to do
   */
  spread:PropTypes.number.isRequired,

  /**
   * The variation btw two pages. Can be negative
   */
  variation:PropTypes.number.isRequired,

  /**
   * Don't spread if the page matches the edge
   */
  limit:PropTypes.number.isRequired,

}

/*
SpreadPageNumbersButtons.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

export default SpreadPageNumbersButtons

/* @fwrlines/generator-react-component 1.1.2 */
import React, { useContext } from 'react'
import PropTypes from 'prop-types'


import { Link } from 'react-router-dom'

import { Button } from 'ui/elements'

import PaginatorContext from './Context.js'

/* Config
   import C from 'ui/cssClasses' */


const PageNumberButton = ({
  pageNumber,
  ...props
}) =>{
  const { buttonClassName:className, getLink } = useContext(PaginatorContext)
  return(
    <Link to={ getLink(pageNumber) }>
      <Button
        className={ className }
        { ...props }
      >
        { pageNumber }
      </Button>
    </Link>
  )}


PageNumberButton.propTypes = {
  /**
   * the number of the page
   */
  pageNumber: PropTypes.number.isRequired,

}

/*
PageNumberButton.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

export default PageNumberButton

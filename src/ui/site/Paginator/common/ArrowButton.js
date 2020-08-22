/* @fwrlines/generator-react-component 1.1.2 */
import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { Button } from 'ui/elements'

import PaginatorContext from './Context.js'


/* Config
   import C from 'ui/cssClasses' */

const ArrowButton = ({
  children,
  iconSide,
  pageNumber,
  ...props
}) =>{
  const { buttonClassName:className, getLink } = useContext(PaginatorContext)
  return(
    <Link to={ getLink(pageNumber) }>
      <Button
        className={ 'it ' + className }
        iconSide={ children && iconSide }
        { ...props }
      >
        { children }
      </Button>
    </Link>
  )
}

ArrowButton.propTypes = {
  /**
   *  The children JSX
   */
  children: PropTypes.node,

  /**
   * Which side is the button
   */
  iconSide:PropTypes.string,
  //: PropTypes.oneOf(['', ''])

  /**
   * The height of the element
   */
  pageNumber: PropTypes.number.isRequired,
}

/*
ArrowButton.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

export default ArrowButton

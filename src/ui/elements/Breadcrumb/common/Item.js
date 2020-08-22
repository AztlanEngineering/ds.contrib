/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { useIntl } from 'react-intl'


//Config
import C from 'ui/cssClasses'

//Relative imports
const baseClassName = C.item

const Item = ({
  id,
  className,
  style,
  children,

  //itemId,//Unknown
  to,
  position,


  name:userName,
}) => {
  const intl = useIntl()

  var Wrapper
  const wrapper_args = { itemProp: 'item' }
  if (!to) {
    Wrapper = 'span'
  }
  else {
    Wrapper = Link
    wrapper_args['to'] = to
  } 

  const childIsMessage = children && children.defaultMessage && true
  const userNameIsMessage = userName && userName.defaultMessage && true

  const passedChildren = childIsMessage ? intl.formatMessage(children) : children
  const passedName = userNameIsMessage ? intl.formatMessage(userName) : userName
  

  const name = passedName || passedChildren

  return (
    <li
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      itemProp='itemListElement'
      itemScope
      itemType='http://schema.org/ListItem'
    >
      <Wrapper
        { ...wrapper_args }
      >
        { passedChildren }
        { name && <meta
          itemProp='name'
          content={ name }
                      />}
        { position && <meta
          itemProp='position'
          content={ position }
                      />}
        {/* itemId && <meta
          itemProp='item'
          itemID={ itemId }
        /> */}
      </Wrapper>
    </li>
  )}

Item.propTypes = {
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
    PropTypes.node
  ]),
  //as: PropTypes.string,

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,

  /**
   * The Schema position (https://developers.google.com/search/docs/data-types/breadcrumb)
   */
  position:PropTypes.number.isRequired,

  /**
   * On click, internal link to
   */
  to:PropTypes.string,

  /**
   * The name of the breadcrumb item
   */
  name:PropTypes.string,

  /**
   *
   */
  //itemId: PropTypes.string, //Required except for last
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

/*
Item.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
}
*/

export default Item

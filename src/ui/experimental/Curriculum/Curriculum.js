/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Heading } from '@fwrlines/ds/elements'
import { Accordion } from '@fwrlines/ds/site'

import { Item } from './common'



//Intl

import { FormattedMessage} from 'react-intl'
import messages from './messages'

//Config

//import C from 'ui/cssClasses'

import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./curriculum.scss')
}

const baseClassName = 'curriculum'


/**
 * Use `Curriculum` to
 * Has color `x`
 */
const Curriculum = ({
  id,
  className,
  style,
  children,

  ...otherProps
}) => {


  return (
    <Accordion
      {...otherProps}
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
    </Accordion>
  )}

Curriculum.propTypes = {
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
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,
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
Curriculum.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

Curriculum.Item = Item

export default Curriculum

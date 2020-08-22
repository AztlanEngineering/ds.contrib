/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'


import { Button } from 'ui/elements'

import { useParams, Link } from 'react-router-dom'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './edit.scss' */
import { isBackend } from 'ui/isBackend'

import { useObjectMap } from '../../Context'

if(!isBackend) {
  import('./edit.scss')
}

const baseClassName = 'edit'


/**
 * Use `Edit` to
 * Has color `x`
 */
const Edit = ({
  id,
  className,
  style,
  item,

  //These are extracted not to be passed to the children button
  refetch,
  condition,

  ...otherProps
}) => {

  const {
    currentType,
    generateLocalPath
  } = useObjectMap()

  const routeParams = useParams()

  return (
    <Link to={ item.id && generateLocalPath(
      'single',
      {
        guid:item.id,
        ...routeParams
      }
    ) }
    >
      <Button
        className={
          [
            //styles[baseClassName],
            baseClassName,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
        { ...otherProps }
      >
        Edit
      </Button>
    </Link>
  )}

Edit.propTypes = {
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
   * A dict of values representing the current item. Must have key id
   */
  item:PropTypes.object.isRequired,
}

/*
Edit.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Edit

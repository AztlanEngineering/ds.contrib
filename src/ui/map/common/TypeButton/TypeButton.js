/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  Label
} from 'ds-core'


import { useModelMap } from '../Context'
//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './type_button.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./type_button.scss')
}

const baseClassName = 'type_button'


import { Link, useHistory, useParams } from 'react-router-dom'
/**
 * Use `TypeButton` to
 * Has color `x`
 */
const TypeButton = ({
  id,
  className,
  style,
  children,

  item,
  itemId,
  typename,
  ...otherProps
}) => {

  const {
    currentType:localType,
    generateLocalPath,
    getType
  } = useModelMap()

  const typeUrl = useMemo(() => (getType(typename)||{}).baseUrl, [typename])

  const name = useMemo(() => item ? item._string || item.name || item.id.split('-')[0] : itemId.split('-')[0],
    [item, itemId]
  )

  const link = useMemo(() => generateLocalPath(
    'single',
    {
      type:typeUrl,
      guid:item ? item.id : itemId
    }
  ),
    [typename, item, itemId]
  )

  return (
    <Link to={ link }>
      <Button
        className={
          [
            //styles[baseClassName],
            baseClassName,
            'yif',
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
        { ...otherProps }
      >
        <Label className='x-secondary s-2 k-s'>{ typename }</Label>
        <span>
        &nbsp;
          { children || name }
        </span>
      </Button>
    </Link>
  )}

TypeButton.propTypes = {
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
TypeButton.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default TypeButton

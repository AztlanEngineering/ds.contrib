/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'

import {
  Button
} from 'ds-core'


import { useModelMap } from '../Context'
import { Link, useHistory, useParams } from 'react-router-dom'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './reverse_association_button.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./reverse_association_button.scss')
}

const baseClassName = 'reverse_association_button'


/**
 * Use `ReverseAssociationButton` to
 * Has color `x`
 */
const ReverseAssociationButton = ({
  id,
  className,
  style,

  accessor,
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

  const relatedType = useMemo(() => (getType(typename)||{}), [typename])

  const typeUrl = relatedType.baseUrl

  const link = useMemo(() => generateLocalPath(
    'singleAlt',
    {
      view:`multi-${typename.toLowerCase()}`,
      type:localType.baseUrl,
      guid:itemId || item.id
    }
  ),
  [typename, itemId]
  )
  
  const value = item[accessor]

  return (
    <Link to={ link }>
      <Button
        className={
          [
          //styles[baseClassName],
            baseClassName,
            'bool',
            (value && value.length) ? 'x-violet true' : 'x-metadata false',
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
        {...otherProps}

      >
        {(value && value.length) || 0}
        {' '}
        { ((value && value.length) > 1) ?
            relatedType.plural:
            relatedType.singular
        }

      </Button>
    </Link>
  )}

ReverseAssociationButton.propTypes = {
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
ReverseAssociationButton.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default ReverseAssociationButton

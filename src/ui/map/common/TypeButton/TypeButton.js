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
  wrapGroup,
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

  const guid = useMemo(() => item ? item.id : itemId, [typename, item, itemId])

  const {
    linkToObject ,
    linkToType
  }= useMemo(() => {
    const typeLink = generateLocalPath(
      'list',
      {
        type:typeUrl
      }
    )
    if (guid) {
      return {
        linkToObject:generateLocalPath(
          'single',
          {
            type:typeUrl,
            guid
          }
        ),
        linkToType:typeLink
      }
    }
    return {
      linkToType:typeLink
    }

  }
  ,
  [typename, item, itemId]
  )

  const {
    Wrapper,
    wrapperProps
  }= useMemo(() => {
    if (wrapGroup) {
      return {
        Wrapper     :Button.Group,
        wrapperProps:{
          id,
          style,
          className:[
            baseClassName,
            'yf',
            className
          ].filter(e => e).join(' ')
        }
      }
    }
    return {
      Wrapper     :React.Fragment,
      wrapperProps:{}
    }

  }, [wrapGroup])

  return (
    <Wrapper { ...wrapperProps }>
      <Link
        to={ linkToType }
        key='link-type'
      >
        <Button
          className={
            [
            //styles[baseClassName],
              'x-secondary',
            ].filter(e => e).join(' ')
          }
          /* id={ id }
             style={ style } */
        >
          { typename }
        </Button>
      </Link>
      { guid &&
        <Link
          to={ linkToObject }
          key='link-object'
          style={ wrapGroup && { flexGrow: 99 }}
        >
          <Button
            className={
              [
                'x-grey',
                'yif',
                //styles[baseClassName],
              ].filter(e => e).join(' ')
            }
            /* id={ id }
             style={ style } */
            style={{
              whiteSpace:'nowrap',
              width     :'100%'
            }}
          >
            { children || name }
          </Button>
        </Link>}
    </Wrapper>
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
   * Whether to wrap the buttons in a button group
   */
  wrapGroup:PropTypes.bool,

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

TypeButton.defaultProps = {
  wrapGroup:true,
  /* height:'2.2em',
     as:'p', */
}
export default TypeButton

/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  Shortener,
  Popup,
  Label
} from 'ds-core'

import { useModelMap } from '../Context'

import { useTabline } from 'ui/tabs'

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
  reverseAssociation,
  itemKey,
  ...otherProps
}) => {

  const {
    currentType:localType,
    generateLocalPath,
    getType
  } = useModelMap()

  const {
    openNewTab
  } = useTabline()

  const objectType = useMemo(() => (getType((item && item.__typename) ? item.__typename : typename)||{}), [typename])

  const typeUrl = objectType.baseUrl

  const name = useMemo(() => item ?
    (item._string || item.name ||
      (item.id ? item.id.split('-')[0] :'')
    ) :
    itemId ? itemId.split('-')[0] : '',
  [item, itemId]
  )

  const guid = useMemo(() => item ? item.id : itemId, [typename, item, itemId])

  const {
    linkToObject ,
    linkToType
  }= useMemo(() => {
    const typeLink = typeUrl ? generateLocalPath(
      'list',
      {
        type:typeUrl
      }
    ) : ''

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

  const [previewDisplay, setPreviewDisplay] = useState(false)

  const openObjectTab = useCallback(() => guid && openNewTab({
    path :linkToObject,
    title:`${objectType.name}/Edit/${name}`
  }), [guid])

  const openTypeTab = useCallback(() => openNewTab({
    path :linkToType,
    title:`${objectType.name}/Table`
  }), [guid])

  return (
    <Wrapper { ...wrapperProps }>
      { reverseAssociation &&
        <Button
          compact
          className='x-red'
          disabled
        >
          R
        </Button>
      }
      <Button
        compact
        key='link-type'
        style={{ minWidth:'min-content' }}
        onClick={ openObjectTab }
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
      { guid &&
        <Button
          key='link-object'
          compact
          onClick={ openObjectTab }
          className={
            [
              'x-grey',
              'pointer',
              'yif',
              //styles[baseClassName],
            ].filter(e => e).join(' ')
          }
          /* id={ id }
             style={ style } */
          onMouseEnter={() => setPreviewDisplay(true)}
          onMouseLeave={() => setPreviewDisplay(false)}
          style={{
            whiteSpace:'nowrap',
            overflow  :'initial',
            width     :!itemKey ? '100%': undefined,
            ...(wrapGroup ? { flexGrow: 99 } : {})
          }}
        >
          <Shortener
            className=''
            countLetters
            readMore={false}
            limit='20'
          >
            { children || name }
          </Shortener>
          { item &&
            <Popup
              isVisible={previewDisplay}
              style={{ maxHeight: '200px', width: '200px', borderRadius: 'var(--r)', overflow: 'hidden', zIndex: '1', overflowY: 'scroll'}}
              preferredOrder={['right', 'bottom', 'left', 'top']}
              className='y-background b-y p-u u25'
            >
              <pre
                className='s-1 k-s ul x-paragraph c-x v0 m-v'
                style={{ lineHeight: '1.3em' }}
              >
                { JSON.stringify(item, null, 2) }
              </pre>
              {/*
                  <Image
                    src={item.fullPath}
                    alt={item.alt}
                    style={{ height: '100%', width: '100%' }}
                  />*/}
            </Popup>
          }
        </Button>
      }

      { itemKey &&
        <Button
          compact
          className={
            [
              'x-grey',
              'yif',
              //styles[baseClassName],
            ].filter(e => e).join(' ')
          }
          /* id={ id }
             style={ style } */
          disabled
        >
          <span className='f-mono'>
            .
            { itemKey }
          </span>
        </Button>
      }
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
  wrapGroup         :true,
  reverseAssociation:false,
  /* height:'2.2em',
     as:'p', */
}
export default TypeButton

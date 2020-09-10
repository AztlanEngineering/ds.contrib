/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  Shortener,
  Popup,
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
  reverseAssociation,
  itemKey,
  ...otherProps
}) => {

  const {
    currentType:localType,
    generateLocalPath,
    getType
  } = useModelMap()

  const typeUrl = useMemo(() => (getType((item && item.__typename) ? item.__typename : typename)||{}).baseUrl, [typename])

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

  return (
    <Wrapper { ...wrapperProps }>
      { reverseAssociation &&
        <Button
          className='x-red'
          disabled
        >
          R
        </Button>
      }
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
            onMouseEnter={() => setPreviewDisplay(true)}
            onMouseLeave={() => setPreviewDisplay(false)}
            style={{
              whiteSpace:'nowrap',
              overflow  :'initial',
              width     :!itemKey ? '100%': undefined
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
                className='y-background b-y p-u u1'
              >
                <pre className='s-2 k-s ul x-paragraph c-x'>
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
        </Link>}

      { itemKey &&
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

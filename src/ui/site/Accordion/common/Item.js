/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import PropTypes from 'prop-types'

import { AnimatedVCaret } from 'ui/common'
import { SimpleCard } from 'ui/elements'

import useAccordion from './useAccordion'


//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

import C from 'ui/cssClasses'

/* Relative imports
   import styles from './item.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
}

const baseClassName = 'item'


/**
 * Use `Item` to
 * Has color `x`
 */
const Item = ({
  id,
  className,
  style,
  children,

  title,

  defaultIsOpen,
  ...otherProps
}) => {
  const identifier = id || otherProps.key

  const {
    isOpen,
    toggle,
    toggleStyle,
    /* open,
       close */
  } = useAccordion(
    identifier,
    defaultIsOpen
  )

  const isOpenOrBackend = isOpen || isBackend

  return (
    <SimpleCard
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
      <SimpleCard.Section
        className={
          [
            C.pointer,
            C.title,
            toggleStyle
          ].filter(e => e).join(' ')
        }
        id={ id + 'Title' }
        onClick={ toggle }
      >
        <div className={ C.content }>
          { title }
        </div>
        <div className='icon'>
          { toggleStyle === 'caret' ?
            <AnimatedVCaret
              height='2em'
              strokeWidth='13'
              listenerId={ id + 'Title' }
              active={ isOpenOrBackend }
              style={{'--z': 'var(--dark-subtitle)'}}ding-mul
            //    className='c-on-y'
            />
            :
            <span
              className='yb mv-v v0 h2 c-x x-subtitle'
            >
              { isOpenOrBackend ?
                '-':'+'
              }
            </span>
          }
        </div>
      </SimpleCard.Section>
        <SimpleCard.Section
          hidden={ !isOpenOrBackend }
          className={
            [
              !isOpenOrBackend && 'h',
              C.content,
              's0 k-s',
              toggleStyle
            ].filter(e => e).join(' ')
          }
        >
          { children }
        </SimpleCard.Section>
    </SimpleCard>
  )}

Item.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string.isRequired,

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
   * Whether this is open
   */
  defaultIsOpen:PropTypes.bool,

  /**
   * The title of the accordion item
   */
  title:PropTypes.node,

}

Item.defaultProps = {
  defaultIsOpen:false,
  /* height:'2.2em',
     as:'p', */
}

Item.Section = SimpleCard.Section
Item.Divider = SimpleCard.Divider

export default Item

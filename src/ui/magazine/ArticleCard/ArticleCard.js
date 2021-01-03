/* @fwrlines/generator-react-component 2.5.1 */
import * as React from 'react'
import { useEffect, useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'

import { useHistory } from 'react-router-dom'

import { useIsTop } from '@fwrlines/utils'
//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './article_card.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./article_card.scss')
}

const baseClassName = 'article_card_wrapper'


/**
 * Use `ArticleCard` to
 * Has color `x`
 */
const ArticleCard = ({
  id,
  className,
  style,
  children,

  isClickable,
  href,
  delay,
  hasReadMore,
  isOpenDefault,
  isOpen:userIsOpen,
}) => {

  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()

  const [isOpen, setIsOpen] = useState(isOpenDefault)


  //const [a, setA] = useState('')
  useEffect(() => {
    if (isOpen != isOpenDefault) {
      setIsOpen(isOpenDefault)
    }
  }, [isOpenDefault])

  const history = useHistory()

  //setIsOpen(true)


  const onClickHeader = useCallback(() => {
    if(isClickable && isOpen) {
      setIsOpen(!isOpen)
      executeScroll()
      setTimeout(() => {
        history.push(href)
      }, delay)
    }
    /*
    else {
      setIsOpen(!isOpen)
    }*/
  //router.push(href)
  }, [isOpen])

  return (
    <div
      className={
        [
          //styles[baseClassName],
          baseClassName,
          isOpen && 'open',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      ref={ myRef }
    >
      <div
        className={
          [
            'article-card',
            isClickable && isOpen && 'clickable'
          ].filter(e => e).join(' ')
        }
        onClick={onClickHeader}
      >

        {JSON.stringify([
          isOpen,
          userIsOpen,
          isClickable,
          isOpenDefault
        ])}
        { children }
        { hasReadMore &&
          <div className={
            [
              'read-more'
            ].filter(e => e).join(' ')
          }
          >
            Read more
          </div>
        }
      </div>
    </div>

  )}

ArticleCard.propTypes = {
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

ArticleCard.defaultProps = {
  isClickable  :false,
  isOpenDefault:true,
  hasReadMore  :false,
  delay        :1000
}

export default ArticleCard

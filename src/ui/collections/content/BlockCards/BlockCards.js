/* @fwrlines/generator-react-component 2.3.3 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'



import { Figure } from '@fwrlines/ds/common'
import { Heading, Card } from '@fwrlines/ds/elements'
import { Page, IconCard } from '@fwrlines/ds/site'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

import C from 'ui/cssClasses'

/* Relative imports
   import styles from './block_cards.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./block_cards.scss')
}

const baseClassName = 'block_cards'


/**
 * Use `BlockCards` to
 * Has color `x`
 */
const BlockCards = ({
  id,
  className,
  style,
  children,

  headingProps,
  sectionProps,

  grid,
}) => {

  return (
    <Page.Section
      { ...sectionProps }
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'g',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <div
        className={
          [
            'g12 g6-md',
            'pt-u pl-u pr-u'
          ].filter(e => e).join(' ')
        }
      >
        <Heading { ...headingProps }/>
      </div>
      <Card.Group
        grid={ grid }
        className={
          [
            C.content,
            'pt-u pb-u',
          ].filter(e => e).join(' ')
        }
      >
        { children }

      </Card.Group>
    </Page.Section>
  )}

BlockCards.propTypes = {
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
   * Props to pass to `elements/Heading`
   */
  headingProps:PropTypes.object,

  /**
   * Props to pass to `site/Page.Section`
   */
  sectionProps:PropTypes.object,

  /**
   * Whether the cards should be displayed in a grid, on both desktop and mobile
   */
  grid:PropTypes.bool,
}

BlockCards.defaultProps = {
  figureProps:{},
  grid       :false
}

BlockCards.Card = IconCard

export default BlockCards

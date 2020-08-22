/* @fwrlines/generator-react-component 2.3.3 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Figure } from '@fwrlines/ds/common'
import { Heading } from '@fwrlines/ds/elements'
import { Page } from '@fwrlines/ds/site'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

import C from 'ui/cssClasses'

/* Relative imports
   import styles from './block_header.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./block_header.scss')
}

const baseClassName = 'block_header'


/**
 * Use `BlockHeader` to
 * Has color `x`
 */
const BlockHeader = ({
  id,
  className,
  style,
  children,

  center,

  figureProps,
  headingProps,
  sectionProps,

}) => {


  return (
    <Page.Section
      { ...sectionProps }
      className={
        [
        //styles[baseClassName],
          baseClassName,
          center && C.center,
          !center && 'g',
          //'u2 pv-u',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <div
        className={
          [
            C.content,
            !center && figureProps.src && 'g12 g7-md',
            'ph-u mb-u'
          ].filter(e => e).join(' ')
        }
      >
        <Heading { ...headingProps }/>
        { children }
      </div>
      { figureProps.src &&
        <div
          className={
            [
              C.illustration,
              !center && 'g12-sm g5-md',
              'ph-u'
            ].filter(e => e).join(' ')
          }
        >
          <Figure
            { ...figureProps }
          />
        </div>
      }
    </Page.Section>
  )}

BlockHeader.propTypes = {
  /**
   * Provide an HTML id to this element. This is passed to `site/Page.Section`
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element. This is passed to `site/Page.Section`
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element. This is passed to `site/Page.Section`
   */
  style:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node,


  /**
   * Props to pass to `common/Figure`
   */
  figureProps:PropTypes.object,

  /**
   * Props to pass to `elements/Heading`
   */
  headingProps:PropTypes.object,

  /**
   * Props to pass to `site/Page.Section`
   */
  sectionProps:PropTypes.object,

  /**
   * Whether the block is a centered block. If not it will be aligned left
   */
  center:PropTypes.bool,
}

BlockHeader.defaultProps = {
  figureProps:{},
  center     :false,
}

export default BlockHeader

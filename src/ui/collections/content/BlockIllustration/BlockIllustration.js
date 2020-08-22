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
   import styles from './block_illustration.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./block_illustration.scss')
}

const baseClassName = 'block_illustration'


/**
 * Use `BlockIllustration` to
 * Has color `x`
 */
const BlockIllustration = ({
  id,
  className,
  style,
  children,

  side,

  figureProps,
  headingProps,
  sectionProps,
}) => {

  const isLeft = side === 'left'

  return (
    <Page.Section
      { ...sectionProps }
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'g pv-u',
          C[side],
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <div
        className={
          [
            C.illustration,
            'g12-sm g6-md',
            'ph-u'
          ].filter(e => e).join(' ')
        }
      >
        <Figure
          { ...figureProps }
        />
      </div>
      <div
        className={
          [
            C.content,
            'g12 g6-md',
            'p-u mb-u'
          ].filter(e => e).join(' ')
        }
      >
        <Heading { ...headingProps }/>
        { children }
      </div>
    </Page.Section>
  )}

BlockIllustration.propTypes = {
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
   * On which side of the block is the text. If not it will be aligned left
   */
  side:PropTypes.oneOf(['left', 'right']),
}

BlockIllustration.defaultProps = {
  figureProps:{},
  side       :'left',
}

export default BlockIllustration

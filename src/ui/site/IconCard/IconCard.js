/* @fwrlines/generator-react-component 2.3.3 */
import * as React from 'react'
//import { useState } from 'react'
import PropTypes from 'prop-types'

import {
  SVG
} from 'ui/common'

import {
  Card ,
  Heading,
} from 'ui/elements'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './icon_card.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./icon_card.scss')
}

const baseClassName = 'icon_card'


/**
 * Use `IconCard` to
 * Has color `x`
 */
const IconCard = ({
  id,
  className,
  style,
  children,

  svgHeight,
  svgWidth,
  svgSprite,
  svgTarget,
  svgClassName,
  svgUseClassName,

  headingProps,
  ...otherProps
}) => {


  return (
    <Card
      className={
        [
          //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      /*
      backFace={
       <Card.Section>Hello from the other side</Card.Section>
      }
      backFaceClassName='y-primary'
       */
      { ...otherProps }
    >
      { svgTarget &&
        <Card.Section>
          <SVG
            height={ svgHeight }
            width={ svgWidth }
            target={ svgTarget }
            sprite={ svgSprite }
            className={ svgClassName }
            useClassName={ svgUseClassName }
          />
        </Card.Section>}
      <Card.Section>
        <Heading
          { ...headingProps }
        >
        </Heading>
        { children }
      </Card.Section>
    </Card>
  )}

IconCard.propTypes = {
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
   * The height of the `SVG`
   */
  svgHeight:PropTypes.string,

  /**
   * The width of the `SVG`
   */
  svgWidth:PropTypes.string,

  /**
   * The target of the `SVG`
   */
  svgTarget:PropTypes.string,

  /**
   * The target of the `SVG`
   */
  svgSprite:PropTypes.string,


  /**
   * The className of the `SVG`
   */
  svgClassName:PropTypes.string,

  /**
   * The className of the use tag
   */
  svgUseClassName:PropTypes.string,

  /**
   * The props passed to `Card`
   */
  cardProps:PropTypes.object,

  /**
   * The props passed to `Heading`
   */
  headingProps:PropTypes.object,
}

IconCard.defaultProps = {
  svgHeight   :'4em',
  svgWidth    :'4em',
  //svgTarget   :'engine',
  svgClassName:'x-primary',
  /* height:'2.2em',
     as:'p', */
}

IconCard.Section = Card.Section
IconCard.Divider = Card.Divider
IconCard.Group = Card.Group

export default IconCard

/* @fwrlines/generator-react-component 2.5.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import {
  Heading,
  Figure,
  Page
} from 'ds-core'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './default.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./default.scss')
}

const baseClassName = 'default'


/**
 * Use `Default` to
 * Has color `x`
 */
const Default = ({
  id,
  className,
  style,

  content
}) => {
  const order = content.order ? Number(content.order) : null
  console.log(order, order % 2)

  return (
    <Page.Section
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className,
          content.image ? 'l-illustrated' : 'l-center',
          (order > -1) && ((order % 2) == 0) && 'right',
          'pv-v'
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <div className='i-content ph-u'>
        <Heading
          headingClassName=''
          headingAs='h2'
          heading={ content.heading }
          subtitle={ content.subtitle }
          subtitleClassName='s2 k-s'
          labelClassName='dash'
          label={ content.alt }
        >
          <p className='s1 k-s'>
          { content.content }
          </p>
        </Heading>
      </div>
      { content.image &&
        <div className='i-illustration'>
          <Figure
            src={ content.image.fullPath }
            style={{ maxHeight: '25em', width: '100%' }}
            alt={ content.image.alt }
          />
        </div>
      }
    </Page.Section>
  )}

Default.propTypes = {
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

  /**
   * The PageContent, this can be passed raw from the DB
   */
  content:PropTypes.shape({
    heading :PropTypes.string.isRequired,
    subtitle:PropTypes.string,
    content :PropTypes.string.isRequired,
    alt     :PropTypes.string,
    image   :PropTypes.object,
  }).isRequired,

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
Default.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Default

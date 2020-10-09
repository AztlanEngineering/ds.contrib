/* @fwrlines/generator-react-component 2.5.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import {
  Heading,
  Figure,
  Button,
  Page
} from 'ds-core'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './header.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./header.scss')
}

const baseClassName = 'header'


/**
 * Use `Header` to
 * Has color `x`
 */
const Header = ({
  id,
  className,
  style,

  content
}) => {

  return (
    <Page.Section
      head
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className,
          'ui-dark',
          'l-center',
          'v4 sm-v2 pv-v'
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={{
        '--background-image':content.image ? `url('${content.image.fullPath}')`:undefined,
      }}
    >
      <div className='overlay'>
      </div>
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
          <p className='tb'>
            { content.content }
          </p>
        </Heading>
        { content.cta && 
        <div className='mv-v v2'>
          <Button className='x-green s2 k-s'>
            { content.cta }
          </Button>
        </div>
        }
      </div>
    </Page.Section>
  )}

Header.propTypes = {
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
   * The PageContent, this can be passed raw from the DB
   */
  content:PropTypes.shape({
    heading :PropTypes.string.isRequired,
    subtitle:PropTypes.string,
    content :PropTypes.string.isRequired,
    alt     :PropTypes.string,
    image   :PropTypes.object.isRequired,
    cta     :PropTypes.string.isRequired

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
Header.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Header

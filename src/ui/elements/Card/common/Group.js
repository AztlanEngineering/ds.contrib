/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { SVG } from 'ui/common'


//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

import C from 'ui/cssClasses'

/* Relative imports
   import styles from './group.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./group.scss')
}

const baseClassName = 'cards'


/**
 * Use `Group` to
 * Has color `x`
 */
const Group = ({
  id,
  className,
  style,
  children,

  as:Wrapper,

  grid,
  cardWidth,

  ...otherProps
}) => {


  return (
    <>
      { !grid &&
        <div className='row uc md-h lg-h'>
          <SVG
            height='1.2em'
            width='9em'
            source='/arrow.svg#arrow'
            viewBox='0 0 512 60'
            useClassName='x-metadata c-x'

          />
        </div>}
      <Wrapper
        className={
          [
            //styles[baseClassName],
            baseClassName,
            grid && C.grid,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={{
          '--card-width':cardWidth,
          ...style
        }}
        { ...otherProps }
      >
        { children }
      </Wrapper>
    </>
  )}

Group.propTypes = {
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
   * Whether the group appears in a grid
   */
  grid:PropTypes.bool,

  /**
   *  The card width, for instance `300px`. If `grid`  is true, this will translate into the min of the minmax
   */
  cardWidth:PropTypes.string

}

Group.defaultProps = {
  as  :'div',
  grid:false
  /* height:'2.2em',
     as:'p', */
}

export default Group

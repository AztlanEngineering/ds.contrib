/* @fwrlines/generator-react-component 1.2.2 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config
   import C from 'ui/cssClasses' */

/* Relative imports*/
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./admin_page.scss')
}

const baseClassName = 'admin_page'


/**
 * Use `AdminPage` to
 * Has color `x`
 */
const AdminPage = ({
  id,
  className,
  style
}) => {


  return (
    <div
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <h2>Welcome to the AdminPage component</h2>
    </div>
  )}

AdminPage.propTypes = {
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

/*
AdminPage.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default AdminPage

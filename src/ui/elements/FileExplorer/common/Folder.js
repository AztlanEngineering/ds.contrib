/* @fwrlines/generator-react-component 1.1.2 */
import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */

//Relative imports
import { CurrentFolderContext } from './contexts'
const baseClassName = 'folder'

/**
 * TODO State, Onchange
 */
const Folder = ({
  id,
  className,
  style,
  children,

  name,
  open
}) => {

  const [isOpen, setIsOpen] = useState(open)
  const { currentPath:parentsPath } = useContext(CurrentFolderContext)
  const currentPath = [parentsPath, name].join('/').replace('//','/')

  return (
    <li
      className={
        [
          baseClassName,
          's1 ls',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <CurrentFolderContext.Provider value={{
				  currentPath
      }}
      >
        <span
          onClick={ () => setIsOpen(!isOpen) }
          data-icon={ isOpen ? 'Y' : 'Z' }
          className={ '' }
        >
          { name }
        </span>
        <ul className={ isOpen ? '' : 'h' }>
          { children }
        </ul>
      </CurrentFolderContext.Provider>

    </li>
  )}

Folder.propTypes = {
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
   * The folder name
   */
  name:PropTypes.string.isRequired,

  /**
   * Whether the folder is open
   */
  open:PropTypes.bool,

}

Folder.defaultProps = {
  open:false,
  /* height:'2.2em',
     as:'p', */
}

export default Folder

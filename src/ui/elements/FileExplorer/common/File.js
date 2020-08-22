/* @fwrlines/generator-react-component 1.1.2 */
import React, {useContext} from 'react'
import PropTypes from 'prop-types'



import C from 'ui/cssClasses'

//Relative imports

import {
  FileExplorerContext,
  CurrentFolderContext
} from './contexts'

const baseClassName = 'file'

const File = ({
  id,
  className,
  style,

  name,
}) => {

  const {
    currentPath:parentsPath
  } = useContext(CurrentFolderContext)

  const {
    selectedFile,
    selectFile,
    selectedClassName=''
  } = useContext(FileExplorerContext)
  const fullName = [parentsPath, name].join('/')
  const current = selectedFile == fullName
  console.log(selectedFile, fullName)

  return (
    <li
      className={
        [
          baseClassName,
          's0 ls',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <span
        data-icon={'X'}
        onClick={ current ?
          () => selectFile(undefined) :
          () => selectFile(fullName)
        }
        className={ (current ? ' ' + C.selected+ ' ' + selectedClassName : ' ') }
      >
        { name }
      </span>
    </li>
  )}

File.propTypes = {
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
   * The filename
   */
  name:PropTypes.string.isRequired,

}

File.defaultProps = {
  selectedClassName:'x-indigo',
}

export default File

/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import { useState, memo } from 'react'
import PropTypes from 'prop-types'

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./file_explorer.scss')
}
import {
  FileExplorerContext,
  CurrentFolderContext
} from './common/contexts'
import { Folder, File } from './common'

const baseClassName = 'file_explorer'

/**
 * TODO State, Onchange
 */
const FileExplorer = ({
  id,
  className,
  style,
  children,

  rootName,
  rootIcon,
  rootPath,

  selectedClassName,
}) => {


  const [selectedFile, selectFile] = useState(undefined)

  return (
    <div
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { rootName &&
        <span
          data-icon={ rootIcon }
          className='tb tu tls x-metadata c-x root'
        >
          { rootName }
        </span>
      }
      <ul
        className={
          ' list'
        }
        id={ id }
        style={ style }
      >
        <FileExplorerContext.Provider value={{
	  selectedFile,
	  selectFile,
	  selectedClassName
        }}
        >
          <CurrentFolderContext.Provider value={{
				  currentPath:rootPath
          }}
          >
            { children }
          </CurrentFolderContext.Provider>
        </FileExplorerContext.Provider>
      </ul>
    </div>
  )}

FileExplorer.propTypes = {
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
   * The name of the root node
   */
  root:PropTypes.string,

  /**
   * The icon for the root directory
   */
  rootIcon:PropTypes.string,

  /**
   * The path for context (???) of the root
   */
  rootPath:PropTypes.string,

  /**
   * The html class to apply to a selected element
   */
  selectedClassName:PropTypes.string,
}

FileExplorer.defaultProps = {
  rootPath:'/',
  //selectedClassName:'x-orange',
}

FileExplorer.File = memo(File)
FileExplorer.Folder = memo(Folder)

export default FileExplorer

/* @fwrlines/generator-react-component 1.0.1 */
import * as React from 'react'
import PropTypes from 'prop-types'

/* Config
   import C from 'ui/cssClasses' */

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./wireframe.scss')
}
import { Text, Image } from './common'

const Wireframe = {
  Image,
  Text
}

export default Wireframe

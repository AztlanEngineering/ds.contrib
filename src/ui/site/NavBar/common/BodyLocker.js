/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { useLockBodyScroll } from '@fwrlines/utils'



//Intl

//import { FormattedMessage} from "react-intl";
//import messages from "./messages";
// <FormattedMessage {...messages.title} />

//Config

//import C from 'ui/cssClasses'

//Relative imports
//import styles from './body_locker.scss'
import { isBackend } from 'ui/isBackend'


const baseClassName = 'body_locker'

/**
 * Use `BodyLocker` to block body scrolls. Restablishes original style on unmount
 * 
 */
const BodyLocker = ({
}) => {
  
  useLockBodyScroll()
  
  return null
}

BodyLocker.propTypes = {
}

/*
BodyLocker.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default BodyLocker

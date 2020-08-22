/* @fwrlines/generator-react-component 1.2.2 */
import * as React from 'react'
import PropTypes from 'prop-types'

import {
  useTheme
} from '@fwrlines/utils'

/* Config
   import C from 'ui/cssClasses' */

import SiteContext from './SiteContext'

/**
 * Use `SiteContextProvider` to
 * Has color `x`
 */
const SiteContextProvider = ({
  children,
  initialTheme,
  config
}) => {
  //console.warn(9999, 'site', initialTheme)

  const theme = useTheme(initialTheme)
  /*
    {
  | userTheme,
  | preferredTheme,
  | setPreferredTheme,
  }

   */

  return (
    <SiteContext.Provider
      value={{
        ...config,
        ...theme,
      }}
    >
      { children }
    </SiteContext.Provider>
  )}

SiteContextProvider.propTypes = {
  /**
   *  The children JSX
   */
  children:PropTypes.node.isRequired,

  /**
   * Please configure
   */
  config:PropTypes.shape({
    SITE_NAME     :PropTypes.string.isRequired,
    SITE_CANONICAL:PropTypes.string.isRequired,
    FACEBOOK      :PropTypes.string,
    INSTAGRAM     :PropTypes.string,
  }).isRequired,

  /**
   * The initial theme for the website. If undefined, fallbacks on the system
   */
  initialTheme:PropTypes.string,
}

/*
SiteContextProvider.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default SiteContextProvider

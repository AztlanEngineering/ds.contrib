/* @fwrlines/generator-react-component 1.2.2 */
import * as React from 'react'
import PropTypes from 'prop-types'


import { generatePath, useLocation, useParams } from 'react-router-dom'

/* Config
   import C from 'ui/cssClasses' */

import MapContext from './Context'

/**
 * Use `MapContextProvider` to
 * Has color `x`
 */
const MapContextProvider = ({
  children,
  typeList,
  testParam,
  routes
}) => {

  const {
    type=testParam
  } = useParams()

  const currentType = typeList.find(e => e.baseUrl === type)

  const generateLocalPath = (to, params) => {
    const path = generatePath(
    routes[to],
    params
  )
    return path

  }

  return (
    <MapContext.Provider
      value={{
        routes,
        typeSlug:type,
        generateLocalPath,
        currentType
      }}
    >
      { children }
    </MapContext.Provider>
  )}

MapContextProvider.propTypes = {
  /**
   *  The children JSX
   */
  children:PropTypes.node.isRequired,

  /**
   * The list of all types
   */
  typeList:PropTypes.arrayOf(
    PropTypes.shape({
      name   :PropTypes.string.isRequired,
      urlKey :PropTypes.string.isRequired,
      baseUrl:PropTypes.string.isRequired,

    })
  ),

}

/*
MapContextProvider.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default MapContextProvider

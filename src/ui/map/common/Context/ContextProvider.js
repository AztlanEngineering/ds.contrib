import * as React from 'react'
import { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import { TableView, CardView } from '../ListViews'
import { AssociationsView, EditView } from '../SingleViews'

import { generatePath, useLocation, useParams, useRouteMatch } from 'react-router-dom'

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
    type=testParam,
    view,
    ...routeParams
  } = useParams()

  //console.log('MCP', routeParams, type, view, useParams(), useRouteMatch())

  const currentType = typeList.find(e => e.baseUrl === type)

  //console.log('INIT CTX PRO', typeList, currentType)

  const generateLocalPath = (to, params) => {
    const path = generatePath(
      routes[to],
      params
    )
    return path

  }

  const availableListViews = useMemo(() => {
    var views = []
    if (currentType.name) {
      views.push(
        {
          view     :'',
          name     :'Table',
          shortcut :'t',
          className:'x-blue',
          Component:TableView
        })

      currentType.defaultViews.card && views.push(
        {
          view     :'cards',
          name     :'Cards',
          shortcut :'c',
          className:'x-violet',
          Component:CardView
        })

    }
    return views
  }
  , [currentType.name])

  const getListViewUrl = useCallback((newView) => {
    return newView.length ? generateLocalPath(
      'listAlt',
      {
        ...routeParams,
        type,
        view:newView
      }
    ) : generateLocalPath(
      'list',
      {
        type,
        ...routeParams
      }
    )
  }, [type])

  const availableSingleViews = useMemo(() => {
    var views = []
    if (currentType.name) {
      views.push(
        {
          view     :'',
          name     :'Edit',
          shortcut :'s',
          className:'x-blue',
          Component:EditView
        })

    }

    currentType.associations && views.push(
      {
        view     :'assocations',
        name     :'Associations',
        shortcut :'a',
        className:'x-secondary',
        Component:AssociationsView

      }
    )
    return views
  }
  , [currentType.name])

  const getSingleViewUrl = useCallback((newView) => {
    return newView.length ? generateLocalPath(
      'singleAlt',
      {
        ...routeParams,
        type,
        view:newView
      }
    ) : generateLocalPath(
      'single',
      {
        type,
        ...routeParams
      }
    )
  }, [type])

  const getNewViewUrl = useCallback(() => {
    return generateLocalPath(
      'new',
      {
        ...routeParams,
        type,
        //view:newView
      }
    )
  }, [type])



  return (
    <MapContext.Provider
      value={{
        routes,
        typeSlug:type,
        generateLocalPath,
        currentType,
        availableListViews,
        availableSingleViews,
        getListViewUrl,
        getSingleViewUrl,
        getNewViewUrl
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

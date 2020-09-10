import * as React from 'react'
import { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import { TableView, CardView } from '../ListViews'
import {
  AssociationsView,
  EditView,
  StateView,
  FullView,
  MultiFormView
} from '../SingleViews'

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

  const getType = useCallback((typeName) => typeList.find(e => e.name === typeName), 
    [typeList])

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
          className:'x-azure',
          Component:TableView
        })

      currentType.defaultViews.card && views.push(
        {
          view     :'cards',
          name     :'Cards',
          shortcut :'c',
          className:'x-indigo',
          Component:CardView
        })

    }
    return views
  }
  , [currentType.name])


  const availableSingleViews = useMemo(() => {
    var views = []
    if (currentType.name) {
      views.push(
        {
          view     :'',
          name     :'Edit',
          shortcut :'e',
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

    currentType.defaultViews.state && views.push(
      {
        view     :'state',
        name     :'State',
        shortcut :'s',
        className:'x-warning',
        Component:StateView

      }
    )

    currentType.graphql.queries.FULL && views.push(
      {
        view     :'full',
        name     :'Full',
        shortcut :'f',
        className:'x-yellow',
        Component:FullView

      }
    )

    if (currentType.defaultViews.multi) {
      currentType.defaultViews.multi.forEach(e =>
      {
        views.push(
          {
            view     :`multi-${e.type.toLowerCase()}`,
            name     :`Multi ${e.type}`,
            shortcut :e.shortcut,
            className:'x-violet',
            Component:MultiFormView

          }
        )

      })
    }
    return views
  }
  , [currentType.name])



  return (
    <MapContext.Provider
      value={{
        routes,
        typeSlug:type,
        generateLocalPath,
        currentType,
        getType,
        availableListViews,
        availableSingleViews,

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

/* @fwrlines/generator-react-component 2.5.1 */
import * as React from 'react'
import { useContext, useEffect, useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import { AlgoliaProvider } from 'leaflet-geosearch'

import { SiteContext } from 'ds-core'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './location_map.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('leaflet/dist/leaflet.css')
  import('./location_map.scss')
}

const baseClassName = 'location_map'

const mapThemes = {
  'default':'https://api.mapbox.com/styles/v1/meccamico/ckflb4mmw031a19ntj0fmbv1d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWVjY2FtaWNvIiwiYSI6ImNrZmxhemd5ODB6OWczMXFoOTd4bDRuZDUifQ.V37g_kCX_acd0eQHKqhcKQ',
  'dark':'https://api.mapbox.com/styles/v1/meccamico/ckflb54q934r819mly8n1r8gk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWVjY2FtaWNvIiwiYSI6ImNrZmxhemd5ODB6OWczMXFoOTd4bDRuZDUifQ.V37g_kCX_acd0eQHKqhcKQ'
}


/**
 * Use `LocationMap` to display a map of a location ( Type ). Do not forget to wrap this into SiteContextProvider to profit from the theming.
 * Has color `x`
 */
const LocationMap = ({
  id,
  className,
  style,
  location:userLocation,
  defaultCountry,
  initialLat,
  initialLng,
  initialZoom,
  finalZoom,

  theme
}) => {
  
  const location = userLocation || {}

  const {
    preferredTheme
  } = useContext(SiteContext)

  const themeUrl = theme ? 
    mapThemes[theme] : 
    mapThemes[preferredTheme] || mapThemes['default']

  const provider = useMemo(() => new AlgoliaProvider(), [])

  const [
    position,
    setPosition
  ] = useState({
    lat :initialLat,
    lng :initialLng,
    zoom:initialZoom
  })

  const updatePosition = useCallback((newPosition) => setPosition({
    ...position,
    ...newPosition
  }), [position, setPosition])


  //const positionTuple = [ position.lat, position.lng ]


  useEffect(() => {
    const queryString = `${location.address} ${location.address2}, ${location.postcode} ${location.city}, ${location.country || defaultCountry}`
    const fetchAndUpdatePosition = async () => {
      const results = await provider.search({ query: queryString })
      console.log(7777, queryString, results)
      const place = results[0]
      updatePosition({
        lat :place.y,
        lng :place.x,
        zoom:finalZoom
      })
    }
    fetchAndUpdatePosition()


  }, [location])
  // setup

  // search

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
      {/*}
      <h1>{ JSON.stringify(location, null, 2) }</h1>
      */}
      <Map
        center={position}
        zoom={position.zoom}
      >
        <TileLayer
          tileSize={ 512 }
          zoomOffset={-1}
          attribution={'© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}
          url={ themeUrl }
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            {' '}
            <br />
            {' '}
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  )}

LocationMap.propTypes = {
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
   * The location to display. The coords will be queried from this.
   */
  location:PropTypes.shape({
    address :PropTypes.string.isRequired,
    postcode:PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    city   :PropTypes.string.isRequired,
    country:PropTypes.string
  }).isRequired,

  /**
   * The default country. If this is provided the location doesn't need a country. This amounts to a tiny optimization of the query
   */
  defaultCountry:PropTypes.string,

  /**
   * Initial latitude (before data load)
   */
  initialLat:PropTypes.number,

  /**
   * Initial longitude (before data load)
   */
  initialLng:PropTypes.number,

  /**
   * Initial zoom level (before data load)
   */
  initialZoom:PropTypes.number,

  /**
   * Final zoom level (before data load)
   */
  finalZoom:PropTypes.number,

  /**
   * A theme, will replace the site Theme
   */
  theme:PropTypes.string,


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

LocationMap.defaultProps = {
  initialLat :0,
  initialLng :0,
  initialZoom:5,
  finalZoom  :13
}

export default LocationMap

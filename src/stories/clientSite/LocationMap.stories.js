/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'
import {
  SiteContextProvider
} from 'ds-core'

import {
  ClientSiteLocationMap as LocationMap ,
} from 'ui'

/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'clientSite/LocationMap',
  component    :LocationMap,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:LocationMap.Item
  },
  decorators:[
    /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>, */
    storyfn => <SiteContextProvider>{ storyfn() }</SiteContextProvider>,
    //storyfn => <Router>{ storyfn() }</Router>,
  ]
}

/*

const storyParameters = {
 previewTabs: {
    'canvas': {
      hidden: true
    },
  }
}

 */

export const Default = () => {
  const location = {
    address :'Corso Buenos Aires 24',
    postcode:'20124',
    city    :'Milano',
    country :'Italy'
  }
  return(
    <LocationMap location={ location }></LocationMap>
  )}

//Default.parameters = storyParameters

export const Light = () => {
  const location = {
    address :'Corso Buenos Aires 24',
    postcode:'20124',
    city    :'Milano',
    country :'Italy'
  }
  return (<div className='ui-dark'>
    <LocationMap
      theme={'default'}
      location={ location }
    >
    </LocationMap>
  </div>
  )}

export const Dark = () => {
  const location = {
    address :'Corso Buenos Aires 24',
    postcode:'20124',
    city    :'Milano',
    country :'Italy'
  }
  return (<div className='ui-dark'>
    <LocationMap
      theme={'dark'}
      location={ location }
    >
    </LocationMap>
  </div>
  )}

export const InitialLatLng = () => {
  const location = {
    address :'Corso Buenos Aires 24',
    postcode:'20124',
    city    :'Milano',
    country :'Italy'
  }
  return (
    <LocationMap
      location={ location }
      initialLat={41.897598}
      initialLng={12.498408}
      initialZoom={16}
    >
    </LocationMap>

  )}

export const Children = () => {
  const location = {
    address :'Corso Buenos Aires 24',
    postcode:'20124',
    city    :'Milano',
    country :'Italy'
  }
  return (
    <LocationMap
      location={ location }
      children={
        <h1>
          This should appear on the side on desktop and under the map on mobile
        </h1>

      }
    >
    </LocationMap>

  )}



//Variant.parameters = storyParameters

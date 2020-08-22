/* @fwrlines/generator-storybook-story 1.6.0 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { CPStatusBar, SessionContextProvider } from 'ui'
//import QUERY from './graphql/query.graphql'
import { AplProvider } from 'stories/utils'
import { Router } from 'stories/utils'
/* import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'collections/cp/CPStatusBar',
  component    :CPStatusBar,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    LogoutLink      :CPStatusBar.LogoutLink,
    ConnectionStatus:CPStatusBar.ConnectionStatus
  },
  parameters:{
    decorators:[
      storyfn => <SessionContextProvider
        logoutPath='/logout'
        GQL_QUERY_ME={ 'query { me { id } }' }
                 >
        { storyfn() }
                 </SessionContextProvider>,
      storyfn => <AplProvider>{ storyfn() }</AplProvider>,
      storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
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

export const Default = () => (
  <CPStatusBar className='x-background b-dark-x'></CPStatusBar>
)

//Default.parameters = storyParameters

export const Variant = () => (
  <CPStatusBar></CPStatusBar>
)

//Variant.parameters = storyParameters

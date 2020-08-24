/* @fwrlines/generator-storybook-story 1.5.2 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { DashboardMain as Main, DashboardContextProvider } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils' */
import { Router } from 'stories/utils'
/* import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'collections/dashboard/DashboardMain',
  component    :Main,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:Main.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>, */
      storyfn => <DashboardContextProvider>{ storyfn() }</DashboardContextProvider>,
      storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

export const Default = () => (
  <Main>This is the main dashboard canvas</Main>
)


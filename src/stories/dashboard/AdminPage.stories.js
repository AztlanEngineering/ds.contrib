/* @fwrlines/generator-storybook-story 1.2.0 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { DashboardAdminPage as AdminPage } from 'ui'

/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'collections/dashboard/zAdminPage',
  component    :AdminPage,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //AdminPage.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => (
  <AdminPage></AdminPage>
)

export const Variant = () => (
  <AdminPage></AdminPage>
)


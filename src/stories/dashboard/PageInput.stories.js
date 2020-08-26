/* @fwrlines/generator-storybook-story 1.2.0 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { DashboardPageInput as PageInput } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'collections/dashboard/zPageInput',
  component    :PageInput,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //PageInput.Item
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
  <PageInput></PageInput>
)

export const Variant = () => (
  <PageInput></PageInput>
)


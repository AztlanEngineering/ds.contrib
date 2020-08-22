/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Shortener } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'common/Shortener',
  component    :Shortener,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:Shortener.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
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
  <Shortener
    style={{
      maxWidth:'300px'
    }}
  >
    { faker.lorem.paragraph(3) }
  </Shortener>
)

//Default.parameters = storyParameters

export const Limit = () => (
  <Shortener
    limit={ 5 }
    style={{
      maxWidth:'300px'
    }}
  >
    { faker.lorem.paragraph(1) }
  </Shortener>
)

export const Unlimited = () => (
  <Shortener
    style={{
      maxWidth:'300px'
    }}
  >
    { faker.lorem.paragraph(1) }
  </Shortener>
)

export const Separator = () => (
  <Shortener
    separator={ '-' }
    limit={1}
    style={{
      maxWidth:'300px'
    }}
  >
    84554d07-3f4e-46f3-b18e-08462d215ec9
  </Shortener>
)

//Variant.parameters = storyParameters

/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Dropzone } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'
//import {ALL_COLORS, SIZES } from 'stories/config.js'
//import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'form/common/composedInputs/Dropzone',
  component:Dropzone,
  //componentSubtitle:'Component subtitle',
  subcomponents: {
    //Item:Dropzone.Item
  },
  parameters: {
    decorators: [ 
      //storyfn => <div className="">{ storyfn() }</div>,
      //storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
      //storyfn => <Router>{ storyfn() }</Router>,
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
  <Dropzone></Dropzone> 
)

//Default.parameters = storyParameters

export const Variant = () => (
    <Dropzone></Dropzone> 
)

//Variant.parameters = storyParameters

/* @fwrlines/generator-storybook-story 1.6.1 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { useForm, FormContextProvider,FormContextDebugger } from 'ds-form'
import { OpeningTimesInput } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'inputs/OpeningTimesInput',
  component    :OpeningTimesInput,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:OpeningTimesInput.Item
  },
  decorators:[
    /* storyfn => <div className="">{ storyfn() }</div>,
       storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
       storyfn => <Router>{ storyfn() }</Router>, */
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

export const Default = () => (
  <FormContextProvider>
    <OpeningTimesInput
      name='Ot'
      label='Opening Times'
      optional={ true }
      isSelectorOpenDefault={ true }
      description='Please select the regular opening times'
    />
    <FormContextDebugger/>
  </FormContextProvider>
)

//Default.parameters = storyParameters

export const Variant = () => (
  <FormContextProvider>
    <OpeningTimesInput
      name='ot2'
      label='Opening Times'
      optional={ true }
      description='Please select the regular opening times'
      //description='Please select the right user permissions'
    />
    <FormContextDebugger/>
  </FormContextProvider>
)

//Variant.parameters = storyParameters

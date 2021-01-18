/* @fwrlines/generator-storybook-story 1.6.1 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Form, FormContextDebugger } from 'ds-form'

import { HoursSelectorInput } from 'ui'
import FormContext from 'ui/inputs/HoursSelectorInput/Context'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'inputs/HoursSelectorInput',
  component    :HoursSelectorInput,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:HoursSelectorInput.Item
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
  <Form>
    <HoursSelectorInput
      name='hours'
      label='Select the opening hours below'
      description='If you open your shop twice a day, you need to have two opening times'
    >
      <FormContextDebugger
        context={ FormContext }
        name='Hours'
      />
    </HoursSelectorInput>
    <FormContextDebugger
      //context={ FormContext }
      name='Form'
    />
  </Form>
)

//Default.parameters = storyParameters

/* export const Variant = () => (
       <HoursSelectorInput></HoursSelectorInput>
   ) */

//Variant.parameters = storyParameters

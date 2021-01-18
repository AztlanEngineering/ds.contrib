/* @fwrlines/generator-storybook-story 1.6.1 */
import * as React from 'react'
import { Form, FormContextDebugger } from 'ds-form'

//import { action } from '@storybook/addon-actions'

import { SelectDaysInput } from 'ui'
import FormContext from 'ui/inputs/SelectDaysInput/Context'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'inputs/SelectDaysInput',
  component    :SelectDaysInput,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:SelectDaysInput.Item
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
    <SelectDaysInput
      className='y-red u1 md-u2'
      name='select_days'
    >
      <FormContextDebugger
        context={ FormContext }
        name='Select Days'
      />
    </SelectDaysInput>
    <FormContextDebugger
      //context={ FormContext }
      name='Form'
    />
  </Form>
)

//Default.parameters = storyParameters

/*
export const Variant = () => (
  <SelectDaysInput></SelectDaysInput>
)*/

//Variant.parameters = storyParameters

/* @fwrlines/generator-storybook-story 1.3.0 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { BaseHTMLTextarea } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/common/baseInputs/BaseHTMLTextarea',
  component    :BaseHTMLTextarea,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Textarea.Item
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
  <BaseHTMLTextarea
    name='some_input'
    placeholder='blah blah blah input textarea'
  />
)

export const Variant = () => (
  <BaseHTMLTextarea
    name='some_input'
    placeholder='blah blah blah input textarea'
  />
)

export const Disabled = () => (
  <BaseHTMLTextarea
    name='some_input'
    disabled
    placeholder={ 'This input is disabled' }
  />
)

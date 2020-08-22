/* @fwrlines/generator-storybook-story 1.3.0 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { BaseHTMLInput } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/common/baseInputs/BaseHTMLInput',
  component    :BaseHTMLInput,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Input.Item
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
  <BaseHTMLInput
    name='some_input'
    placeholder={ 'Write something here' }
  />
)

export const Email = () => (
  <BaseHTMLInput
    name='some_input'
    type={ 'email' }
    placeholder={ 'john.doe@mail.com' }
  />
)

export const Password = () => (
  <BaseHTMLInput
    name='some_input'
    type={ 'password' }
    placeholder={ 'Write something here' }
  />
)

export const Phone = () => (
  <BaseHTMLInput
    name='some_input'
    type={ 'tel' }
    placeholder={ '332876798' }
  />
)

export const Disabled = () => (
  <BaseHTMLInput
    name='some_input'
    disabled
    type={ 'tel' }
    placeholder={ 'This input is disabled' }
  />
)


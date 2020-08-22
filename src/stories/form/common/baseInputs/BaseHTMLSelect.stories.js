/* @fwrlines/generator-storybook-story 1.5.0 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { BaseHTMLSelect } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/common/baseInputs/BaseHTMLSelect',
  component    :BaseHTMLSelect,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //BaseHTMLSelect.Item
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
  <BaseHTMLSelect
    name='composer'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag'
      },
      {
        value:'viaggio',
        label:'Rossini',
        id   :'ross'
      },
      {
        value:'pelleas',
        label:'debussy',
        id   :'debu'
      }
    ]}
  />
)

export const InitialValue= () => (
  <BaseHTMLSelect
    name='composer'
    value='pelleas'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag'
      },
      {
        value:'viaggio',
        label:'Rossini',
        id   :'ross'
      },
      {
        value:'pelleas',
        label:'debussy',
        id   :'debu'
      }
    ]}
  />
)


export const DisabledValue = () => (
  <BaseHTMLSelect
    name='composer'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag'
      },
      {
        value     :'viaggio',
        label     :'Rossini',
        id        :'ross',
        'disabled':true
      },
      {
        value:'pelleas',
        label:'debussy',
        id   :'debu'
      }
    ]}
  />
)

export const DisabledInput = () => (
  <BaseHTMLSelect
    name='composer'
    disabled
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag'
      },
      {
        value:'viaggio',
        label:'Rossini',
        id   :'ross'
      },
      {
        value:'pelleas',
        label:'debussy',
        id   :'debu'
      }
    ]}
  />
)

export const HiddenValue= () => (
  <BaseHTMLSelect
    name='composer'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag'
      },
      {
        value   :'viaggio',
        label   :'Rossini',
        id      :'ross',
        'hidden':true
      },
      {
        value:'pelleas',
        label:'debussy',
        id   :'debu'
      }
    ]}
  />
)

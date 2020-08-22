/* @fwrlines/generator-storybook-story 1.5.0 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Select } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/common/composedInputs/Select',
  component    :Select,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Select.Item
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
  <Select
    name='composer'
    options={[
      {
        value   :'valhalla',
        label   :'Wagner',
        id      :'wag',
        disabled:true
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
    other='Altro'
    otherId='yoho'
    label='Please select below who is your favourite composer'
    inputId='compo'V
  />
)

export const Aesthetic  = () => (
  <Select
    name='composer'
    options={[
      {
        value   :'valhalla',
        label   :'Wagner',
        id      :'wag',
        disabled:true
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
    other='Altro'
    otherId='yoho'
    label='Please select below who is your favourite composer'
    inputId='compo'
    aesthetic='mars'
  />
)

export const Error  = () => (
  <Select
    name='composer'
    options={[
      {
        value   :'valhalla',
        label   :'Wagner',
        id      :'wag',
        disabled:true
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
    other='Altro'
    otherId='yoho'
    label='Please select below who is your favourite composer'
    inputId='compo'
    aesthetic='mars'
    error="You didn't select the best one"
  />
)

export const Valid = () => (
  <Select
    name='composer'
    options={[
      {
        value   :'valhalla',
        label   :'Wagner',
        id      :'wag',
        disabled:true
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
    other='Altro'
    otherId='yoho'
    label='Please select below who is your favourite composer'
    inputId='compo'
    aesthetic='mars'
    valid="Great choice"
  />
)

export const Disabled = () => (
  <Select
    name='composer'
    disabled
    options={[
      {
        value   :'valhalla',
        label   :'Wagner',
        id      :'wag',
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
    other='Altro'
    otherId='yoho'
    label='Please select below who is your favourite composer'
    inputId='compo'
    aesthetic='mars'
  />
)

export const Compact = () => (
  <Select
    name='composer'
    disabled
    compact
    options={[
      {
        value   :'valhalla',
        label   :'Wagner',
        id      :'wag',
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
    other='Altro'
    otherId='yoho'
    label='Please select below who is your favourite composer'
    inputId='compo'
    aesthetic='mars'
  />
)

/*
export const Variant = () => (
    <Select></Select>
)
*/


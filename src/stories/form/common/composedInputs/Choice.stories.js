/* @fwrlines/generator-storybook-story 1.5.0 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Choice } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'
//import {ALL_COLORS, SIZES } from '../config.js'
//import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'form/common/composedInputs/Choice',
  component:Choice,
  //componentSubtitle:'Component subtitle',
  subcomponents: {
    //Choice.Item
  },
  parameters: {
    decorators: [ 
      //storyfn => <div className="">{ storyfn() }</div>,
      //storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
      //storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

export const Default = () => (
  <Choice
    type='radios' //checkboxes
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
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    other='Altro'
    otherId='yoho'
    label='Whats your favourite composer'
    inputId='compo'
    />
)

export const Variant = () => (
  <Choice
    type='radios' //checkboxes
    name='composer'
    multiple
    error='bad selection'
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
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    other='Altro'
    otherId='yoho'
    label='Whats your favourite composer'
    inputId='compo'
    />
)


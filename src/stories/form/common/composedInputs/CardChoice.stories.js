/* @fwrlines/generator-storybook-story 1.5.0 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { CardChoice } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'
//import {ALL_COLORS, SIZES } from '../config.js'
//import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'form/common/composedInputs/CardChoice',
  component:CardChoice,
  //componentSubtitle:'Component subtitle',
  subcomponents: {
    //CardChoice.Item
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
  <CardChoice
    type='card-checkboxes' //radios
    name='composer'
    inputClassName='y-indigo'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag',
      },
      {
        value   :'viaggio',
        label   :'Rossini',
        id      :'ross',
        disabled:true,
      },
      {
        value:'pelleas',
        label:<span>
          <em>Claude</em>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    label='Whats your favourite composer'
    inputId='compo3'
  />
)

export const Variant = () => (
  <CardChoice
    type='card-checkboxes' //radios
    name='composer'
    valid='well done'
    compact
    inputClassName='y-indigo'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag',
      },
      {
        value   :'viaggio',
        label   :'Rossini',
        id      :'ross',
        disabled:true,
      },
      {
        value:'pelleas',
        label:<span>
          <em>Claude</em>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    label='Whats your favourite composer'
    inputId='compo3'
  />
)


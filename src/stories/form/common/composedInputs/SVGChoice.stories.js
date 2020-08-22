/* @fwrlines/generator-storybook-story 1.5.0 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { SVGChoice } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'
//import {ALL_COLORS, SIZES } from '../config.js'
//import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'form/common/composedInputs/SVGChoice',
  component:SVGChoice,
  //componentSubtitle:'Component subtitle',
  subcomponents: {
    //SVGChoice.Item
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
  <SVGChoice
    type='svg-radios' //checkboxes
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
    inputId='compo2'
  />
)

export const Variant = () => (
  <SVGChoice
    type='svg-radios' //checkboxes
    name='composer'
    inputClassName='y-indigo'
    description='please choose wisely'
    variant='dot'
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
    inputId='compo2'
  />
)


/* @fwrlines/generator-storybook-story 1.5.2 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Plan } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'collections/saas/Plan',
  component    :Plan,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    Feature:Plan.Feature,
    Price:Plan.Price
    //Item:Plan.Item
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
  <Plan 
    className='y-secondary'
    name='Pro plano'
    price={ 49.89 }
  >
    <Plan.Feature>Your domain name</Plan.Feature>
    <Plan.Feature>SSL Certificate</Plan.Feature>
    <Plan.Feature>1 user</Plan.Feature>
    <Plan.Feature>Email support 5 days per week</Plan.Feature>
  </Plan>
)

export const Variant = () => (
  <Plan 
    className='y-violet'
    name='Entreprise'
    price={ 109.89 }
    //textClassName='c-on-y'
  >
    <Plan.Feature>Your domain name</Plan.Feature>
    <Plan.Feature>SSL Certificate</Plan.Feature>
    <Plan.Feature>10 users</Plan.Feature>
    <Plan.Feature>Email and phone support 7 days per week</Plan.Feature>
  </Plan>
)

export const Free = () => (
  <Plan 
    className='y-indigo'
    name='Pro bono'
    price={ 0 }
    //textClassName='c-on-y'
  >
    <Plan.Feature>Your domain name</Plan.Feature>
    <Plan.Feature>SSL Certificate</Plan.Feature>
    <Plan.Feature>10 users</Plan.Feature>
    <Plan.Feature>Email and phone support 7 days per week</Plan.Feature>
  </Plan>
)


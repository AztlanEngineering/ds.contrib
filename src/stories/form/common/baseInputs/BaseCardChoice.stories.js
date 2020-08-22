/* @fwrlines/generator-storybook-story 1.3.0 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { BaseCardChoice } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

import {ALL_COLORS, SIZES } from '../../../config.js'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/common/baseInputs/BaseCardChoice',
  component    :BaseCardChoice,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //BaseCardChoice.Item
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
  <BaseCardChoice
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
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
  />
)

export const Multiple = () => (
  <BaseCardChoice
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
        label:'Debussy',
        id   :'debu'
      }
    ]}
    multiple
    //disabled
  />
)

export const Other = () => (
  <BaseCardChoice
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
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    other
    otherId='yoho'
    //disabled
  />
)

export const OtherCustom = () => (
  <BaseCardChoice
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
    //disabled
  />
)

export const DisabledAll = () => (
  <BaseCardChoice
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
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    disabled
  />
)

export const DisabledOption = () => (
  <BaseCardChoice
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
        disabled:true
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
  />
)

export const Size = () => (
  <>
    <BaseCardChoice
      name='composer'
      className='t-1'
      multiple
      options={[
        {
          value:'valhalla',
          label:'Wagner',
          id   :'wag'
        },
        {
          value:'viaggio',
          label:'Rossini',
          id   :'ross',
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
    />
    <BaseCardChoice
      name='composer'
      className='t3'
      multiple
      options={[
        {
          value:'valhalla2',
          label:'Wagner',
          id   :'wag2'
        },
        {
          value:'viaggio2',
          label:'Rossini',
          id   :'ross2',
        },
        {
          value:'pelleas2',
          label:<span>
            <b>Claude</b>
            {' '}
            Debussy
          </span>,
          id:'debu2'
        }
      ]}
    />
  </>
)

export const Colors = () => (
  ALL_COLORS.map((e,i) =>
    <BaseCardChoice
      name='composer'
      className={ 'y-' + e.toLowerCase() }
      options={[
        {
          value:'valhalla'+3*i,
          label:'Wagner',
          id   :'wag'+3*i
        },
        {
          value:'viaggio'+3*i,
          label:'Rossini',
          id   :'ross'+3*i
        },
        {
          value:'pelleas'+3*i,
          label:'Debussy',
          id   :'debu'+3*i
        }
      ]}
      multiple
    //disabled
    />
  )
)


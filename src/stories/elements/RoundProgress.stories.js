/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { RoundProgress } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title     :'elements/RoundProgress',
  component :RoundProgress,
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const variants = [
  {
    number   :45,
    max      :100,
    unit     :'%',
    className:'',
    title    :'Create a company'
  },
  {
    number:95,
    max   :100,
    unit  :'%',
    title :'Are blond'
  },
  {
    number   :4,
    max      :5,
    unit     :'',
    className:'x-grey y-blue',
    title    :'Live in an appartment'
  },
  {
    number   :60,
    max      :60,
    unit     :'',
    className:'x-blue y-grey',
    title    :'Time savings',
  },
  {
    number   :10,
    max      :100,
    unit     :'%',
    className:'x-black y-green',
    title    :'Do sports',
  },
]


export const Default = () => (
  <div
    className='p1'
    style={{ width: '200px' }}
  >
    <RoundProgress
      { ...variants[0] }
    />
  </div>

)

export const Variant = () => (
  variants.map((e,i) =>
    <div
      className='p1'
      style={{ width: 150 + 60*i + 'px'}}
    >
      <RoundProgress
        {...e}
      />
    </div>
  )
)


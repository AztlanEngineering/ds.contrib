/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { InlineLoader } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title     :'common/InlineLoader',
  component :InlineLoader,
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const item_map=[
  {
    color :'blue',
    height:'40',
  },
  {
    color :'green',
    height:'80',
  },
  {
    color :'yellow',
    height:'100',
    back  :'blue',
  },
  {
    color :'red',
    height:'200',
  }
]

export const Default = () =>
  <InlineLoader
    height='200'
    loaderClassName='x-orange'
  >
  </InlineLoader>

export const Variant = () =>
  <>
    {
      item_map.map((e,i) =>
        <div
          className='p1'
          key={i}
        >
          <InlineLoader
            className={
			    (e.back ? 'b-y y-'+e.back:'')
			  }
            loaderClassName={'x-'+e.color}
            height={e.height }
          />
        </div>
      )
    }
  </>

export const Circle = () =>
  <>
    {
      item_map.map((e,i) =>
        <div
          className='p1'
          key={i}
        >
          <InlineLoader
            className={
			    (e.back ? 'b-y y-'+e.back:'')
			  }
            type='circle'
            loaderClassName={' x-'+e.color}
            height={e.height }
          />
        </div>
      )
    }
  </>


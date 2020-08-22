/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'
import { TEXT } from '../utils'
import { LocalIndex } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title     :'elements/LocalIndex',
  component :LocalIndex,
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => (
  <LocalIndex title='In this page'>
    <LocalIndex.Item
      title='Old Polluting cars'
    >
      <LocalIndex.Item
        title='Hummer'
      />
      <LocalIndex.Item
        title='Renault'
      />
      <LocalIndex.Item
        title='Fiat'
      />
    </LocalIndex.Item>

    <LocalIndex.Item
      title='Itemectric cars'
    >
      <LocalIndex.Item
        title='Tesla'
      />
      <LocalIndex.Item
        title='Renault'
      />
      <LocalIndex.Item
        title='Fiat'
      />
    </LocalIndex.Item>

    <LocalIndex.Item
      title='Why does it rain more on Tuesdays ?'
    >
      <LocalIndex.Item
        title='Tuesdays are no wednesdays'
      />
      <LocalIndex.Item
        title='Not all tuesdays are the same'
      />
      <LocalIndex.Item
        title='A thunderstorm'
      />
    </LocalIndex.Item>
  </LocalIndex>

)

export const Variant = () => (
  <>
    <LocalIndex
      title='In this page'
      className='y-white b-dark-y pu u2'
    >
      <LocalIndex.Item
        title='Old Polluting cars'
      >
        <LocalIndex.Item
          title='Hummer'
        />
        <LocalIndex.Item
          title='Renault'
        />
        <LocalIndex.Item
          title='Fiat'
        />
      </LocalIndex.Item>

      <LocalIndex.Item
        title='Electric cars'
      >
        <LocalIndex.Item
          title='Tesla'
        />
        <LocalIndex.Item
          title='Renault'
        />
        <LocalIndex.Item
          title='Fiat'
        />
      </LocalIndex.Item>

      <LocalIndex.Item
        title='Why does it rain more on Tuesdays ?'
      >
        <LocalIndex.Item
          title='Tuesdays are no wednesdays'
        />
        <LocalIndex.Item
          title='Not all tuesdays are the same'
        />
        <LocalIndex.Item
          title='A thunderstorm'
        />
      </LocalIndex.Item>
    </LocalIndex>

    <div
      className=''
      dangerouslySetInnerHTML={{__html: TEXT}}
    />
  </>
)


/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { SnapSlider } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils' */

//const endpoint = 'https://api.fwrlines.com/graphql'
const Outside = ({className, children}) =>(
  <div
    className={'' + className}
    style={{ width: '400px' }}
  >
    { children }
  </div>
)

export default {
  title     :'elements/SnapSlider',
  component :SnapSlider,
  parameters:{
    decorators:[
      storyfn => <Outside className=''>{ storyfn() }</Outside>,
      /* storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const elements_map = [
  {
    back:'blue',
  },
  {
    back:'red',
  },
  {
    back:'orange',
  },
  {
    back:'green',
  },
  {
    back:'white',
  },
  {
    back:'yellow',
  },
]

const ItemsInside = ({ className }) =>
  elements_map.map((e,i) =>
    <div
      className={ className || '' + ' b-x x-' + e.back}
      style={{ minWidth: '200px', height: '200px' }}
      key={i}
    />
  )


export const Default = () => (
  <SnapSlider><ItemsInside /></SnapSlider>
)

export const Left = () => (
  <SnapSlider pin='left'><ItemsInside /></SnapSlider>
)


export const Right = () => (
  <SnapSlider pin='right'><ItemsInside /></SnapSlider>
)


export const Compact = () => (
  <SnapSlider
    compact
    pin='left'
  >
    <ItemsInside />
  </SnapSlider>
)


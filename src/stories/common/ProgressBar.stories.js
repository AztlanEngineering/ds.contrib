/* @fwrlines/generator-storybook-story 1.5.0 */
import * as React from 'react'
import { useState } from 'react'

//import { action } from '@storybook/addon-actions'

import { ProgressBar } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'common/ProgressBar',
  component    :ProgressBar,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //ProgressBar.Item
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
  <ProgressBar/>
)

export const Width = () => (
  <ProgressBar strokeWidth={20}/>
)

export const Values = () => (
  <ProgressBar
    maximum={200}
    current={160}
  />
)

export const Gradient = () => (
  <ProgressBar
    gradientMap={
      [
        { offset: '0%', 'stopColor': 'var(--blue)' },
        { offset: '50%', 'stopColor': 'var(--violet)' },
        { offset: '70%', 'stopColor': 'var(--pink)' },
        { offset: '93%', 'stopColor': 'var(--orange)' },
        { offset: '100%', 'stopColor': 'var(--orange)' },
      ]
    }
  />
)

export const State = () => {
  const [value, setValue] = useState(10)

  return (
    <>
      <ProgressBar current={value}/>
      <div>
        <button onClick={() => setValue(value - 10)}>Decrease</button>
        <button onClick={() => setValue(value + 10)}>Increase</button>
      </div>
    </>
  ) }


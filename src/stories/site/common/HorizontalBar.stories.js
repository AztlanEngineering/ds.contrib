/* @fwrlines/generator-storybook-story 1.5.0 */
import * as React from 'react'
import { useState } from 'react'

//import { action } from '@storybook/addon-actions'

import {
  HorizontalBar,
  ProgressBar,
  Button
} from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'site/HorizontalBar',
  component    :HorizontalBar,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //HorizontalBar.Item
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
  <HorizontalBar >
    hello
  </HorizontalBar>
)

export const Background = () => (
  <HorizontalBar
    className='x-secondary b-x'
  >
    yoho
  </HorizontalBar>
)

export const Padded = () => (
  <HorizontalBar
    className='x-paragraph b-x u1'
  >
    <div className='yf inside'>
      yoho
    </div>
  </HorizontalBar>
)

export const Composed = () =>{
  const [progress, setProgress] = useState(70)
  return(
    <HorizontalBar
      className='x-secondary b-x u50'
    >
      <div className='yf inside'>
        <Button
          simple
          className='it x-white xh-white'
          icon='h'
          iconSide='l'
          onClick={() => setProgress(progress - 10)}
        >
          Back
        </Button>
        {' '}
        <div className='fh s2 ks yib'>A good title bar menu</div>
        {' '}
        <Button
          className='x-success'
          onClick={() => setProgress(progress + 10)}
        >
          Call to action
        </Button>
      </div>
      <ProgressBar
        current={progress}
        className='x-green xa xst'
      />
    </HorizontalBar>
  )


}

export const Composed2 = () =>{
  return(
    <HorizontalBar
      className='x-blue b-x u50'
    >
      <div className='yf inside'>
        <Button
          simple
          className='x-white xh-white'
        >
          Toggle
        </Button>
        <div className='b-dark-x ph-u fh s2 ks yib row'>A good title bar menu</div>
      </div>
    </HorizontalBar>
  )


}

export const OverflowTest  = () =>{
  return(
    <HorizontalBar
      className='x-blue b-x u50'
    >
      <div className='yf inside'>
        <Button
          simple
          className='x-white xh-white'
        >
          Toggle
        </Button>
        <div className='ph-u fh s3 ks yib row'>A good title bar menu blah blah blah too long really long</div>
      </div>
    </HorizontalBar>
  )


}

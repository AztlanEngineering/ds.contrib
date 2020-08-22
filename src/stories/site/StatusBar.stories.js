/* @fwrlines/generator-storybook-story 1.1.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'
import { Button } from 'ui/elements'

import { StatusBar } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'site/StatusBar',
  component    :StatusBar,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //StatusBar.Item
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
  <StatusBar
    className='x-blue y-white'
    status='4 unsaved modifications'
  >
    <Button>Action !</Button>
  </StatusBar>
)

export const Fixed = () => (
  <StatusBar
    className='x-secondary y-black'
    status='4 unsaved modifications'
    fixed
  >
    <Button>Click me</Button>
  </StatusBar>
)


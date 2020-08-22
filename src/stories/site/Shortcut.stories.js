/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Shortcut, ShortcutTester } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'
//import {ALL_COLORS, SIZES } from 'stories/config.js'
//import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'site/Shortcut',
  component:Shortcut,
  //componentSubtitle:'Component subtitle',
  subcomponents: {
    //Item:Shortcut.Item
  },
  parameters: {
    decorators: [ 
      //storyfn => <div className="">{ storyfn() }</div>,
      //storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
      //storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

/*

const storyParameters = {
 previewTabs: {
    'canvas': {
      hidden: true
    },
  }
}

 */

export const Default = () => (
  <Shortcut 
    keys={['k']} 
    action={() => alert('Shortcut pressed')}
  /> 
)

export const Ctrl = () => (
  <Shortcut
    keys={['ctrl', 'K']} 
    action={() => alert('Shortcut pressed')}
  /> 
)

export const Alt = () => (
  <Shortcut
    keys={['alt', 'K']} 
    action={() => alert('Shortcut pressed')}
  /> 
)

export const Shift = () => (
  <Shortcut
    keys={['shift', 'K']} 
    action={() => alert('Shortcut pressed')}
  /> 
)

//Default.parameters = storyParameters

export const Tester = () => {
  return(
    <ShortcutTester
    /> 
)
}

//Variant.parameters = storyParameters

/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'
import {ALL_COLORS, SIZES } from '../config.js'
import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy'

import { Label } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title     :'common/Label',
  component :Label,
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
    content:'Best price today',
    icon   :'S'
  },
  {
    content  :'25% off',
    className:'x-blue',
    icon     :'a'
  },
  {
    content  :'Today only',
    className:'x-red',
    icon     :'e'
  },
  {
    content  :'Only 3 remaining',
    className:'x-green',
    icon     :'d'
  },
]

export const Default = () => (
  <Label>This is a simple label</Label>
)

export const NewStory = () => (
  <Label className='x-red b-x'>New story test</Label>
)

export const Variant = () => (
  variants.map((e,i) =>
    <Label
      key={i }
      className={ e.className }
    >
      { e.content || 'blah' }
    </Label>
  )
)

export const Colors = () => (

  //Object.keys(ALL_COLORS).map((e,i) =>
  ALL_COLORS.map((e,i) =>
    <Label
      className={ 'x-'+e}
      circle={ i % 2 }
    >
      { variants[1].content || 'blah'}
    </Label>
  )

)

export const Simple = () => (

  //Object.keys(ALL_COLORS).map((e,i) =>
  ALL_COLORS.map((e,i) =>
    <Label
      className={ 'x-'+e}
      simple
    >
      { variants[1].content || 'blah'}
    </Label>
  )

)

export const Dash = () => (

  //Object.keys(ALL_COLORS).map((e,i) =>
  ALL_COLORS.map((e,i) =>
    <>
      <Label
        className={ 'x-'+e}
        dash
      >
        { 'Our Story'}
      </Label>
      <br />

    </>
  )

)

export const Basic = () => (

  //Object.keys(ALL_COLORS).map((e,i) =>
  ALL_COLORS.map((e,i) =>
    <Label
      className={ 'x-'+e}
      circle={ i % 2 }
      basic
    >
      { variants[1].content || 'blah'}
    </Label>
  )

)

export const Sizes = () => (

  //Object.keys(ALL_COLORS).map((e,i) =>
  SIZES.map((e,i) =>
    <Label
      className={ 'x-blue ks s'+e}
    >
      { variants[1].content || 'blah'}
    </Label>
  )

)

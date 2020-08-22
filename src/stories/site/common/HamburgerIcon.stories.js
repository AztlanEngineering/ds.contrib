/* @fwrlines/generator-storybook-story 1.5.0 */
import * as React from 'react'
import { useState } from 'react'

//import { action } from '@storybook/addon-actions'

import { HamburgerIcon } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'site/common/HamburgerIcon',
  component    :HamburgerIcon,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //HamburgerIcon.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => {
  const [active,setActive] = useState(false)
  return (
    <HamburgerIcon
      active={active}
      onClick={() => setActive(!active)}
    />
  )

}

export const VariantSqueeze = () => {
  const [active,setActive] = useState(false)
  return (
    <HamburgerIcon
      className='x-black'
      active={active}
      onClick={() => setActive(!active)}
      variant='squeeze'
    />
  )

}


export const VariantArrow = () => {
  const [active,setActive] = useState(false)
  return (
    <HamburgerIcon
      className='x-blue'
      active={active}
      onClick={() => setActive(!active)}
      variant='arrow'
    />
  )

}

export const Simple = () => {
  const [active,setActive] = useState(false)
  return (
    <HamburgerIcon
      className='x-primary'
      simple //passed to the Button api
      active={active}
      onClick={() => setActive(!active)}
      variant='arrow'
    />
  )

}

export const Basic = () => {
  const [active,setActive] = useState(false)
  return (
    <HamburgerIcon
      className='x-primary'
      basic //passed to the Button api
      active={active}
      onClick={() => setActive(!active)}
      variant='arrow'
    />
  )

}

export const Size = () => {
  const [active,setActive] = useState(false)
  return (
    <HamburgerIcon
      className='x-accent1 s2 ks'
      basic //passed to the Button api
      active={active}
      onClick={() => setActive(!active)}
    />
  )

}


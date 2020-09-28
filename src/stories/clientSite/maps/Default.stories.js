/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import faker from 'faker'
import generatePageContent from './generatePageContent.js'
//import {} from 'react'

import { Page } from 'ds-core'

//import { action } from '@storybook/addon-actions'

import { ClientSiteMapDefault } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'clientSite/maps/Default',
  component    :ClientSiteMapDefault,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:Default.Item
  },
  parameters:{
    decorators:[
      storyfn => <div className='u2 sm-u1'>{ storyfn() }</div>,
      /*
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
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

export const Default = () => {
  const pageContent = generatePageContent({
    order:Number(0),
    image:{
      alt     :'This is an image alt text',
      fullPath:'https://images.pexels.com/photos/4489743/pexels-photo-4489743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  })
  return (
    <>
      <ClientSiteMapDefault content={ pageContent }></ClientSiteMapDefault>
    </>
  )
}

export const Odd = () => {
  const pageContent = generatePageContent({
    order:Number(1),
    image:{
      alt     :'This is an image alt text',
      fullPath:'https://images.pexels.com/photos/4489743/pexels-photo-4489743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  })
  return (
    <>
      <ClientSiteMapDefault content={ pageContent }></ClientSiteMapDefault>
    </>
  )
}

export const NoImage = () => {
  const pageContent = generatePageContent({
    image:null
  })
  return (
    <>
      <ClientSiteMapDefault content={ pageContent }></ClientSiteMapDefault>
    </>
  )
}


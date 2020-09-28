/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import faker from 'faker'
import generatePageContent from './generatePageContent.js'
//import {} from 'react'

import { Page } from 'ds-core'
import { IntlProvider } from 'react-intl'

//import { action } from '@storybook/addon-actions'

import { ClientSiteMapHeader as Header } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'clientSite/maps/Header',
  component    :Header,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:Header.Item
  },
  parameters:{
    decorators:[
      storyfn => <div className='u2 sm-u1'>{ storyfn() }</div>,
      /* storyfn => <div className="">{ storyfn() }</div>,
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
    image:{
      alt     :'This is an image alt text',
      fullPath:'https://images.pexels.com/photos/4488636/pexels-photo-4488636.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    }
  })
  return (
    <Header content={ pageContent }></Header>
  )
}


//Default.parameters = storyParameters

export const NoImage = () => {
  const pageContent = generatePageContent({
    image:null
  })
  return (
    <Header content={ pageContent }></Header>
  )
}


//Variant.parameters = storyParameters

/* @fwrlines/generator-storybook-story 1.6.1 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { MagazineArticleCard as ArticleCard } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'magazine/ArticleCard',
  component    :ArticleCard,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:ArticleCard.Item
  },
  decorators:[
    storyfn => <div
      className='u1 md-u2'
      style={{ height: '100%' }}
               >
      { storyfn() }
               </div>
    /* storyfn => <div className="">{ storyfn() }</div>,
       storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
       storyfn => <Router>{ storyfn() }</Router>, */
  ]
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
  <ArticleCard
    hasReadMore
    isClickable={false}
    isOpenDefault={false}
    className='x-blue'
  >
  </ArticleCard>
)

//Default.parameters = storyParameters

export const Variant = () => (
  <ArticleCard
    isClickable
    className='x-green'
  >
  </ArticleCard>
)

//Variant.parameters = storyParameters

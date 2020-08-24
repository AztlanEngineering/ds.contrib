/* @fwrlines/generator-storybook-story 1.5.2 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { TabManager } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils' */
import { Router } from 'stories/utils'
/* import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'collections/tabs/TabManager',
  component    :TabManager,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    Tabline      :TabManager.Tabline,
    'Tabline.Tab':TabManager.Tabline.Tab
    //Item:TabManager.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>, */
      storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

export const Default = () => (
  <TabManager test></TabManager>
)



export const Footer = () => {
  const FooterComponent = (props) => (
  <li>List element</li>
  )
return(
  <TabManager FooterComponent={FooterComponent}></TabManager>
)

}



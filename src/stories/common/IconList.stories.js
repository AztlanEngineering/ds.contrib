/* @fwrlines/generator-storybook-story 1.5.1 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { IconList } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'common/IconList',
  component    :IconList,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    'Item':IconList.Item
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

  const items = [
    {
      content:'An amazing feature'
    },
    {
      content:'Better than an iPhone',
      icon   :'o',
      className:'y-green z-secondary'
    },
    {
      content:'That you won\'t find somewhere else',
      icon   :'f'
    },
    {
      content  :'More than 5 hours of battery life. Only 3kg of weight. Available in 36 colors. Super silent.',
      className:'y-red x-blue z-primary c-x xh-orange',
      icon     :'d'
    }
  ]
  return (
    <IconList>
      { items.map(({content, ...e}, i) =>
        <IconList.Item
          {...e}
          key={i}
        >
          { content }
        </IconList.Item>
      ) }
    </IconList>

  )
}

export const Variant = () => (
  <IconList></IconList>
)


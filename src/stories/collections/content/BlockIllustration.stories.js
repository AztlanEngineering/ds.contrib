/* @fwrlines/generator-storybook-story 1.5.2 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { BlockIllustration } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'collections/content/BlockIllustration',
  component    :BlockIllustration,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:BlockIllustration.Item
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
  <BlockIllustration
    className='s1 k-s'
    headingProps={{
      label         :'Our philosophy',
      labelClassName:'x-green',
      labelProps    :{dash: true},

      heading         :'A software for every need',
      headingAs       :'h2',
      headingClassName:'s5 k-s'
    }}
    figureProps={{
      src     :'https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      alt     :'Alt text for the image',
      children:'Caption under the image'
    }}
  >
    <p>
      Here is a subtitle that explains why the product is worth it. It goes around one sentence and a half. Something sharp probably.
    </p>
  </BlockIllustration>
)

export const Right = () => (
  <BlockIllustration
    side='right'
    className='s1 k-s'
    headingProps={{
      label         :'Our philosophy',
      labelClassName:'x-green',
      labelProps    :{dash: true},

      heading         :'Full of revolutionary features',
      headingAs       :'h2',
      headingClassName:'s5 k-s'
    }}
    figureProps={{
      src     :'https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      alt     :'Alt text for the image',
      children:'Caption under the image'
    }}
  >
    <p>
      Here is a subtitle that explains why the product is worth it. It goes around one sentence and a half. Something sharp probably.
    </p>
  </BlockIllustration>
)


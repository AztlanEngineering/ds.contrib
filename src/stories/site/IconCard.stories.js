/* @fwrlines/generator-storybook-story 1.5.2 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { IconCard } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'site/IconCard',
  component    :IconCard,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    'IconCard.Group':IconCard.Group
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
  <IconCard
    svgTarget='engine'

    headingProps={{

      heading         :'Hello its me the title',
      headingAs       :'span',
      headingClassName:'h4',
    }}
    children={<p className=''>One of the features explained</p>}
  >
  </IconCard>
)

export const Background = () => (
  <IconCard
    svgTarget='engine'
    className='y-indigo'

    headingProps={{

      heading         :'Hello its me the title',
      headingAs       :'span',
      headingClassName:'h4',
    }}
    children={<p className=''>One of the features explained</p>}
  >
  </IconCard>
)


export const Size = () => (
  <IconCard
    svgTarget='engine'
    className='y-grey s-2 k-s'

    headingProps={{

      heading         :'Hello its me the title',
      headingAs       :'span',
      headingClassName:'h4',
    }}
    children={<p className=''>One of the features explained</p>}
  >
  </IconCard>
)



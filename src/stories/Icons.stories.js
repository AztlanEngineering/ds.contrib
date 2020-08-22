/* @fwrlines/generator-storybook-story 1.1.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'
import { Meta, IconGallery, IconItem} from '@storybook/addon-docs/blocks'

/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'Icons',
  /* component:Icons,
     componentSubtitle:'Component subtitle', */
  subcomponents:{
    //Icons.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const chars=[' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~']

export const Default = () => (
  <IconGallery>
    {chars.map((e,i) =>
      <IconItem
        name={ e}
        key={ i }
      >
        <span className='fi fi-icon'>{ e }</span>
      </IconItem>
    )
    }
  </IconGallery>
)


export const Cairo = () => (
  <IconGallery>
    {chars.map((e,i) =>
      <IconItem
        name={ e}
        key={ i }
      >
        <span className='fi fi-cairo'>{ e }</span>
      </IconItem>
    )
    }
  </IconGallery>
)



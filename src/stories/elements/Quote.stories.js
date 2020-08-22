/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { Quote } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title     :'elements/Quote',
  component :Quote,
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const paragraph_text = 'The hour when ye say: \'What good is my justice! I do not see that I am fervour and fuel. The just, however, are fervour and fuel!\''

const cite = 'https://archive.org/stream/thusspokezarathu00nietuoft/thusspokezarathu00nietuoft_djvu.txt'

export const Default = () =>
  (<Quote>{ paragraph_text }</Quote>)

export const WithAuthor = () =>(
  <Quote
    author='F. Nietzsche'
    cite={ cite }
  >
    { paragraph_text }
  </Quote>
)

export const Color = () =>(
  <Quote
    author='F. Nietzsche'
    cite={ cite }
    className='z-blue'
  >
    { paragraph_text }
  </Quote>
)


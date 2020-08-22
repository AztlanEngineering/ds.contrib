/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { Wireframe } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title     :'common/Wireframe.Image',
  component :Wireframe.Image,
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const dimensions_list = [
  {
    height:'100px',
    width :'100%',
  },
  {
    height:'200px',
    width :'200px',
  },
  {
    height:'40px',
    width :'500%',
  }
]

export const Image = () =>
  dimensions_list.map((e, i) =>
    <div
      className='p1'
      key={i}
    >
      <Wireframe.Image
        height={ e.height }
        width={ e.width }
      />
    </div>
  )


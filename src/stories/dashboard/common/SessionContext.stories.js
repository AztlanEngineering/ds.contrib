/* @fwrlines/generator-storybook-story 1.2.0 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { SessionContextProvider } from 'ui'
/* import QUERY from './graphql/query.graphql' */
import { Router, AplProvider } from 'stories/utils'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'collections/dashboard/common/SessionContextProvider',
  component    :SessionContextProvider,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Logout:Logout
  },
  parameters:{
    decorators:[
      storyfn => <AplProvider>{ storyfn() }</AplProvider>,
      storyfn => <Router>{ storyfn() }</Router>
    ]
  }
}

export const Default = () => (
  'This component needn\'t be visually tested'
)




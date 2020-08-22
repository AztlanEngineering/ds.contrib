/* @fwrlines/generator-storybook-story 1.5.2 */
import * as React from 'react'
//import {} from 'react'


//import { action } from '@storybook/addon-actions'

import { SiteContextProvider, SupportEmailLink } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'elements/SupportEmailLink',
  component    :SupportEmailLink,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:SupportEmailLink.Item
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
  const config={
    SITE_NAME     :'Internet 1999',
    SITE_CANONICAL:'https://internet1999.org',
    FACEBOOK      :'facebook_id',
    INSTAGRAM     :'@superaccount',
    SUPPORT_EMAIL :'support@support.com'
  }
  return (
    <SiteContextProvider config={ config }>
      <SupportEmailLink></SupportEmailLink>
    </SiteContextProvider>
  )

}

export const Label = () => {
  const config={
    SITE_NAME     :'Internet 1999',
    SITE_CANONICAL:'https://internet1999.org',
    FACEBOOK      :'facebook_id',
    INSTAGRAM     :'@superaccount',
    SUPPORT_EMAIL :'support@support.com'
  }
  return (
    <SiteContextProvider config={ config }>
      <SupportEmailLink label='ask for help'/>
    </SiteContextProvider>
  )

}




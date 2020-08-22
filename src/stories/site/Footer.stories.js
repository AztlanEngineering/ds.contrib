/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { SiteContextProvider, Footer } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils' */
import { Router } from 'stories/utils'
/* import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'site/Footer',
  component    :Footer,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:Footer.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>, */
      storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
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

export const Default = () => {
  const config={
    SITE_NAME       :'Internet 1999',
    //SITE_CANONICAL:'https://internet1999.org',
    FACEBOOK        :'facebook_id',
    INSTAGRAM       :'@superaccount',
    //SUPPORT_EMAIL:'support@support.com',
    HOME_URL        :'/home',
    SITE_DESCRIPTION:faker.lorem.paragraph(3)
  }

  return (
    <SiteContextProvider config={ config }>
      <Footer>
        <Footer.Main className='b-y y-yellow uc sm-ul'>
          { faker.lorem.paragraph() }
        </Footer.Main>
        <div className='col1 b-y y-red uc sm-ul'>{ faker.lorem.paragraph() }</div>
        <div className='col3 b-y y-blue uc sm-ul'>{ faker.lorem.paragraph() }</div>
        <div className='col2 b-y y-green uc sm-ul'>{ faker.lorem.paragraph() }</div>
      </Footer>
    </SiteContextProvider>
  )
}

//Default.parameters = storyParameters


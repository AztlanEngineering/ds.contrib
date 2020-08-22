/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Button, CategoryButton, BlogLink, BlogContextProvider, BlogContextTester } from 'ui'
import { Router } from 'stories/utils'

/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'collections/blog/common/BlogContextProvider',
  component    :BlogContextProvider,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    BlogLink,
    BlogContextTester
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         */
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
}}

 */

export const Default = () => {
  const paginationParam = ':page([0-9]{1,5})'
  const slugUrlParam = ':slug([0-9a-z-]{5,80})'
  const categoryUrlParam = ':category([0-9a-z-]{5,80})'

  return (
    <BlogContextProvider
      routes={{

        BASE              :'/blog',
        HOME              :'/blog',
        HOME_PAGINATED    :`/blog/${paginationParam}`,
        CATEGORY          :`/blog/c/${categoryUrlParam}`,
        CATEGORY_PAGINATED:`/blog/c/${categoryUrlParam}/${paginationParam}`,
        SINGLE            :`/blog/${slugUrlParam}/`,
      }}
    >
      <BlogContextTester>
      </BlogContextTester>
      <Button.Group>
        <BlogLink>
          <Button className='x-green'>
            Home
          </Button>
        </BlogLink>
        <BlogLink
          to='SINGLE'
          params={{slug: 'blahblahblah'}}
        >
          <Button className='x-orange'>
            Article blahblahslug
          </Button>
        </BlogLink>
        <BlogLink
          to='CATEGORY_PAGINATED'
          params={{category: 'common-pbs', page: 8}}
        >
          <Button className='x-red'>
            Category common problems page 8

          </Button>
        </BlogLink>
        <BlogLink
          to='HOME_PAGINATED'
          params={{page: 10}}
        >
          <Button className='x-green'>
            Home p 10
          </Button>
        </BlogLink>
      </Button.Group>
        <CategoryButton name='name' slug='diy-advice' / >
    </BlogContextProvider>
  )

}
//Default.parameters = storyParameters


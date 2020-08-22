/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Button, NavBar, SiteContextProvider } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils' */
import { Router } from 'stories/utils'
/* import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'site/NavBar',
  component    :NavBar,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:NavBar.Item
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
    SITE_NAME:'Meccamico',
    HOME_URL :'/home',
  }

  const FooterComponent = ({open}) => {
    return (
      <Button.Group className={ `${open && ''} gc-footer yf` }>
        <Button className='x-blue'>
          There
        </Button>
        <Button className='x-red'>
          Hello
        </Button>
      </Button.Group>
    )
  }

  return (
    <SiteContextProvider config={ config }>
      <div className='x-green b-x'>
        <NavBar
          className='u1 z-blue'
          headerClassName='b-z ui-dark x-link'
          contentClassName='y-background b-dark-y'
          headerOpenClassName='b-z z-red x-paragraph ui-dark'
          FooterComponent={ FooterComponent }
        >
          <NavBar.Item link='/'>
            Link
          </NavBar.Item>
          <NavBar.Item link='/pricing'>
            Pricing
          </NavBar.Item>
        </NavBar>
        <p>{ faker.lorem.paragraph(120) }</p>
      </div>
    </SiteContextProvider>
  )
}

export const Leader = () => {
  const config={
    SITE_NAME:'Meccamico',
    HOME_URL :'/home',
  }

  const FooterComponent = ({open}) => {
    return (
      <Button.Group className={ `${open && ''} gc-footer yf` }>
        <Button className='x-blue'>
          There
        </Button>
        <Button className='x-red'>
          Hello
        </Button>
      </Button.Group>
    )
  }

  const offsetPx = 100

  return (
    <SiteContextProvider config={ config }>
      <div className='x-green b-x'>
        <NavBar
          className='u1 z-blue'
          headerClassName='b-z ui-dark x-link'
          contentClassName='y-background b-dark-y'
          headerOpenClassName='b-z z-red x-paragraph ui-dark'
          FooterComponent={ FooterComponent }
          offsetPx={ offsetPx }
          Leader={ ({open, isTop}) => {
            return (
              <div
                className={
                  [
                    'leader',
                    'y-background b-dark-y',
                    isTop && 'istop'
                  ].filter(e => e).join(' ')
                }

              >
                {'Leader at '}
                { offsetPx }
                Istop :
                {' '}
                { isTop && ' TRUE' }
                isOpen :
                {' '}
                { open && 'true' }
              </div>
            )
          } }
        >
          <NavBar.Item link='/'>
            Link
          </NavBar.Item>
          <NavBar.Item link='/pricing'>
            Pricing
          </NavBar.Item>
        </NavBar>
        <p>{ faker.lorem.paragraph(120) }</p>
      </div>
    </SiteContextProvider>
  )
}

//Default.parameters = storyParameters



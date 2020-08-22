/* @fwrlines/generator-storybook-story 1.2.0 */
import * as React from 'react'
import { useContext } from 'react'
import faker from 'faker'

//import { action } from '@storybook/addon-actions'

import { SiteContextProvider, SiteContext, Button } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'*/
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' 

import C from 'ui/cssClasses'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'common/SiteContextProvider',
  component    :SiteContextProvider,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //SiteContextProvider.Item
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
    SUPPORT_EMAIL:'support@support.com',
    SITE_DESCRIPTION:faker.lorem.paragraph(10)
  }
  return (
    <SiteContextProvider config={ config }>
      This text is inside the context
    </SiteContextProvider>
  )

}

export const Theme = () => {
  const config={
    SITE_NAME     :'Internet 1999',
    SITE_CANONICAL:'https://internet1999.org',
    FACEBOOK      :'facebook_id',
    INSTAGRAM     :'@superaccount',
    SUPPORT_EMAIL:'support@support.com'
  }

  const ChildCo = () => {

    const {
      userTheme,
      setPreferredTheme
    } = useContext(SiteContext)
      
    return (
      <div 
      className={
        [
          C.themes[userTheme]
        ].filter(e => e).join(' ')
      }
      >
        <Button.Group independent>
          <Button
            className={'ks s2 x-black'}
            onClick={() => setPreferredTheme('dark')}
          >
            Dark Theme
          </Button>
          <Button
            className={'ks s2 x-white'}
            onClick={() => setPreferredTheme('light')}
          >
            Light Theme
          </Button>
          <Button
            className={'ks s2 x-grey'}
            onClick={() => setPreferredTheme(null)}
          >
            System Default Theme
          </Button>
        </Button.Group>
        <div 
          className='z-background b-dark-z'
          style={{
            minHeight:'600px'
          }}
        >
        <p>
          Current theme is :
          {' '}
          { userTheme }
        </p>
          <div dangerouslySetInnerHTML={{'__html':TEXT_XS}} className='u1 p-u'/>
        </div>
      </div>

    )
  }

  return (
    <SiteContextProvider config={ config }>
      <ChildCo/>
    </SiteContextProvider>
  )

}


/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import {
  Button,
  ContentTree,
  ContentTreeContextProvider as ContextProvider,
} from 'ui'

import { TEXT } from '../utils'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title     :'site/ContentTree',
  component :ContentTree,
  parameters:{
    decorators:[
      storyfn => <ContextProvider
        content={ TEXT }
      >
        { storyfn() }
      </ContextProvider>
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => (
  <>
    <ContentTree
      style={{
    		position  :'fixed',
    		top       :'0',
    		left      :'0',
		    background:'beige'
		  }}
    />
    <div
      className='content'
      dangerouslySetInnerHTML={{__html: TEXT}}
      style={{ paddingTop: '500px', paddingBottom: '500px' }}
    >

    </div>
  </>
)

export const PastStyle = () => (
  <>
    <ContentTree
      style={{
    		position  :'fixed',
    		top       :'0',
    		left      :'0',
		    background:'beige'
		  }}
      activeClassName='c-x x-red'
      unfoldActive
    />
    <div
      className='content'
      dangerouslySetInnerHTML={{__html: TEXT}}
      style={{ paddingTop: '500px', paddingBottom: '500px' }}
    />

  </>
)


export const As = () => (
  <>
    <ContextProvider
      levels={ 1 }
      content={ TEXT }
    >
      <ContentTree
        as={ Button.Group }
        itemAs={ Button }
        style={{
    		position:'fixed',
    		top     :'0',
    		left    :'0',
		    //background:'beige'
		  }}
        elementClassName='r=paragraph'
        activeClassName='c-x x-red'
      />
      <div
        className='content'
        dangerouslySetInnerHTML={{__html: TEXT}}
        style={{ paddingTop: '500px', paddingBottom: '500px' }}
      />
    </ContextProvider>

  </>
)

export const Sticky = () => (
  <div className='gt-center row'>
    <ContentTree
      sticky
      activeClassName='c-x x-red b-black ui-dark'
    />
    <div
      className='content gc-content'
      dangerouslySetInnerHTML={{__html: TEXT}}
      style={{ paddingTop: '500px', paddingBottom: '500px' }}
    />

  </div>
)

export const Min = () => (
  <div className='row '>
    <div
      className='y-red b-y yf'
      style={{
    		position:'fixed',
    		top     :'0',
    		left    :'0',
        width   :'100%'
		    //background:'beige'
      }}
    >
      <p>navbar</p>
      <ContentTree
        min
        id='tree' //required for min
        className='y-background b-dark-y ui-dark'
        activeClassName='c-x x-red b-black ui-dark current'
      />
    </div>
    <div
      className='content gc-content'
      dangerouslySetInnerHTML={{__html: TEXT}}
      style={{ paddingTop: '500px', paddingBottom: '500px' }}
    />

  </div>
)

/* @fwrlines/generator-storybook-story 1.5.0 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { SideBar } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   */
import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'site/common/SideBar',
  component    :SideBar,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //SideBar.Item
  },
  parameters:{
    decorators:[
      /*storyfn => <div
        className='g-sidebar b-z z-black'
        style={{height: '100%'}}
                 >
        { storyfn() }
        <div className='b-x x-yellow g12 g9-md g10-lg'></div>
        <div className='b-x x-red g12 g9-md g10-lg'></div>
      </div>,
      */
    ]
  }
}

export const Default = () => (
  <div
    className='g-sidebar left b-z z-black'
    style={{height: '100%'}}
  >
    <SideBar>Hola</SideBar>
    <div className='b-x x-yellow g12'></div>
  </div>
)

export const Right = () => (
  <div
    className='g-sidebar right b-z z-black'
    style={{height: '100%'}}
  >
    <SideBar>Hola</SideBar>
    <div className='b-x x-yellow g12'></div>
  </div>
)

export const Width = () => (
  <div
    className='g-sidebar right b-z z-black'
    style={{height: '100%', '--sidebar-width': '70px'}}
  >
    <SideBar>Hola</SideBar>
    <div className='b-x x-yellow g12'></div>
  </div>
)

export const Span2 = () => (
  <div
    className='g-sidebar left b-z z-black'
    style={{height: '100%'}}
  >
    <SideBar style={{gridRowEnd: 'span 2'}}>Hola</SideBar>
    <div className='b-x x-yellow g12'></div>
    <div className='b-x x-red g12'></div>
  </div>
)

export const OverflowTest = () => (
  <div
    className='g-sidebar left b-z z-black'
    style={{height: '100%'}}
  >
    <SideBar><div dangerouslySetInnerHTML={{__html: TEXT_XS}}/></SideBar>
    <div className='b-x x-yellow g12'></div>
  </div>
)

export const StickyTest = () => (
  <div
    className='g-sidebar left b-z z-black'
    style={{height: '100%'}}
  >
    <SideBar >
      <div dangerouslySetInnerHTML={{__html: TEXT_XS}}/>
    </SideBar>
    <div className='b-x x-yellow g12'>
      <div
        style={{maxWidth: '400px'}}
        dangerouslySetInnerHTML={{__html: TEXT}}
      />
    </div>
  </div>
)

export const FlexTest = () => (
  <div
    className='g-sidebar left b-z z-black'
    style={{height: '100%'}}
  >
    <SideBar
      insideClassName='u1 p-u'
    >
      <div dangerouslySetInnerHTML={{__html: TEXT_XXS}}/>
      <div dangerouslySetInnerHTML={{__html: TEXT_XXS}}/>
    </SideBar>
    <div className='b-x x-yellow g12'>
      <div
        style={{maxWidth: '400px'}}
        dangerouslySetInnerHTML={{__html: TEXT}}
      />
    </div>
  </div>
)


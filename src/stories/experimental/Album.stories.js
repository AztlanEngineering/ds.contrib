/* @fwrlines/generator-storybook-story 1.6.0 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Album } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils' */
import { Router } from 'stories/utils'
/* import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'collections/experimental/Album',
  component    :Album,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:Album.Item
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
  const slides = [
    {
      id              :'mnt-1',
      source          :'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt             :'',
      caption         :'France, 2010',
      wrapperClassName:'x-red b-dark-x'
    },
    {
      id              :'mnt-2',
      source          :'https://images.pexels.com/photos/361104/pexels-photo-361104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt             :'mnt',
      caption         :'U.S.A., 2011',
      wrapperClassName:'x-background b-x'
    },
    {
      id              :'photooo',
      source          :'https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt             :'mnt',
      caption         :'U.S.A., 2011',
      wrapperClassName:'x-secondary b-light-x'
    },
    {
      id              :'esfahan',
      source          :'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt             :'',
      caption         :'Esfahan, 2010',
      wrapperClassName:''
    },
    {
      id :'explanation',
      jsx:<div>
        <p className='c-on-x'>
          <strong>Hello.</strong>
          {' '}
          I have taken these pictures over the years.
        </p>
        <p className='c-on-x'>
          They are all analog and haven't been digitally edited.
          Particular colors or effects come from analog manipulation and the uniqueness of every film pack.
        </p>
      </div>,
      wrapperClassName:''
    }
  ]
  return (
    <Album slides={slides}/>
  ) }

//Default.parameters = storyParameters

/*
export const Variant = () => (
    <Album></Album>
)*/

//Variant.parameters = storyParameters

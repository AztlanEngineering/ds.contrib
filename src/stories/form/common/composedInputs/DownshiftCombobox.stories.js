/* @fwrlines/generator-storybook-story 1.3.0 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { Heading, QueryDownshiftCombobox, DownshiftCombobox, FormContextProvider } from 'ui'
import { AplProvider } from 'stories/utils'
import QUERY from './graphql/allFruits.graphql'
/*
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

/* const endpoint = 'https://api.fwrlines.com/graphql'
    */
import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../../../utils/Dummy'

export default {
  title        :'form/common/composedInputs/DownshiftCombobox',
  component    :DownshiftCombobox,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //DownshiftCombobox.Item
  },
  parameters:{
    decorators:[
      storyfn => <AplProvider>{ storyfn() }</AplProvider>,
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => (
  <DownshiftCombobox
    inputId='fruit'
    label='Please select your favourite fruit'
    options={ LIST }
    description='Here is a list of very tasty fruits you can choose your favourite from'
    aesthetic='mars'
  />
)

export const Dict = () => (
  <DownshiftCombobox
    inputId='fruit'
    label='Please select your favourite fruit'
    options={ LIST.map((e, i) => ({
      label:e,
      value:i
    })) }
    description='Here is a list of very tasty fruits you can choose your favourite from'
    aesthetic='mars'
  />
)

export const Loading = () => (
  <DownshiftCombobox
    loading
    inputId='fruit'
    label='Please select your favourite fruit'
    options={ LIST }
    description='Here is a list of very tasty fruits you can choose your favourite from'
    aesthetic='mars'
  />
)

export const Valid = () => (
  <DownshiftCombobox
    valid
    inputId='fruit'
    label='Please select your favourite fruit'
    options={ LIST }
    description='Here is a list of very tasty fruits you can choose your favourite from'
    aesthetic='mars'
  />
)

export const Error = () => (
  <DownshiftCombobox
    errors='Please select a better fruit'
    inputId='fruit'
    label='Please select your favourite fruit'
    options={ LIST }
    description='Here is a list of very tasty fruits you can choose your favourite from'
    aesthetic='mars'
  />
)

export const Debug = () => (
  <DownshiftCombobox
    errors='Please select a better fruit'
    inputId='fruit'
    label='Please select your favourite fruit'
    options={ LIST }
    description='Here is a list of very tasty fruits you can choose your favourite from'
    aesthetic='mars'
    debug
  />
)

export const Query = () => (
  <QueryDownshiftCombobox
    query={QUERY}
    errors='Please select a better fruit'
    inputId='fruit'
    label='Please select your favourite fruit'
    description='Here is a list of very tasty fruits you can choose your favourite from'
    displayItem={ item => (
      <Heading
        className='y-background b-y'
        heading={ item.name }
        subtitle={ `This fruit tastes ${item.taste}` }
      />
    ) }
    displaySelectedItem={ item => (
      <Heading
        className='ui-dark y-background b-y'
        heading={ item.name }
        subtitle={ `This fruit tastes ${item.taste}` }
      />
    ) }
    filterItems={ (items, value) => items.filter(e => e.name.match(new RegExp(value, 'gi'))) }
    aesthetic='mars'
  />
)
/*
export const Variant = () => (
  <DownshiftCombobox></DownshiftCombobox>
)*/


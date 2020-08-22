/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import faker from 'faker'
import { useState } from 'react'

//import { action } from '@storybook/addon-actions'

import { Checkbox } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'
//import {ALL_COLORS, SIZES } from 'stories/config.js'
//import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'form/common/composedInputs/Checkbox',
  component:Checkbox,
  //componentSubtitle:'Component subtitle',
  subcomponents: {
    //Item:Checkbox.Item
  },
  parameters: {
    decorators: [ 
      //storyfn => <div className="">{ storyfn() }</div>,
      //storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
      //storyfn => <Router>{ storyfn() }</Router>,
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
  const name='contact-newsletter'

  const [value, setValue] = useState()

  const onChange = (e) => {
    const {
      name,
      value
    } = e.target
    console.log('The full change event has been logged for debugging puroposes', e)
    setValue(value)
  }
  return (
    <>
      <Checkbox
        name={ name }
        value={ value }
        onChange={ onChange }
        label='Subscribe'
        inputId='newsletter'
        description='Subscribe to the newsletter ?'
      />
      <pre>
        BaseName :
        {' '}
        { name }
        {'\n'}
        Current Value :
        {' '}
        { value }
        {'\n'}
      </pre>
    </>

  )
}

export const Disabled = () => (
  <Checkbox
    name='formeremail'
    disabled
    label='Something else'
    inputId='else'
    aesthetic='mars'
  />
)

export const Optional = () => (
  <Checkbox
    name='formeremail'
    label='Your last stay with us'
    inputId='optional-else'
    aesthetic='mars'
    optional
  />
)

//Variant.parameters = storyParameters

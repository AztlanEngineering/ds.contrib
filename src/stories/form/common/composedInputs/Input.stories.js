/* @fwrlines/generator-storybook-story 1.5.0 */
import * as React from 'react'
import { useState } from 'react'

//import { action } from '@storybook/addon-actions'

import { Input } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/common/composedInputs/Input',
  component    :Input,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Input.Item
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
  const name='contact-email'

  const [value, setValue] = useState()

  const [detectedName, setDetectedName] = useState() //Only for testhing

  const onChange = (e) => {
    const {
      name:dname,
      value:dvalue
    } = e.target
    console.log('The full change event has been logged for debugging puroposes', e)
    setValue(dvalue)
    setDetectedName(dname)
  }
  return (
    <>
      <Input
        type='email'
        name={ name }
        value={ value }
        onChange={ onChange }
        label='Your email'
        inputId='hey'
        description='This field is important, please take the time to fill it correctly.'
      />
      <pre>
        BaseName :
        {' '}
        { name }
        {'\n'}
        Detected Name :
        {' '}
        { detectedName }
        {'\n'}
        Current Value :
        {' '}
        { value }
        {'\n'}
        { 'The full change event has been logged for debugging purposes1' }
      </pre>
    </>

  )
}

export const Disabled = () => (
  <Input
    type='email'
    name='formeremail'
    disabled
    label='Something else'
    inputId='else'
    aesthetic='mars'
  />
)

export const Optional = () => (
  <Input
    type='email'
    name='formeremail'
    label='Your last stay with us'
    inputId='optional-else'
    aesthetic='mars'
    optional
  />
)

export const Compact = () => (
  <Input
    type='email'
    name='formeremail'
    label='Your last stay with us'
    inputId='optional-else'
    aesthetic='mars'
    compact
  />
)

export const Valid = () => (
  <Input
    name={ 'token' }
    label='Access token'
    type='text'
    inputId='thisworks'
    leftSide='token id'
    valid='Everything looks good'
    rightIcon='b'
    description='Enter here the token you have been provided'
    aesthetic='mars'
  />
)

export const Error = () => (
  <Input
    name={ 'token' }
    label='Access token'
    type='text'
    inputId='token_error'
    leftSide='token id'
    error='Please input a valid token'
    rightIcon='h'
    description='Enter here the token you have been provided'
    aesthetic='mars'
  />
)

export const LeftSide = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <Input
      name={ 'salary' }
      value={ value }
      onChange={ onChange }
      label='Expected salary'
      type='number'
      placeholder='40000'
      inputId='salary'
      leftSide='$'
      aesthetic='mars'
    />

  )
}

export const RightSide = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <Input
      name={ 'employees' }
      type='number'
      value={ value }
      onChange={ onChange }
      label='Number of employees'
      inputId='employees'
      rightSide='employees'
      placeholder={ '120' }
      aesthetic='mars'
    />

  )
}

export const LeftIcon = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <Input
      name={ 'employees' }
      type='number'
      value={ value }
      onChange={ onChange }
      label='Number of employees'
      inputId='employees'
      leftIcon='i'
      placeholder={ '120' }
      aesthetic='mars'
    />

  )
}

export const RightIcon = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <Input
      name={ 'employees' }
      type='number'
      value={ value }
      onChange={ onChange }
      label='Number of employees'
      inputId='employees'
      rightIcon='d'
      placeholder={ '120' }
      aesthetic='mars'
    />

  )
}

export const IconAndSide = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <Input
      name={ 'gasoline' }
      type='number'
      value={ value }
      onChange={ onChange }
      label='How much gasoline ?'
      inputId='gasoline'
      rightIcon='d'
      rightSide='onces'
      placeholder={ '120' }
      aesthetic='mars'
    />

  )
}

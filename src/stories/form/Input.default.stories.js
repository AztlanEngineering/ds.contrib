/* @fwrlines/generator-storybook-story 1.3.0 */
import * as React from 'react'
import { useState } from 'react'

//import { action } from '@storybook/addon-actions'

import {
  FormInput,
  FormContextProvider,
  FormContextDebugger
} from 'ui'


/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/FormInput',
  component    :FormInput,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
  },
  parameters:{
    decorators:[
      storyfn => <FormContextProvider
        initialValues={{

          contact_email:'john.johnson@gmail.com',
          password     :'kwak',
          openquestion :'April is the cruellest month, breeding licacs out the dead land,'
        }}
                 >
        { storyfn() }
        <FormContextDebugger/>
      </FormContextProvider>,
      /*
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => {
  /*
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  */
  return (
    <FormInput
      name={ 'contact_email' }
      label='Your email'
      inputId='hey'
      description='This field is important, please take the time to fill it correctly.'
    />

  )
}


export const Uncontrolled = () => (
  <FormInput
    name={ 'contact_email' }
  />
)

export const Placeholder = () => (
  <FormInput
    type='password'
    placeholder='a safe password, not 12345'
    name={ 'password' }
    label='Your password'
    inputId='pwd'
    description='Please make sure your password is strong enough'
  />
)

export const Type = () => (
  <FormInput
    type='textarea'
    name={ 'openquestion' }
    label='Your story'
    inputId='story'
  />
)

export const SingleCheckbox = () => (
  <FormInput
    type='checkbox'
    name={ 'openquestion' }
    label='Subscribe'
    description='Subscribe to then ewsletter'
    inputId='subscribe'
  />
)

export const Disabled = () => (
  <FormInput
    type='email'
    name='formeremail'
    disabled
    label='Something else'
    inputId='else'
  />
)

export const Optional = () => (
  <FormInput
    type='email'
    name='formeremail'
    label='Your last stay with us'
    inputId='optional-else'
    optional
  />
)

export const Compact = () => (
  <FormInput
    type='email'
    name='formeremail'
    label='Your last stay with us'
    inputId='optional-else'
    compact
  />
)

export const Valid = () => (
  <FormInput
    name={ 'token' }
    label='Access token'
    type='text'
    inputId='thisworks'
    leftSide='token id'
    valid='Everything looks good'
    rightIcon='b'
    description='Enter here the token you have been provided'
  />
)

export const Error = () => (
  <FormInput
    name={ 'token' }
    label='Access token'
    type='text'
    inputId='token_error'
    leftSide='token id'
    errors='Please input a valid token'
    rightIcon='h'
    description='Enter here the token you have been provided'
  />
)

export const LeftSide = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <FormInput
      name={ 'salary' }
      value={ value }
      onChange={ onChange }
      label='Expected salary'
      type='number'
      placeholder='40000'
      inputId='salary'
      leftSide='$'
    />

  )
}

export const RightSide = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <FormInput
      name={ 'employees' }
      type='number'
      value={ value }
      onChange={ onChange }
      label='Number of employees'
      inputId='employees'
      rightSide='employees'
      placeholder={ '120' }
    />

  )
}

export const LeftIcon = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <FormInput
      name={ 'employees' }
      type='number'
      value={ value }
      onChange={ onChange }
      label='Number of employees'
      inputId='employees'
      leftIcon='i'
      placeholder={ '120' }
    />

  )
}

export const RightIcon = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <FormInput
      name={ 'employees' }
      type='number'
      value={ value }
      onChange={ onChange }
      label='Number of employees'
      inputId='employees'
      rightIcon='d'
      placeholder={ '120' }
    />

  )
}

export const IconAndSide = () => {
  const [value, setValue] = useState()
  const onChange = (e) => {
    console.log('%%%%%', e)
  }
  return (
    <FormInput
      name={ 'gasoline' }
      type='number'
      value={ value }
      onChange={ onChange }
      label='How much gasoline ?'
      inputId='gasoline'
      rightIcon='d'
      rightSide='onces'
      placeholder={ '120' }
    />

  )
}


export const Choices = () => (
  <FormInput
    type='radios' //checkboxes
    name='composer'
    options={[
      {
        value   :'valhalla',
        label   :'Wagner',
        id      :'wag',
        disabled:true
      },
      {
        value:'viaggio',
        label:'Rossini',
        id   :'ross'
      },
      {
        value:'pelleas',
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    other='Altro'
    otherId='yoho'
    label='Whats your favourite composer'
    inputId='compo'
  />
)

export const SVGChoices = () => (
  <FormInput
    type='svg-radios' //checkboxes
    name='composer'
    inputClassName='y-indigo'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag',
      },
      {
        value   :'viaggio',
        label   :'Rossini',
        id      :'ross',
        disabled:true,
      },
      {
        value:'pelleas',
        label:<span>
          <b>Claude</b>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    other='Altro'
    otherId='yoho'
    label='Whats your favourite composer'
    inputId='compo2'
  />
)

export const CardChoices = () => (
  <FormInput
    type='card-checkboxes' //radios
    name='composer'
    inputClassName='y-indigo'
    options={[
      {
        value:'valhalla',
        label:'Wagner',
        id   :'wag',
      },
      {
        value   :'viaggio',
        label   :'Rossini',
        id      :'ross',
        disabled:true,
      },
      {
        value:'pelleas',
        label:<span>
          <em>Claude</em>
          {' '}
          Debussy
              </span>,
        id:'debu'
      }
    ]}
    label='Whats your favourite composer'
    inputId='compo3'
  />
)

export const Dropzone = () => (
  <FormInput
    type='image-dropzone' //radios
    name='illustration'
    multiple
    label='Please select an illustration'
    description='Drag and drop a file on the square'
    inputId='illustration'
  />
)

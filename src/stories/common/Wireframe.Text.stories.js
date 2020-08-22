/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { Wireframe } from 'ui'

export default {
  title     :'common/Wireframe.Text',
  component :Wireframe.Text,
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,*/
    ]
  }
}

const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
const as_list = ['p', 'h5', 'h4', 'h3', 'h2', 'h1']

export const Text = () =>
  <Wireframe.Text/>

export const Sizes = () =>
  sizes.map((e,i) =>
    <Wireframe.Text
      size={e}
      key={i}
    />
  )

export const As = () =>
  as_list.map((e,i) =>
    <Wireframe.Text
      as={e}
      key={i}
    />
  )


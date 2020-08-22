/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'


import { Breadcrumb } from 'ui'
import { Router } from 'stories/utils'


export default {
  title     :'elements/Breadcrumb',
  component :Breadcrumb,
  parameters:{
    decorators:[
      storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

export const Default = () => (
  <Breadcrumb>
    <Breadcrumb.Item
      to='blog'
      position={1}
    >
      Blog
    </Breadcrumb.Item>
    <Breadcrumb.Item
      to='blog'
      position={2}
    >
      Category
    </Breadcrumb.Item>
    <Breadcrumb.Item
      disabled
      position={3}
    >
      Article
    </Breadcrumb.Item>
  </Breadcrumb>
)

export const Colors = () => (
  <Breadcrumb className='x-orange'>
    <Breadcrumb.Item
      to='blog'
      className='y-green'
      position={1}
    >
      Blog
    </Breadcrumb.Item>
    <Breadcrumb.Item
      to='blog'
      className='y-red'
      position={2}
    >
      Category
    </Breadcrumb.Item>
    <Breadcrumb.Item
      disabled
      position={3}
    >
      Article
    </Breadcrumb.Item>
  </Breadcrumb>
)


/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

import { Subtitle } from 'ui'

export default {
  title     :'common/Subtitle',
  component :Subtitle,
  parameters:{
    decorators:[
      //storyfn => <div className="">{ storyfn() }</div>,
    ]
  }
}

const variants = [
  {
    text:'Stanley Kubrick, 1960',
    link:''
  },
  {
    text:'@Meccamico',
    link:''
  },
  {
    text:'1961 - 2020',
    link:''
  },
  {
    text:'The new destination in Wales',
    link:''
  },
]

export const Default = () =>
  <Subtitle>This is a subtitle</Subtitle>

export const Variants = () =>
  variants.map((e,i) =>
    <Subtitle upper={ i % 2 == 1 }>
      { e.text }
    </Subtitle>
  )

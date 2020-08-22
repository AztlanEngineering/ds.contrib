/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'


import { CircleInfo } from 'ui'
import { Router } from 'stories/utils'


export default {
  title     :'elements/CircleInfo',
  component :CircleInfo,
  parameters:{
    decorators:[
      storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

const map = [
  {
    circle   :'b-orange',
    title    :'Friedrich Nietzsche',
    className:'s3 k-s',
    subtitle :'A philosopher from the XIXth'
  },
  {
    circle   :'b-violet',
    title    :'J.S. Bach',
    className:'s1 k-s',
    subtitle :'A composer from the 18th'
  },
  {
    circle   :'b-teal',
    title    :'Carlos Pellicer',
    className:'s0 k-s',
    subtitle :'The poet from Tabasco'
  },
]

const mapVariant = [
  {
    circle   :'b-orange',
    title    :'Friedrich Nietzsche',
    subtitle :'@fnietzsche',
    link     :'https://twitter.com/fnietzsche',
    image    :'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/440px-Nietzsche187a.jpg',
    imageAlt :'Friedrich Nietzsche',
    className:'s3 k-s m-u u2',
  },
  {
    circle   :'b-red',
    title    :'J.S. Bach',
    subtitle :'@sebb',
    link     :'https://twitter.com/fnietzsche',
    image    :'https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg',
    imageAlt :'J.S. Bach',
    className:'s1 k-s m-u u2',
  },
  {
    circle   :'b-teal',
    title    :'Carlos Pellicer',
    subtitle :'His biography, and books',
    link     :'/pellicer',
    image    :'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/02/WhatsApp-Image-2019-02-15-at-7.33.12-PM.jpeg',
    imageAlt :'Carlos Pellicer',
    className:'s0 k-s m-u u2',
  },
]

export const Default = () =>(
  mapVariant.map((e,i) => (
    <CircleInfo
      title={ e.title }
      circleClassName={ e.circle }
      className={ 'mu u2' }
      image={ e.image }
      imageAlt={ e.imageAlt }
      key={i}
    />
  ))
)

export const Variant = () =>(
  mapVariant.map((e,i) =>
    <CircleInfo
      title={ e.title }
      className={ e.className }
      subtitle={ e.subtitle }
      link={ e.link }
      circleClassName={ e.circle }
      key={i}
    />
  )
)

export const WithImage = () =>(
  mapVariant.map((e,i) =>
    <CircleInfo
      title={ e.title }
      subtitle={ e.subtitle }
      circleClassName={ e.circle }
      image={ e.image }
      imageAlt={ e.imageAlt }
      className={ e.className }
      key={i}
    />
  )
)

export const Color = () => (
  mapVariant.map((e,i) =>
    i == 0 && <CircleInfo
      title={ e.title }
      subtitle={ e.subtitle }
      circleClassName={ e.circle }
      image={ e.image }
      imageAlt={ e.imageAlt }
      className='x-blue y-red'
      key={i}
    />
  )
)

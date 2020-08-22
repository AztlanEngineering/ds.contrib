/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'
import {ALL_COLORS, SIZES } from '../config.js'
import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy'

import { Heading } from 'ui/elements/Heading'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title     :'elements/Heading',
  component :Heading,
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const variants = [
  {
    title         :'Spartacus',
    sub           :'Stanley Kubrick, 1960',
    as            :'h1',
    align         :'ul',
    label         :'Film',
    labelClassName:'x-blue'
  },
  {
    title         :'Lolita',
    sub           :'Stanley Kubrick, 1962',
    as            :'h2',
    align         :'uc',
    label         :'Today\'s cinema',
    labelClassName:'x-orange'
  },
  {
    title         :'Dr. Strangelove',
    sub           :'Stanley Kubrick, 1964',
    as            :'h3',
    align         :'ur',
    label         :'Movie time',
    labelClassName:'x-red'
  },
  {
    title:'2001 : A Space Odyssey',
    sub  :'Stanley Kubrick, 1968',
    as   :'h4',
    align:'uc',
    label:'The best of 1968',
    //labelClassName:'b-green'
  },
  {
    title         :'A Clockwork Orange',
    sub           :'Stanley Kubrick, 1971',
    as            :'p',
    align         :'ur',
    label         :'An incredible film',
    className     :'tb',
    labelClassName:'x-grey'
  },
]



export const Default = () =>(

  <Heading
    headingAs='h1'
    heading={ variants[4].title }
  />
)

export const WithSubtitle = () =>(
  <Heading
    heading={ variants[4].title }
    subtitle={ variants[4].sub }
  />

)

export const As = () =>
  variants.map((e,i) =>
    <Heading
      headingAs={ e.as }
      subtitle={ e.sub }
      heading={ e.title }
      headingClassName={ e.className }
    />
  )

export const Alignment = () =>
  variants.map((e,i) =>
    <Heading
      headingAs='h2'
      subtitle={ e.sub }
      heading={ e.title }
      className={e.align}
    />
  )

export const Colors = () =>
  ALL_COLORS.map((e,i) =>
    <Heading
      headingAs='h3'
      subtitle={ variants[3].sub }
      className='mu u2 uc'
      headingClassName={ 'c-x x-' + e }
      heading={ variants[3].title }
    />
  )

export const StrokeColors = () =>
  ALL_COLORS.map((e,i) =>
    <Heading
      headingAs='h1'
      subtitle={ variants[3].sub }
      className={ 'mu u2 uc ' +(i % 2 == 0 ? 'tu' : '') }
      headingClassName={'ts x-' + e}
      heading={ variants[3].title }
    />
  )

export const WithLabel = () =>
  variants.map((e,i) =>
    <Heading
      className='mvu u4'
      headingAs={ 'h1' }
      subtitle={ e.sub }
      heading={ e.title }
      label={ e.label }
      headingClassName={ e.className }
      labelClassName={ e.labelClassName }
    />
  )


export const LabelAs = () =>{
  const LabelWrapper = ({ className='', ...props }) =>
    <span
      className={ 'mu u0 h5 b-x x-indigo c-x-on' + className }
      {...props}
    />
  return(

    variants.slice(0,2).map((e,i) =>
      <Heading
        className='mvu u4'
        headingAs={ 'h2' }
        labelAs={ LabelWrapper }
        subtitle={ e.sub }
        label={ e.label }
        heading={ e.title }
        headingClassName={ e.className }
      />
    )

  )
}

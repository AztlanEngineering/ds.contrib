/* @fwrlines/generator-storybook-story 1.6.0 */
import * as React from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Accordion, Heading } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'site/Accordion',
  component    :Accordion,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    'Accordion.Debug':Accordion.Debug,
    'Accordion.Item':Accordion.Item,
    'Accordion.Item.Section':Accordion.Item.Section,
    'Accordion.Item.Divider':Accordion.Item.Divider
  },
  parameters:{
    decorators:[
       storyfn => <div className="x-white b-dark-x p-u u2">{ storyfn() }</div>,
      /*   storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
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

  const generateItem = () => {
    return {
      title   :
        <Heading 
          headingClassName='h2 c-dark-x' 
          heading={ faker.lorem.sentence()}
          subtitle={ faker.lorem.sentence() }
        >
      </Heading>,
      children:<p>{ faker.lorem.paragraph(6) }</p>
    }
  }
  const items = [
    generateItem(),
    generateItem(),
    generateItem(),
    generateItem()
  ]

  return(
    <Accordion className='s0 k-s x-subtitle y-white'>
      <Accordion.Debug/>
      { items.map((el, i) =>
        <Accordion.Item
          { ...el }
          className='x-subtitle'
          id={ 'acc' + i }
          key={ i }
        />
      ) }
      </Accordion>
  )
}

//Default.parameters = storyParameters

export const PlusMinus = () => {

  const generateItem = () => {
    return {
      title   :
        <Heading 
          headingClassName='h2 c-on-y' 
          heading={ faker.lorem.sentence()}
          subtitle={ faker.lorem.sentence() }
          subtitleClassName='x-subtitle c-light-x'
        >
      </Heading>,
      children:<p className='c-x'>{ faker.lorem.paragraph(6) }</p>
    }
  }
  const items = [
    generateItem(),
    generateItem(),
    generateItem(),
    generateItem()
  ]

  return(
    <Accordion className='s0 k-s y-white x-subtitle' toggleStyle='plus'>
      <Accordion.Debug/>
      { items.map((el, i) =>
        <Accordion.Item
          { ...el }
          id={ 'acc' + i }
          key={ i }
        />
      ) }
      </Accordion>
  )
}

//Variant.parameters = storyParameters

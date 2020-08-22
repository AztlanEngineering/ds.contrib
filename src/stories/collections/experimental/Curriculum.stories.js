/* @fwrlines/generator-storybook-story 1.6.0 */
import * as React from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Curriculum, IconList } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'collections/experimental/Curriculum',
  component    :Curriculum,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:Curriculum.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
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
  const items = [
    {
      className:'y-secondary x-subtitle',
      children :<IconList>
        <IconList.Item
          icon='l'
          style={{'--z': 'var(--y)'}}
          className='c-dark-x'
        >
          Courses in cooking
        </IconList.Item>
        <IconList.Item
          icon='l'
          style={{'--z': 'var(--y)'}}
          className='c-dark-x'
        >
          Courses in business
        </IconList.Item>
        <IconList.Item
          icon='l'
          style={{'--z': 'var(--y)'}}
          className='c-dark-x'
        >
          Teamwork in managing the kitchen
        </IconList.Item>
      </IconList>,
      title   :'M.S. in in gastronomy',
      subtitle:'2010 in paris',
      id      :'ms',
    },
    {
      className:'y-primary x-white',
      children :<IconList>
        <IconList.Item
          icon='l'
          style={{'--z': 'var(--y)'}}
          className='c-x'
        >
          Courses in cooking
        </IconList.Item>
        <IconList.Item
          icon='l'
          style={{'--z': 'var(--y)'}}
          className='c-x'
        >
          Courses in business
        </IconList.Item>
        <IconList.Item
          icon='l'
          style={{'--z': 'var(--y)'}}
          className='c-x'
        >
          Teamwork in managing the kitchen
        </IconList.Item>
        <IconList.Item
          icon='o'
          style={{'--z': 'var(--y)'}}
          className='c-x'
        >
          Award in chess (Elo score = 2150)
        </IconList.Item>
        <IconList.Item
          icon='o'
          style={{'--z': 'var(--y)'}}
          className='c-x'
        >
          Best poem of the year 2005
        </IconList.Item>
      </IconList>,
      title   :'Bachelor in arts, Cambridge University',
      subtitle:'2007-2010, Cambridge, U.K.',
      id      :'bs'
    }
  ]
  return(
    <Curriculum>
      { items.map((e, i) =>
        <Curriculum.Item
          key={i}
          {...e}
        />
      ) }
    </Curriculum>
  )

}

//Default.parameters = storyParameters

export const Plus = () => {
  const items = [
    {
      className:'y-trqnspqrent x-subtitle',
      children :<IconList>
        <IconList.Item
          icon='l'
          style={{'--z': 'var(--y)'}}
          className='c-dark-x'
        >
          Courses in cooking
        </IconList.Item>
        <IconList.Item
          icon='l'
          style={{'--z': 'var(--y)'}}
          className='c-dark-x'
        >
          Courses in business
        </IconList.Item>
        <IconList.Item
          icon='l'
          style={{'--z': 'var(--y)'}}
          className='c-dark-x'
        >
          Teamwork in managing the kitchen
        </IconList.Item>
      </IconList>,
      title   :'Senior developper, Space X',
      subtitle:'2012 - present, Palo Alto, California',
      id      :'ms',
      simple   :true
    },
    {
      className:'y-green x-black',
      children :<IconList>
        <IconList.Item
          icon='l'
          style={{'--z': 'var(--y)'}}
          className='c-x'
        >
          Courses in cooking
        </IconList.Item>
        <IconList.Item
          icon='l'
          style={{'--z': 'var(--y)'}}
          className='c-x'
        >
          Courses in business
        </IconList.Item>
        <IconList.Item
          icon='l'
          style={{'--z': 'var(--y)'}}
          className='c-x'
        >
          Teamwork in managing the kitchen
        </IconList.Item>
        <IconList.Item
          icon='o'
          style={{'--z': 'var(--y)'}}
          className='c-x'
        >
          Award in chess (Elo score = 2150)
        </IconList.Item>
        <IconList.Item
          icon='o'
          style={{'--z': 'var(--y)'}}
          className='c-x'
        >
          Best poem of the year 2005
        </IconList.Item>
      </IconList>,
      title   :'Chief of Product, Microsoft',
      subtitle:'2001-2012, Seattle, Wa.',
      id      :'bs'
    }
  ]
  return(
    <Curriculum toggleStyle='plus'>
      { items.map((e, i) =>
        <Curriculum.Item
          key={i}
          {...e}
        />
      ) }
    </Curriculum>
  )

}
//Variant.parameters = storyParameters

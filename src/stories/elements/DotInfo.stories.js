/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { DotInfo } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title     :'elements/DotInfo',
  component :DotInfo,
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const map = [
  {
    children:'In Progress',
    circle  :'y-warning'
  },
  {
    children:'Error',
    circle  :'y-error'
  },
  {
    children:'Ready',
    circle  :'y-success'
  },
]


export const Default = () => (
  map.map((e,i) =>
    <div
      className='p1'
      key={i}
    >
      <DotInfo
        className={e.circle}
      >
        { e.children }
      </DotInfo>
    </div>

  )
)

export const Min = () => (
  map.map((e,i) =>
    <div
      className='p1'
      key={i}
    >
      <DotInfo
        className={e.circle}
      >
      </DotInfo>
    </div>

  )
)

export const Boolean = () => (
  <div
    className='p1'
  >
    <DotInfo
      //className={e.circle}
      boolean={false}
    >
      False
    </DotInfo>
    <DotInfo
      //className={e.circle}
      boolean={false}
      falseClassName='y-warning'
    >
      False
    </DotInfo>
    <DotInfo
      //className={e.circle}
      boolean={true}
    >
      True
    </DotInfo>
    <DotInfo
      //className={e.circle}
      boolean={true}
      trueClassName='y-primary'
    >
      True
    </DotInfo>
  </div>

)

export const Lower = () => (
  map.map((e,i) =>
    <div
      className='p1'
      key={i}
    >
      <DotInfo
        subtitleUpper={ false }
        className={e.circle}
      >
        { e.children }
      </DotInfo>
    </div>

  )
)

export const Children = () => (
  <div
    className='p1'
  >
    <DotInfo
      subtitleUpper={ false }
      className={'y-secondary'}
    >
      <span>
        Hello it's
        <b>me</b>
        !
      </span>

    </DotInfo>
  </div>

)

export const Colors = () => (
  map.map((e,i) =>
    <div
      className='p1'
      key={i}
    >
      <DotInfo
        className={e.circle}
      >
        { e.children }
      </DotInfo>
    </div>

  )
)

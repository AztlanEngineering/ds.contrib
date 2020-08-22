/* @fwrlines/generator-storybook-story 1.3.0 */
import * as React from 'react'
import { useState } from 'react'

//import { action } from '@storybook/addon-actions'

import { Popup, InnerContent} from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js' */
import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'common/Popup',
  component    :Popup,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Popup.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const width='200px'

export const Default = () => {
  const [isVisible, setVisible] = useState(true)

  return (
    <>
      <div id>
        <InnerContent
          dangerouslySetInnerHTML={{ __html: TEXT_XS }}
        />
        <div
          className='yib'
          id='hello'
          style={ {
            marginLeft:'20px',
            background:'green',
            position  :'relative'
          }}
        >
          <button onClick={ () => setVisible(!isVisible) }>
            <div className='x-red cx h1'>
              Make it&nbsp;
              { isVisible ? 'invisible' : 'visible' }
            </div>
          </button>
          <Popup
            isVisible={ isVisible }
            style={{ width }}
          >
            { TEXT_XXS_ESC }
          </Popup>
        </div>
      </div>
      <InnerContent
        dangerouslySetInnerHTML={{ __html: TEXT }}
      />
    </>
  )
}

export const Order = () => {
  const [isVisible, setVisible] = useState(true)

  return (
    <>
      <div id>
        <InnerContent
          dangerouslySetInnerHTML={{ __html: TEXT_XS }}
        />
        <div
          className='yib'
          id='hello'
          style={ {
            marginLeft:'20px',
            background:'green',
            position  :'relative'
          }}
        >
          <button onClick={ () => setVisible(!isVisible) }>
            <div className='x-red cx h1'>
              Make it&nbsp;
              { isVisible ? 'invisible' : 'visible' }
            </div>
          </button>
          <Popup
            preferredOrder={['left', 'bottom', 'right', 'top']}
            style={{ width }}
            isVisible={ isVisible }
          >
            Hey this is a test lets see if the last version works
            Hey this is a test lets see if the last version works
            Hey this is a test lets see if the last version works
          </Popup>
        </div>
      </div>
      <InnerContent
        dangerouslySetInnerHTML={{ __html: TEXT }}
      />
    </>
  )
}

/* @fwrlines/generator-storybook-story 1.3.0 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import { DownshiftSelect } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js' */


import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../../../utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/common/composedInputs/DownshiftSelect',
  component    :DownshiftSelect,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //DownshiftSelect.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => (
  <DownshiftSelect
    inputId='fruit'
    label='Please select your favourite fruit'
    options={ LIST }
    description='Here is a list of very tasty fruits you can choose your favourite from'
    aesthetic='mars'
  >
  </DownshiftSelect>
)

  /*
export const Variant = () => (
  <DownshiftSelect></DownshiftSelect>
)
*/


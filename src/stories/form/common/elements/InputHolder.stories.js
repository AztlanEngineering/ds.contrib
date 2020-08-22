/* @fwrlines/generator-storybook-story 1.4.2 */
import React from 'react'

//import { action } from '@storybook/addon-actions'

import {
  InputHolder,
  InputLabel,
  InputDescription
} from 'ui'

/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'form/common/elements/InputHolder',
  component    :InputHolder,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    InputLabel,
    InputDescription
    //InputHolder.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const All = () => {

  const all_props={
    className:'wrapperclass',
    id       :'wrapperid',
    style    :{
      fontSize:'2em'
    },

    error :'unhappy error message',
    validi:'You\'re all set',

    disabled:true,
    optional:true,

    //as:"fieldset",
    aesthetic:'mars',
    compact  :true,

    inputId:'usermail',

    label:'Enter your email',
    /* labelAs:'label', //This is the only new prop compared to Input
       labelId,
       labelClassName,
       labelStyle,
       labelExtraProps, // This as well. For downshift */

    /* description,
       descriptionAs,
       descriptionClassName,
       descriptionStyle, */
  }

  return (
    <InputHolder { ...all_props}>
      the input goes here
    </InputHolder>
  )

}


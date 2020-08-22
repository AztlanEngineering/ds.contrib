/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

import { InnerContent } from 'ui'

import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy'

export default {
  title     :'common/InnerContent',
  component :InnerContent,
  parameters:{
    decorators:[
      //storyfn => <div className="">{ storyfn() }</div>,
    ]
  }
}



export const Default = () =>
  <InnerContent
    dangerouslySetInnerHTML={{ __html: TEXT }}
  />

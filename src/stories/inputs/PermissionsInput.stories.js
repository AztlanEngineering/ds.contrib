/* @fwrlines/generator-storybook-story 1.6.1 */
import * as React from 'react'
import { useEffect } from 'react'

//import { action } from '@storybook/addon-actions'

import { useForm, FormContextProvider,FormContextDebugger } from 'ds-form'
import { PermissionsInput } from 'ui'

/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'inputs/PermissionsInput',
  component    :PermissionsInput,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:PermissionsInput.Item
  },
  decorators:[
    /* storyfn => <div className="">{ storyfn() }</div>,
       storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
       storyfn => <Router>{ storyfn() }</Router>, */
  ]
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
  const defaultPermissionsList = [
    {
      type :'User',
      value:'can_create_user'
    },
    {
      type     :'User',
      value    :'can_edit_user',
      dangerous:true
    },
    {
      type     :'User',
      value    :'can_delete_user',
      dangerous:true
    },
    {
      type :'BlogPost',
      value:'can_create_blogpost'
    },
    {
      type :'BlogPost',
      value:'can_edit_blogpost',
    },
    {
      type     :'BlogPost',
      value    :'can_delete_blogpost',
      dangerous:true
    }
  ]

  return(
    <FormContextProvider>
      <PermissionsInput
        name='permissions'
        label='Permissions'
        optional={ true }
        description='Please select the right user permissions'
        defaultPermissionsList={defaultPermissionsList}
      />
      <FormContextDebugger/>
    </FormContextProvider>
  )
}

export const DefaultValues = () => {
  const defaultPermissionsList = [
    {
      type :'User',
      value:'can_create_user'
    },
    {
      type     :'User',
      value    :'can_edit_user',
      dangerous:true
    },
    {
      type     :'User',
      value    :'can_delete_user',
      dangerous:true
    },
  ]

  const Merger = () => {
    const { mergeValues } = useForm()
    useEffect(() => {
      mergeValues({
        permissions2:[
          'can_edit_user',
          'can_delete_user',
          'has_beta_access'
        ]
      })
    }, [])
    return null

  }

  return(
    <FormContextProvider>
      <Merger />
      <PermissionsInput
        name='permissions2'
        label='Permissions'
        optional={ true }
        description='Please select the right user permissions'
        defaultPermissionsList={defaultPermissionsList}
      />
      <FormContextDebugger/>
    </FormContextProvider>
  )
}

/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import { useEffect } from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import {
  Button,
  Card,
  DotInfo,
  MapContextProvider,
  MapListView as ListView,
  MapSingleView as SingleView,
  Shortener,
  Timestamp,
} from 'ui'

import QUERY_ONE from './graphql/getFruit.gql'
import QUERY_ALL from './graphql/allFruits.gql'
import MUTATION_ADD from './graphql/addFruit.gql'
import MUTATION_DELETE from './graphql/deleteFruit.gql'
import MUTATION_UPDATE from './graphql/updateFruit.gql'
import { AplProvider } from 'stories/utils'
import { Router } from 'stories/utils'
/* import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy'
    */
import { Route, useHistory, useParams } from 'react-router-dom'

import {
  urljoin as _u
} from '@fwrlines/utils'


//const endpoint = 'https://api.fwrlines.com/graphql'

const typeList = [{
  name        :'Fruit',
  plural:'fruits',
  // This will be accessible from `URLS.MAP.${urlKey}`
  urlKey      :'FRUITS',
  // Used to catch the relevant urls in the mapper
  baseUrl     :'fruits',
  defaultViews:{
    table:{
      initialState:{
        hiddenColumns:[
          'fullId',
          'createdAt',
          'updatedAt'
        ]
      },
      columns:[
        {
          Header  :'id',
          accessor:'id',
          Cell    :(v) =>
            <span className='f-mono'>
              { v.value.split('-').slice(0,1) }
            </span>
        },
        {
          Header  :'id (full)',
          accessor:'id',
          id      :'fullId',
          Cell    :(v) =>
            <span className='f-mono'>
              { v.value }
            </span>
        },
        {
          Header  :'Name',
          accessor:'name'
        },
        {
          Header  :'Taste',
          accessor:'taste'
        },
        {
          Header  :'Edible ?',
          accessor:'edible',
          Cell    :(v) => <DotInfo boolean={v.value}/>
        },
        {
          Header  :'$/Kilo',
          accessor:'pricePerKilo'
        },
        {
          Header  :'createdAt',
          accessor:'createdAt',
          Cell    :(v) =>
            <Timestamp time={ new Date(v.value) }/>
        },
        {
          Header  :'updatedAt',
          accessor:'updatedAt',
          Cell    :(v) => 
            <Timestamp time={ new Date(v.value) }/>
            //<Timestamp time={ v.value }/>
        },
        /*
        {
          Header  :'Visits',
          accessor:'visits'
        },
        {
          Header  :'Status',
          accessor:'status'
        },
        {
          Header  :'Profile Progress',
          accessor:'progress'
        }*/
      ]

    },
    card:{
      Component:({item, ...props}) => (
        <Card { ...props }>
          <Card.Section>
            <p className='h2'>{ item.name }</p>
          </Card.Section>
          <Card.Section>
            <p>{ item.id }</p>
          </Card.Section>
          <Card.Section>
            <p>
              This fruit tastes
              {' '}
              <strong>
                { item.taste }
              </strong>
            </p>
          </Card.Section>
        </Card>
      ),
      minWidth:'300px'
    },
    single:{
      fields:[
        {
          label   :'ID',
          name    :'id',
          inputId :'item-id',
          disabled:true,
        },
        {
          label  :'Name',
          name   :'name',
          inputId:'name',
        },
        {
          label  :'Taste',
          name   :'taste',
          inputId:'taste',
          type   :'textarea'
        },
        {
          label  :'Edible',
          name   :'edible',
          inputId:'edible',
          type   :'checkbox'
        },
        {
          label  :'$/Kilo',
          name   :'pricePerKilo',
          inputId:'pricePerKilo',
          type   :'tel',
        }
      ]

    }
  },
  actions:{
    defaultActions:{

    },
    extraActions:[
      {
        condition:(user) => true,
        Component:({ item }) => <Button>{ item.name }</Button>
      }
    ]

  },
  graphql:{
    queries:{
      ALL:QUERY_ALL,
      ONE:QUERY_ONE
    },
    mutations:{
      ADD   :MUTATION_ADD,
      DELETE:MUTATION_DELETE,
      UPDATE:MUTATION_UPDATE
    },
    types:{
      'edible'      :Boolean,
      'pricePerKilo':Number,
    }
  }
}]

export default {
  title        :'collections/map/All',
  component    :ListView,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    Item:ListView
  },
  parameters:{
    decorators:[
      /* storyfn => <MapContextProvider typeList={ typeList }>{  storyfn() }</MapContextProvider>,
         storyfn => <Route path='/:type' > { storyfn() } </Route>, */
      storyfn => <AplProvider>{ storyfn() }</AplProvider>,
      storyfn => <Router>{ storyfn() }</Router>,
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

export const List = () => {
  const Redirector = () => {
    const history=useHistory()

    useEffect(() =>
    {
      history.push('/fruits')
    }, [])
    return 'Redirected'

  }

  const basePath = '/'
  const typeUrlParam = ':type([0-9a-z-]{3,80})'
  const viewUrlParam = ':view([0-9a-z]{3,80})'
  const idUrlParam = ':guid([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})'
  //const redeemParam = ':slug([0-9a-f]{24})'

  const urls = {
  //LOGIN  :'login',
    list   :_u(basePath,),
    listAlt:_u(basePath,viewUrlParam),
    single :_u(basePath,idUrlParam),
    new    :_u(basePath,'new')
  }


  return (
    <MapContextProvider
      typeList={ typeList }
      testParam='fruits'
      routes={ urls }
    >
      <Route
        path={[
          urls.list,
          urls.listAlt

        ]}
        exact={ true }
      >
        <ListView/>
      </Route>
    </MapContextProvider>
  )

}

export const Single = () => {
  const Redirector = () => {
    const history=useHistory()

    useEffect(() =>
    {
      history.push('/fruits')
    }, [])
    return 'Redirected'

  }

  const basePath = '/'
  const typeUrlParam = ':type([0-9a-z-]{3,80})'
  const viewUrlParam = ':view([0-9a-z]{3,80})'
  const idUrlParam = ':guid([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})'
  //const redeemParam = ':slug([0-9a-f]{24})'

  const urls = {
  //LOGIN  :'login',
    list   :_u(basePath,),
    listAlt:_u(basePath,viewUrlParam),
    single :_u(basePath,idUrlParam),
    new    :_u(basePath,'new')
  }


  return (
    <MapContextProvider
      typeList={ typeList }
      testParam='fruits'
      routes={ urls }
    >
      <Route
        path={[
          urls.list,
          urls.listAlt

        ]}
        exact={ true }
      >
        <SingleView
          itemId='12b28d8b-cb0e-4be8-82eb-3f75768fd0a3'
        />
      </Route>
    </MapContextProvider>
  )

}

export const New = () => {

  const basePath = '/'
  const typeUrlParam = ':type([0-9a-z-]{3,80})'
  const viewUrlParam = ':view([0-9a-z]{3,80})'
  const idUrlParam = ':guid([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})'
  //const redeemParam = ':slug([0-9a-f]{24})'

  const urls = {
  //LOGIN  :'login',
    list   :_u(basePath,),
    listAlt:_u(basePath,viewUrlParam),
    single :_u(basePath,idUrlParam),
    new    :_u(basePath,'new')
  }


  return (
    <MapContextProvider
      typeList={ typeList }
      testParam='fruits'
      routes={ urls }
    >
      <Route
        path={[
          urls.single,
          urls.new,
          '/',

        ]}
        exact={ true }
      >
        <SingleView/>
      </Route>
    </MapContextProvider>
  )

}

//Default.parameters = storyParameters


//Variant.parameters = storyParameters

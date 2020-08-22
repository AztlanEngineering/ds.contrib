/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { Paginator } from 'ui'
import {
  ArrowButton,
  JumpButton,
  PageNumberButton,
  SpreadPageNumbersButtons,
} from 'ui/site/Paginator/common'
import { Router } from 'stories/utils'

//const endpoint = 'https://api.fwrlines.com/graphql'
import POSTS from '../mockData/testposts.json'

export default {
  title        :'site/Paginator',
  component    :Paginator,
  subcomponents:{
    'ArrowButton'             :ArrowButton,
    'JumpButton'              :JumpButton,
    'PageNumberButton'        :PageNumberButton,
    'SpreadPageNumbersButtons':SpreadPageNumbersButtons,
  },
  parameters:{
    decorators:[
      storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

var { docs, ...paginator } = POSTS

const { ...pagThree} = paginator
pagThree.page = 2
pagThree.totalPages = 3

const { ...pagNext} = paginator
pagNext.page = 1
pagNext.totalPages = 5

const { ...pagPrev} = paginator
pagPrev.page = 5
pagPrev.totalPages = 5

const { ...pagMulti} = paginator
pagMulti.page = 120
pagMulti.totalPages = 240

const getLink = (page) => `./blahhhh-${page}`

export const First = () => (
  <Paginator
    paginator={ pagNext }
    spread={ 2 }
    getLink={ getLink }
  />
)

export const Last = () => (
  <Paginator
    paginator={ pagPrev }
    spread={ 2 }
    getLink={ getLink }
  />
)

export const  ThreePages = () => (
  <Paginator
    buttonClassName='ks s2 x-grey'
    paginator={ pagThree }
    spread={ 4 }
    getLink={ getLink }
  />
)

export const Stretch = () => (
  <Paginator
    buttonClassName='ks s2 x-secondary'
    paginator={ pagThree }
    spread={ 4 }
    getLink={ getLink }
    stretch
  />
)

export const ManyPages = () => (
  <Paginator
    buttonClassName='ks s1 x-green'
    paginator={ pagMulti }
    spread={ 4 }
    getLink={ getLink }
  />
)

export const Current = () => (
  <Paginator
    buttonClassName='ks s1 x-blue'
    currentClassName='ks s1 x-red'
    paginator={ pagMulti }
    spread={ 4 }
    getLink={ getLink }
  />
)

export const Basic = () => (
  <Paginator
    buttonClassName='ks s1 x-blue'
    paginator={ pagThree }
    spread={ 4 }
    basic
    getLink={ getLink }
  />
)

export const CustomLabels = () => (
  <Paginator
    buttonClassName='ks s3 x-indigo'
    paginator={ pagThree }
    spread={ 4 }
    TEXT={{ PREV: 'GABADI', NEXT: 'GABADA' }}
    getLink={ getLink }
  />
)

export const NoLabels = () => (
  <Paginator
    buttonClassName='s-md x-grey'
    currentClassName='s-md x-azure'
    paginator={ pagThree }
    spread={ 4 }
    TEXT={{ }}
    getLink={ getLink }
  />
)


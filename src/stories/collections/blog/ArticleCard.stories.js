/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { BlogContextProvider, Card, ArticleCard } from 'ui'
import QUERY from './graphql/posts.graphql'
import { AplProvider } from 'stories/utils'
import { Router } from 'stories/utils'
/* import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

const endpoint = 'https://meccamico.com/graphql'

  const paginationParam = ':page([0-9]{1,5})'
  const slugUrlParam = ':slug([0-9a-z-]{5,80})'
  const categoryUrlParam = ':category([0-9a-z-]{5,80})'

export default {
  title        :'collections/blog/common/ArticleCard',
  component    :ArticleCard,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:ArticleCard.Item
  },
  parameters:{
    decorators:[
      storyfn => <BlogContextProvider
      routes={{

        BASE              :'/blog',
        HOME              :'/blog',
        HOME_PAGINATED    :`/blog/${paginationParam}`,
        CATEGORY          :`/blog/c/${categoryUrlParam}`,
        CATEGORY_PAGINATED:`/blog/c/${categoryUrlParam}/${paginationParam}`,
        SINGLE            :`/blog/${slugUrlParam}/`,
      }}
    >
      { storyfn() }</BlogContextProvider>,
      storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
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
const genFake = () => {
  return {
    id         :faker.random.uuid(),
    title      :faker.lorem.words(10),
    url        :faker.helpers.slugify(faker.commerce.productName()),
    description:faker.lorem.paragraph(3),
    main_image :'https://images.pexels.com/photos/821668/pexels-photo-821668.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    category   :{
      name:faker.commerce.department(),
      slug:faker.helpers.slugify(faker.commerce.productName()),

    },

  }
}

export const Default = () => {
  /*
  const genFake = () => {
    return {
      id         :faker.random.uuid(),
      title      :faker.lorem.words(10),
      category   :{
        name:faker.commerce.department(),

      },
      url        :faker.helpers.slugify(faker.commerce.productName()),
      description:faker.lorem.paragraph(3),
      main_image :'https://images.pexels.com/photos/821668/pexels-photo-821668.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'

    }
  }
    */

  const {
    url:slug,
    main_image:imageSrc,
    ...fake
  } = genFake()

  const propsToPass = {
    ...fake,
    slug,
    imageSrc
  }

  //This replicates the structure received from the gql api

  return(
    <div
      className='gt-resgrid'
      style={{
        '--grid-columns-md':'2',
        '--grid-columns-xs':'1',
        '--grid-gap'       :'.5em'
      }}
    >
      <ArticleCard
        className='y-green b-light-y'
        {
          ...propsToPass
        }

      />
      <ArticleCard
        className='y-blue b-dark-y ui-dark'
        {
          ...propsToPass
        }

      />
    </div>
  )

}

//Default.parameters = storyParameters

export const Grid = () => {

  const fakes = [...Array(20)].map(() =>{
    const {
      url:slug,
      main_image:imageSrc,
      ...fake
    } = genFake()

    const propsToPass = {
      ...fake,
      slug,
      imageSrc
    }

    return propsToPass
  }
  )


  //This replicates the structure received from the gql api

  return(
    <div
      className='gt-resgrid dense y-yellow b-y'
      style={{
        '--grid-columns-md':'4',
        '--grid-columns-xs':'1',
        '--grid-gap'       :'.5em',
        //gridAutoRows       :'1fr'
      }}
    >
      { fakes.map((e, i) =>
        <ArticleCard
          className='y-background b-y'
          size={

            ['lg','md', 'sm', 'md', 'sm', 'xs', 'xs', 'xs', 'sm', 'xs'][i % 10]
          }
          key={i}
          //className='y-green b-light-y'
          {
            ...e
          }

        />
      ) }
    </div>
  )

}

export const Xs = () => {


  const fakes = [...Array(20)].map(() =>{
    const {
      url:slug,
      main_image:imageSrc,
      ...fake
    } = genFake()

    const propsToPass = {
      ...fake,
      slug,
      imageSrc
    }

    return propsToPass
  }
  )


  //This replicates the structure received from the gql api

  return(
    <div
      className='gt-resgrid dense y-yellow b-y'
      style={{
        '--grid-columns-md':'4',
        '--grid-columns-xs':'1',
        '--grid-gap'       :'.5em',
        //gridAutoRows       :'1fr'
      }}
    >
      { fakes.map((e, i) =>
        <ArticleCard
          className='y-background b-y'
          size={
            'xs'

          }
          key={i}
          //className='y-green b-light-y'
          {
            ...e
          }

        />
      ) }
    </div>
  )

}

export const Sm = () => {

  const fakes = [...Array(20)].map(() =>{
    const {
      url:slug,
      main_image:imageSrc,
      ...fake
    } = genFake()

    const propsToPass = {
      ...fake,
      slug,
      imageSrc
    }

    return propsToPass
  }
  )


  //This replicates the structure received from the gql api

  return(
    <div
      className='gt-resgrid dense y-yellow b-y'
      style={{
        '--grid-columns-md':'4',
        '--grid-columns-xs':'1',
        '--grid-gap'       :'.5em',
        //gridAutoRows       :'1fr'
      }}
    >
      { fakes.map((e, i) =>
        <ArticleCard
          className='y-background b-y'
          size={
            'sm'

          }
          key={i}
          //className='y-green b-light-y'
          {
            ...e
          }

        />
      ) }
    </div>
  )

}

export const Md = () => {


  const fakes = [...Array(20)].map(() =>{
    const {
      url:slug,
      main_image:imageSrc,
      ...fake
    } = genFake()

    const propsToPass = {
      ...fake,
      slug,
      imageSrc
    }

    return propsToPass
  }
  )


  //This replicates the structure received from the gql api

  return(
    <div
      className='gt-resgrid dense y-yellow b-y'
      style={{
        '--grid-columns-md':'4',
        '--grid-columns-xs':'1',
        '--grid-gap'       :'.5em',
        //gridAutoRows       :'1fr'
      }}
    >
      { fakes.map((e, i) =>
        <ArticleCard
          className='y-background b-y'
          size={

            'md'
          }
          key={i}
          //className='y-green b-light-y'
          {
            ...e
          }

        />
      ) }
    </div>
  )

}


export const Lg = () => {

  const fakes = [...Array(20)].map(() =>{
    const {
      url:slug,
      main_image:imageSrc,
      ...fake
    } = genFake()

    const propsToPass = {
      ...fake,
      slug,
      imageSrc
    }

    return propsToPass
  }
  )


  //This replicates the structure received from the gql api

  return(
    <div
      className='gt-resgrid dense y-yellow b-y'
      style={{
        '--grid-columns-md':'4',
        '--grid-columns-xs':'1',
        '--grid-gap'       :'.5em',
        //gridAutoRows       :'1fr'
      }}
    >
      { fakes.map((e, i) =>
        <ArticleCard
          className='y-background b-y'
          size={
            'lg'

          }
          key={i}
          //className='y-green b-light-y'
          {
            ...e
          }

        />
      ) }
    </div>
  )

}

//Variant.parameters = storyParameters

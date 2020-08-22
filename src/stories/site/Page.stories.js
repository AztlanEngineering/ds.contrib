/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'


import { Page, InnerContent, Heading } from 'ui'
import { LocalHelmet } from 'ui/site/Page/common'
import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils'

export default {
  title        :'site/Page',
  component    :Page,
  subcomponents:{
    'Section':Page.Section,

    'LocalHelmet':LocalHelmet
  },
  parameters:{
    decorators:[
      //storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

const id = 'homepage'
const titles = [

  {
    classname:'uc',
    heading         :'Spartacus',
    subtitle        :'Stanley Kubrick, 1960',
    headingAs       :'h1',
    label           :'Film',
    labelClassName  :'x-red basic',
    headingClassName:'ts-green'
  },
  {
    heading       :'Lolita',
    subtitle      :'Stanley Kubrick, 1962',
    headingAs     :'h2',
    label         :'Today\'s cinema',
    labelClassName:'x-orange'
  },
  {
    heading       :'Dr. Strangelove',
    subtitle      :'Stanley Kubrick, 1964',
    headingAs     :'h3',
    label         :'Movie time',
    labelClassName:'x-red'
  },
]

const helmet = {
  robots             :'noindex, nofollow',
  title              :'test of the title',
  title_tag          :'this should appear in the title tag',
  canonical          :'https://home.com/description',
  meta_description   :'This is the meta description. 170 chars.',
  twitter_title      :'For twitter, a title',
  twitter_description:'',
  twitter_image      :'',
  og_title           :'This is the open graph title',
  og_description     :'',
  og_image           :'',
  og_type            :'',
  og_url             :'',
}


export const Default = () => (
  <Page id={ id }>
    READ SOURCE
  </Page>
)
export const DefaultWithSchema = () => (
  <Page
    id={ id }
    itemType='https://schema.org/FAQPage'
    canonical='meccamico.com/blah'
    HELMET={ helmet }
  >
    FAQ/PAGE READ SOURCE
  </Page>
)
export const Head = () => (
  <Page id={ id }>
    <Page.Section
      head
      id='head'
      HELMET={ helmet }
      className='pu u2'
    >

      <Heading
        { ...titles[0] }
      />
      <p>See source code to check for meta</p>
    </Page.Section>
  </Page>
)
export const HeadWithSchema = () => (
  <Page
    id={ id }
    itemType='https://schema.org/FAQPage'
    HELMET={ helmet }
  >
    <Page.Section
      head
      className='pu u2'
      id='head'
    >

      <Heading
        { ...titles[0] }
      />
      <p>See source code to check for meta</p>
    </Page.Section>
  </Page>

)
export const Plural = () => (
  <Page id={ id }>
    <Page.Section
      head
      className='pu u2'
      id='head'
    >

      <Heading
        { ...titles[0] }
      />
    </Page.Section>
    <Page.Section
      id='a1'
      className='pu u2'
    >
      <h2>Section A1</h2>
      <p>{ TEXT_XXS_ESC }</p>

    </Page.Section>
    <Page.Section
      id='a2'
      className='pu u2'
    >
      <h2>Section A2</h2>
      <p>{ TEXT_XXS_ESC }</p>

    </Page.Section>
  </Page>
)
export const PluralCaretDown = () => (
  <Page id={ id }>
    <Page.Section
      head
      id='head'
      caretDown='a1'
      className='pu u2'
    >

      <Heading
        { ...titles[0] }
      />
    </Page.Section>
    <Page.Section
      id='a1'
      caretDown='a2'
      className='pu u2'
    >
      <h2>Section A1</h2>
      <p>{ TEXT_XXS_ESC }</p>

    </Page.Section>
    <Page.Section
      id='a2'
      className='pu u2'
    >
      <h2>Section A2</h2>
      <p dangerouslySetInnerHTML={{ __html: TEXT_XS }}></p>

    </Page.Section>
  </Page>
)

export const Content = () => (
  <Page id={ id }>
    <Page.Section
      head
      id='head'
      caretDown='a1'
      className='pu u2'
    >

      <Heading
        { ...titles[0] }
      />
    </Page.Section>
    <Page.Section
      id='a1'
      className='pu u2'
    >
      <InnerContent
        dangerouslySetInnerHTML={{ __html: TEXT }}
      />

    </Page.Section>
  </Page>
)


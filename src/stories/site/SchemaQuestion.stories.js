/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

import { SchemaQuestion } from 'ui'

import { QA } from '../utils'

export default {
  title        :'site/SchemaQuestion',
  component    :SchemaQuestion,
  subcomponents:{
    'Question':SchemaQuestion.Question,
    'Answer'  :SchemaQuestion.Answer
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
  QA.map(({__html, ...e},i) =>
    <SchemaQuestion key={i}>
      <SchemaQuestion.Question
        id={ e.anchor }
        as='h2'
      >
        {e.Q}
      </SchemaQuestion.Question>
      <SchemaQuestion.Answer
        dangerouslySetInnerHTML={{__html}}
      >
      </SchemaQuestion.Answer>

    </SchemaQuestion>
  )

)

export const BackTo = () => (
  QA.map(({__html, ...e},i) =>
    <SchemaQuestion key={i}>
      <SchemaQuestion.Question
        id={ e.anchor }
        as='h2'
      >
        {e.Q}
      </SchemaQuestion.Question>
      <SchemaQuestion.Answer
        backTo
        dangerouslySetInnerHTML={{__html}}
      >
      </SchemaQuestion.Answer>

    </SchemaQuestion>
  )
)


export const BackToCustomText = () => (
  QA.map(({__html, ...e},i) =>
    <SchemaQuestion key={i}>
      <SchemaQuestion.Question
        id={ e.anchor }
        as='h2'
      >
        {e.Q}
      </SchemaQuestion.Question>
      <SchemaQuestion.Answer
        backTo
        backToHTML='Ritornare arriba'
        dangerouslySetInnerHTML={{__html}}
      >
      </SchemaQuestion.Answer>

    </SchemaQuestion>
  )
)


export const BackToCustomAnchor = () => (
  QA.map(({__html, ...e}, i) =>
    <SchemaQuestion key={i}>
      <SchemaQuestion.Question
        id={ e.anchor }
        as='h4'
      >
        {e.Q}
      </SchemaQuestion.Question>
      <SchemaQuestion.Answer
        backTo={ QA[1].anchor }
        backToHTML='Return to Q2'
        dangerouslySetInnerHTML={{__html}}
      >
      </SchemaQuestion.Answer>

    </SchemaQuestion>
  )
)


export const AsH2 = () => (
  QA.map(({__html, ...e},i) =>
    <SchemaQuestion key={i}>
      <SchemaQuestion.Question
        id={ e.anchor }
        as='h2'
      >
        {e.Q}
      </SchemaQuestion.Question>
      <SchemaQuestion.Answer
        backTo
        backToHTML='Ritornare arriba'
        dangerouslySetInnerHTML={{__html}}
      >
      </SchemaQuestion.Answer>

    </SchemaQuestion>
  )
)



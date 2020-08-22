import * as React from 'react'
import { Meta, Typeset } from '@storybook/addon-docs/blocks'
import {
  FONT_FAMILY_PARAGRAPH,
  FONT_FAMILY_HEADINGS
} from './config'

export default {
  title:'Typography'
}

const paragraph_text = `Depending on the angle of approach, comets and asteroids straying too close to Saturn in the early solar system would have become locked into radically different orbits around the planet. Only three of the new moons have so-called prograde orbits, meaning they circle Saturn in the same direction that it rotates. The other 17 are in retrograde orbits, meaning they orbit the planet backwards. One is the most distant moon ever spotted from the planet. Please call this number for more information 555-119-0285.`

export const HeadingTypeset = () => (
  <Typeset
    fontSizes={
      [
        '-3',
        '-2',
        '-1',
        0,
        1,
        2,
        3,
        4,
        5,
        6,
      ].map((e) => `calc(var(--s${e}) * 1rem)`)
    }
    fontWeight={'bold'}
    sampleText={'Voix ambiguë d\'un cœur qui, au zéphyr, préfère les jattes de kiwis'}
    fontFamily={ FONT_FAMILY_HEADINGS }
  />
)

export const ParagraphTypeset = () => (
  <Typeset
    fontSizes={
      [
        '-3',
        '-2',
        '-1',
        0,
        1,
        2,
        3,
        4,
        5,
        6,
      ].map((e) => `calc(var(--s${e}) * 1rem)`)
    }
    fontWeight={'bold'}
    sampleText={'Voix ambiguë d\'un cœur qui, au zéphyr, préfère les jattes de kiwis'}
    fontFamily={ FONT_FAMILY_PARAGRAPH }
  />
)

export const text_variables = () =>
  <>
    {
      ['tl', 'ti', 'ts', 'tsm', 'tb', 'tu', 'tv', 'tw', 'tos','to', 'tn'].map((e, i) =>
        <p
          className={e + ' x-primary c-x'}
          key={i}
        >
          { e }
          { ' : ' }
          { paragraph_text}
        </p>
      )
    }
  </>

text_variables.story = {
  name:'Text classes'
}

export const align = () =>
  <>
    {
      ['ul', 'ur', 'uc', 'uj', 'xs-ul uc', 'xs-uc ul', 'md-ur sm-uj'].map((e, i) =>
        <p
          className={e}
          key={i}
        >
          { e }
          { ' : ' }
          { paragraph_text}
        </p>
      )
    }
  </>

align.story = {
  name:'Paragraph alignment'
}

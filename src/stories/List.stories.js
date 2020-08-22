import * as React from 'react'

export default {
  title:'List',
}

const elements = [
  '1 brocoli',
  '1kg of oranges',
  '6 apples',
  'Some dried raisins',
  'This exotic ingredient that\'s hard to find',
  'Three pieces of garlinc',
]

export const UnorganizedList = () =>(
  <ul>
    { elements.map((e,i) =>
      <li key={ i }>{ e }</li>
    ) }
  </ul>

)

export const OrganizedList = () =>(
  <ol>
    { elements.map((e,i) =>
      <li key={ i }>{ e }</li>
    ) }
  </ol>

)

export const Compact = () =>(
  <>
    <ul className='compact'>
      { elements.map((e,i) =>
        <li key={ i }>{ e }</li>
      ) }
    </ul>
    <ol className='compact'>
      { elements.map((e,i) =>
        <li key={ i }>{ e }</li>
      ) }
    </ol>
  </>

)

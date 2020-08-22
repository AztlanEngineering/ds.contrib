/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'

import { NumberIncrease } from 'ui'

export default {
  title     :'common/NumberIncrease',
  component :NumberIncrease,
  parameters:{
    decorators:[
      //storyfn => <div className="">{ storyfn() }</div>,
    ]
  }
}

const variants = [
  {
    number  :100,
    duration:1000,
  },
  {
    number  :1000,
    duration:1000,
  },
  {
    number  :100,
    duration:1000,
  },
  {
    number  :100,
    duration:5000,
    suffix  :'km'
  },
  {
    number  :1000,
    duration:5000,
  },
  {
    number  :100,
    duration:5000,
    suffix  :'years'
  },
]

export const Default = () =>(
  <div className='p1'>
    <p>Num 100 | Duration : 1000</p>
    <NumberIncrease
      number={100}
      duration={1000}
      className='s3 ks'
    />
  </div>
)

export const OtherWrapper = () =>(
  <div className='p1'>
    <p>Wrrapper H2 | Num 100 | Duration : 1000</p>
    <NumberIncrease
      number={100}
      duration={1000}
      className='s3 ks'
      as='h2'
    />
  </div>
)

export const Variants = () =>(
  variants.map((e,i) =>
    <div
      className='p1'
      key={i}
    >
      <p>
        Num
        { e.number }
        {' '}
        | Duration :
        { e.duration }
        { e.suffix && ' | Suffix : ' + e.suffix }
      </p>
      <NumberIncrease
        number={ e.number }
        duration={ e.duration }
        className='s3 ks'
      />
    </div>

  )
)

export const WithSuffix = () =>(
  <>
    <p>Num 100 | Duration : 1000</p>
    <NumberIncrease
      number={100}
      duration={1000}
      suffix={ 'km' }
    />
  </>
)

export const WithSuffixClass = () => (
  variants.map((e,i) =>
    <>
      <p>
        Num
        { e.number }
        {' '}
        | Duration :
        { e.duration }
        { e.suffix && ' | Suffix : ' + e.suffix }
      </p>
      <NumberIncrease
        number={ e.number }
        duration={ e.duration }
        suffix={ i % 2 == 0 ? 'km' : 'years' }
        className='s2 ks'
        suffixClassName={ i % 2 == 0 ? 'c-x x-red' : 'c-x x-green' }
      />
    </>
  )
)


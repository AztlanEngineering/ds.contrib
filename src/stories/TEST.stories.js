import * as React from 'react'

export default {
  title:'TEST ALPHABET SCSS',
}

/* hello => <div class='hello'></div>
   x-red x-primary x-warning x-black y-blue z-blue z-yellow
   c-x c-y c-z
   b-x b-y
   d-x
   e-x


   x-red => var(--x) var(--light-x) var(--dark-x) var(--on-x)


    */

const classesTests = [
  'x-red c-x', //should be col red
  'y-red c-y', //should be col red
  'z-red c-z', //should be col red
  'z-green b-light-z', //should be back light red
  'z-green b-z', //should be back light red
  'z-green b-dark-z', //should be back dark red
  'x-red c-z', //shouldnt work
  'x-red b-x', //should be back red
  'x-primary b-x', //should be back primary
  'x-red b-x c-on-x', //should be back red
]

export const Colors = () =>(
  classesTests.map(e =>
    <h3 className={e}>
      Hello from SB
      <h4 className='b-light-x'>Light color here</h4>
    </h3>
  )
)

const sizesTest = [
  's0 k-s', //should be parent size
  's-1 k-s', //should be 1.2 * parent size
  's-2 k-s', //should be 1.2 * 1.2 * parent size
  't5 k-t', //should be 1.2^6 * parent size
  't5 l-t', //should be 1.2^6 * root size
  'x-red b-x u2 ph-u v4 pv-v', //padding should be 2 em * root size
]

export const Sizes = () =>(
  <div style={{fontSize: '40px'}}>
    { sizesTest.map(e =>
      <div className={e}>
        <h1 className='s0 k-s'>Should be parents size</h1>
        <p className='s-2 k-s'>Subtitle equals to 1/1.44 the size of the parent</p>
        <br/>
        <br/>
      </div>
    ) }
  </div>
)


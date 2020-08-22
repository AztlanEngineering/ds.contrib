/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'
import {ALL_COLORS, SIZES } from '../config.js'


import { SVG } from 'ui'

export default {
  title     :'common/SVG',
  component :SVG,
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

export const Default = () => (
  <SVG
    height='200'
    width='200'
    target='engine'
    className='x-black'
  />
)

export const Stroke = () => (
  <SVG
    height='200'
    width='200'
    target='engine'
    className='y-green'
  />

)

export const Animated = () => (
  <>
    <SVG
      height='200'
      width='200'
      target='engine'
      className='y-red'
      animated
    />
    <SVG
      height='200'
      width='200'
      target='engine'
      className='y-indigo'
      animated
      style={{
        '--svg-odo':100, // Origin dash offset
        '--svg-tdo':10000, // Target dash offset
        '--svg-at' :'10s', //Duration
        '--svg-ar' :'3', //Repeats
        '--svg-sw' :9 // Stroke width
      }}
    />
    <SVG
      height='200'
      width='200'
      target='engine'
      className='y-red'
      style={{
        '--svg-odo':5000, // Origin dash offset
        '--svg-tdo':0, // Target dash offset
        '--svg-at' :'20s', //Duration
        '--svg-ar' :'infinite' //Repeats
      }}
      animated
    />
  </>
)

export const FillColors = () => (
  ALL_COLORS.map((e,i) =>
    <>
      <span>{ e }</span>
      <SVG
        key={i}
        height='200'
        width='200'
        target='engine'
        className={'x-' + e}
      />
    </>
  )
)

export const StrokeColors = () => (
  ALL_COLORS.map((e,i) =>
    <>
      <span>{ e }</span>
      <SVG
        key={i}
        height='200'
        width='200'
        target='engine'
        stroke
        anim
        className={'y-' + e}
      />
    </>
  )
)

export const IsoTest = () => (
  <SVG
    height='512'
    width='512'
    sprite='/sprite-iso.svg'
    target='iso-car'
    //className='x-black'
  />
)

import * as React from 'react'

export default {
  title     :'Grid',
  //component :AnimatedVCaret,
  parameters:{
    decorators:[
      storyfn => <div className='g'>{ storyfn() }</div>,
    ]
  }
}


const columns = [
  {
    width:1,
    back :'azure'
  },
  {
    width:2,
    back :'secondary'
  },
  {
    width:3,
    back :'violet'
  },
  {
    width:4,
    back :'olive'
  },
  {
    width:5,
    back :'indigo'
  },
  {
    width:6,
    back :'accent3'
  },
  {
    width:7,
    back :'blue'
  },
  {
    width:8,
    back :'grey'
  },
  {
    width:9,
    back :'yellow'
  },
  {
    width:10,
    back :'orange'
  },
  {
    width:11,
    back :'green'
  },
  {
    width:12,
    back :'red'
  },
]

export const Default = () =>
  columns.map((e) =>
    <div
      className={ 'g' + e.width + ' b-x x-' + e.back }
      style={{ height: '200px' }}
    >
      { 'Column '+ e.width + ' wide' }
    </div>
  )

export const SM = () =>
  columns.map((e) =>
    <div
      className={ 'g' + e.width + '-sm b-x x-' + e.back }
      style={{ height: '200px' }}
    >
      { 'Column '+ e.width + ' wide' }
    </div>
  )

export const MD = () =>
  columns.map((e) =>
    <div
      className={ 'g' + e.width + '-md b-x x-' + e.back }
      style={{ height: '200px' }}
    >
      { 'Column '+ e.width + ' wide' }
    </div>
  )

export const LG = () =>
  columns.map((e) =>
    <div
      className={ 'g' + e.width + '-lg b-x x-' + e.back }
      style={{ height: '200px' }}
    >
      { 'Column '+ e.width + ' wide' }
    </div>
  )

export const ColumnGaps = () =>
  ['02', '05', '1', '2'].map((f) =>
    <div className={'g i' + f}>
      {columns.map((e) =>
        <div
          className={ 'g1 b-x x-' + e.back }
          style={{ height: '200px' }}
        >
          { 'Col '+ e.width + ' wide' }
        </div>
      )}
    </div>
  )


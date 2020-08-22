import React from 'react'
import { Link } from 'react-router-dom'
import { TransparentButton } from 'ui/common'

const BottomNav = (props) =>
  <div
    className='row b-wt'
    id={ props.id + '_nav' }
  >
    <div className='d-xs-16 d-sm-12 ol-sm-2 d-md-10 ol-md-3 ph1'>
      <div className='l'>
        { props.prev &&
        <TransparentButton
          left
          onClick={ props.handlePrev }
        >
          <span className='h-xs h-sm'>
            { props.prev }
          </span>
          <span className='h-lg h-md'>
            { props.prev_small }
          </span>
        </TransparentButton>}
      </div>
      <div className='ur r'>
        <button
          className={
            'ui circular button right labeled icon'
						+ (!props.disabled ? ' green' : '')
          }
          disabled={props.disabled}
          onClick={ props.handleNext }
        >
          <span className='h-xs h-sm'>
            { props.next }
          </span>
          <span className='h-lg h-md'>
            { props.next_small }
          </span>
          <i className='right arrow icon'></i>
        </button>
      </div>
    </div>
  </div>

export default BottomNav

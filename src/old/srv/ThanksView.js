import React, { useContext } from 'react'
import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { THANKS_VIEW as T } from './text'

import { cssClasses as C } from 'ui'

import {
  TransparentButton
} from 'ui/common'

const ThanksView = (props) => {
  const {
    mobile_phone
  } = useContext(SC)
  return(
    <div className={
		  'row uc pv3 ph1 thanks'
			+ (props.color ? ' t ' + props.color : '')
      + (props.inverted ? ' ' + C.inverted : '')
    }
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='154px'
        height='154px'
        id='green_tick'
      >
        <g
          fill='none'
          stroke='#F44812'
          strokeWidth='2'
        >
          <circle
            id='outline'
            cx='77'
            cy='77'
            r='72'
            //style='stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;'
          >
          </circle>
          <circle
            id='colored'
            fill='#F44812'
            cx='77'
            cy='77'
            r='72'
            //style='stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;'
          >
          </circle>
          <polyline
            id='line'
            className='st0'
            points='43.5,77.8 63.7,97.9 112.2,49.4'
          />
        </g>
      </svg>
      <p>{ T.SUB }</p>
      <p className='small'>
        { T.SUB_2 }
        {' '}
        { mobile_phone.value }
      </p>
      <div className='uc pv2'>
        <TransparentButton
          right
          link={ props.next || '/' }
          light={ props.inverted }
        >
          { props.nextText || T.NEXT_TEXT }
        </TransparentButton>
      </div>

    </div>
  )}

export default ThanksView

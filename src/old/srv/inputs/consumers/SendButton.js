import React, { useEffect, useState, useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'
import { trackButton } from 'ui/form'

import {
  SEND_BUTTON as T
} from '../text'

const SendButton = ({ callback=()=>null }) => {
  const {
    ready,
    mutation_in_progress:loading,
    submit,
    success,
    color,
    loadingColor
  } = useContext(SC)

  /* if (confirm == -1) buttonData = T.S_1
     else if (confirm == 0) buttonData = T.S_2 */

  function onButtonClick(e){
    trackButton('confirm request')
    submit(e)
  }

  useEffect(() => { if (success) callback() },[callback, success])

  return (
    <button
      className={
        'ui circular confirm button'
				//+ (!ready ? ' orange' : '')
				+ (!(loading || success) ? ' ' + (color || T.S_1.color) : '')
				+ (loading ? ' loading ' + (loadingColor || T.S_2.color) : '')
				+ (success ? ' '  + T.S_3.color : '')
      }
      disabled={!ready}
      onClick={ !(!ready || loading || success) ? onButtonClick : undefined}
      dangerouslySetInnerHTML={ !loading ? (!success ? T.S_1 : T.S_3) : undefined }
    >
      { loading ? <>&nbsp;</> : null}
    </button>
  )
}

export default SendButton

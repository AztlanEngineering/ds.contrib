import React, { useState, useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'
import { trackButton } from 'ui/form'

import {
  ROW_SEND_BUTTON as T
} from '../text'

const SendButton = (props) => {
  const {
    ready,
    mutation_in_progress:loading,
    submit,
  } = useContext(SC)

  const [ confirm, setConfirm ] = useState(0)

  var buttonData
  /* if (confirm == -1) buttonData = T.S_1
     else if (confirm == 0) buttonData = T.S_2 */
  if (confirm == 0) buttonData = T.S_1
  else if (confirm == 1) buttonData = T.S_2

  function onButtonClick(e){
    switch (confirm) {
    case 0:
      trackButton('confirm request')
      setConfirm(confirm + 1)
      submit(e)
      break
    case 1:
      break
    }
  }

  return (
    <button
      className={
        'row large ui green button right labeled icon'
				+ (loading ? ' loading' : '')}
      disabled={!ready}
      onClick={ onButtonClick }
    >
      { loading ? <>&nbsp;</> :
      <>
          <p
          className='nm'
          dangerouslySetInnerHTML={ !loading ? buttonData : null }
        />
          <i className='right arrow icon'></i>
        </>}
    </button>
  )
}

export default SendButton

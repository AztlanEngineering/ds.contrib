import React from 'react'

const ValidMessage = ({ rfn, message }) =>
  <div className='pv4 t green uc'>
    { rfn &&
    <p>{ message }</p>
    }
  </div>

export default ValidMessage

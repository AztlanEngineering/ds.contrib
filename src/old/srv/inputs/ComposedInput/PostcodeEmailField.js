import React, { useContext, useEffect } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { BaseTextInput } from 'ui/form'

import EmailActionField from '../BaseActionTextInput/EmailActionField'
import PostcodeField from '../BaseTextInput/PostcodeField'

import {
  POSTCODE_EMAIL_FIELD as T
} from '../text'

const PostcodeEmailField = ({setValidState, ...props}) => {
  const {
    postcode,
    handleFormChange
  } = useContext(SC)

  useEffect(() => { !postcode.valid && setValidState(false) }, [postcode, setValidState])

  return(
    <>
      <PostcodeField
        { ...props }
      />
      { postcode.valid &&
      <div className='row ulcc'>
        <p>{ T.CONFIRM }</p>
        <div className='row pv05'>
          <iframe
            className='d-xs-16 d-md-10'
            height='250'
            frameBorder='0'
            style={{border:0}}
            src={
																				            'https://www.google.com/maps/embed/v1/place?zoom=12&q=Postcode%20'
																										                + postcode.value
																				                +'%20Italy&key=AIzaSyClbvlm9Xk0e6-jzjRrkEVrRwTQcovRZNg'
				          }
            allowFullScreen
          >
          </iframe>
        </div>

        <button
          className='ui green right labeled icon button'
          onClick={ () => setValidState(true) }
        >
          { T.BUTTON }
          <i className='checkmark icon'></i>
        </button>
      </div>
      }
      { postcode.error &&
      <EmailActionField
        label={ T.UNAVAILABLE }
        className='d-xs-16'
        displayError
      />
	 }
    </>
  )
}

export default PostcodeEmailField

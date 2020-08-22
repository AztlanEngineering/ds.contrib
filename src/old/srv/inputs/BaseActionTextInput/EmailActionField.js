import React, { useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { BaseActionTextInput } from 'ui/form'

import {
  EMAIL_FIELD as T,
  FORM_DEFAULT_PREFIX as P
} from '../text'

const EmailField = (props) => {
  const {
    email:inputDict,
    handleFormChange:onChange,
    loading_waitlist,
    success_waitlist,
    submitWaitlist,
  } = useContext(SC)
  return(
    <>
      <BaseActionTextInput
        prefix={ props.prefix || P }
        label={ props.label ? (props.label !== true) ? props.label : T.LABEL : undefined }
        coloredLabel={ props.coloredLabel }
        coloredError={ props.coloredError }
        className={ props.className }
        name='email'
        inputValue={ inputDict.value }
        icon={ 'envelope outline' }
        onChange={ onChange }
        placeholder={ props.placeholder || T.PLACEHOLDER }
        valid={ inputDict.valid }
        error={ inputDict.error }
        displayError={ props.displayError }
        button={ T.ACTION }
        buttonOnClick={ submitWaitlist }
        buttonIcon='right arrow'
        buttonClassName=''
        buttonLoading={loading_waitlist}
        buttonSuccess={success_waitlist && T.SUCCESS }
      />
      <p className='small'>
        { T.NOTICE }
        {' '}
        <span dangerouslySetInnerHTML={{__html:T.PRIVACY}}></span>
      </p>
    </>
  )
}

export default EmailField

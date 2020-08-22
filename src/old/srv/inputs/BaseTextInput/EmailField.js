import React, { useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { BaseTextInput } from 'ui/form'

import {
  EMAIL_FIELD as T,
  FORM_DEFAULT_PREFIX as P
} from '../text'

const EmailField = (props) => {
  const {
    email:inputDict,
    handleFormChange:onChange
  } = useContext(SC)
  return(
    <BaseTextInput
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
    />
  )
}

export default EmailField

import React, { useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { BaseTextInput } from 'ui/form'

import {
  FIRST_NAME_FIELD as T,
  FORM_DEFAULT_PREFIX as P
} from '../text'

const FirstNameField = (props) => {
  const {
    first_name:inputDict,
    handleFormChange:onChange
  } = useContext(SC)
  return(
    <BaseTextInput
      prefix={ props.prefix || P }
      label={ props.label ? (props.label !== true) ? props.label : T.LABEL : undefined }
      coloredLabel={ props.coloredLabel }
      coloredError={ props.coloredError }
      className={ props.className }
      name='first_name'
      inputValue={ inputDict.value }
      icon={ 'user' }
      onChange={ onChange }
      placeholder={ props.placeholder || T.PLACEHOLDER }
      valid={ inputDict.valid }
      error={ inputDict.error }
      displayError={ props.displayError }
    />
  )
}

export default FirstNameField

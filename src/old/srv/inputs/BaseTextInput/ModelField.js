import React, { useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { BaseTextInput } from 'ui/form'

import {
  MODEL_FIELD as T,
  FORM_DEFAULT_PREFIX as P
} from '../text'

const ModelField = (props) => {
  const {
    model:inputDict,
    handleFormChange:onChange,
    moto
  } = useContext(SC)
  const is_moto = Boolean(Number(moto.value))
  return(
    <BaseTextInput
      prefix={ props.prefix || P }
      className={ props.className }
      label={ props.label ? (props.label !== true) ? props.label : T.LABEL : undefined }
      coloredLabel={ props.coloredLabel }
      coloredError={ props.coloredError }
      name='model'
      inputValue={ inputDict.value }
      icon={ props.moto ? 'motorcycle' : is_moto ? 'motorcycle' : 'car' }
      onChange={ onChange }
      placeholder={ props.placeholder || T.PLACEHOLDER }
      valid={ inputDict.valid }
      error={ inputDict.error }
      displayError={ props.displayError }
    />
  )
}

export default ModelField

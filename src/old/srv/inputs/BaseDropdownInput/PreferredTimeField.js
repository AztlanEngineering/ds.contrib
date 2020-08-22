import React, { useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { BaseDropdownInput } from 'ui/form'

import {
  PREFERRED_TIME_FIELD as T,
  FORM_DEFAULT_PREFIX as P
} from '../text'

const PreferredTimeField = (props) => {
  const {
    preferred_time:inputDict,
    handleFormDropdownChange:onChange
  } = useContext(SC)
  return(
    <BaseDropdownInput
      prefix={ props.prefix || P }
      className={ props.className }
      name='preferred_time'
      inputValue={ inputDict.value }
      label={ props.label ? (props.label !== true) ? props.label : T.LABEL : undefined }
      coloredLabel={ props.coloredLabel }
      coloredError={ props.coloredError }

      //icon={ props.moto ? 'motorcycle' : 'car' }
      onChange={ onChange }
      placeholder={ props.placeholder || T.PLACEHOLDER }
      options={ T.OPTIONS }
      valid={ inputDict.valid }
      error={ inputDict.error }
      displayError={ props.displayError }
    />
  )
}

export default PreferredTimeField

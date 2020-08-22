import React, { useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { BaseTextInput } from 'ui/form'

import {
  YEAR_FIELD as T,
  FORM_DEFAULT_PREFIX as P
} from '../text'

const YearField = (props) => {
  const {
    year:inputDict,
    handleFormChange:onChange
  } = useContext(SC)
  return(
    <BaseTextInput
      prefix={ props.prefix || P }
      className={ props.className }
      name='year'
      inputValue={ inputDict.value }
      label={ props.label ? (props.label !== true) ? props.label : T.LABEL : undefined }
      coloredLabel={ props.coloredLabel }
      coloredError={ props.coloredError }

      icon={ 'calendar outline' }
      onChange={ onChange }
      placeholder={ props.placeholder || T.PLACEHOLDER }
      type='tel'
      valid={ inputDict.valid }
      error={ inputDict.error }
      displayError={ props.displayError }
    />
  )
}

export default YearField

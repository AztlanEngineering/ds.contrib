import React, { useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { BaseTextInput } from 'ui/form'

import {
  POSTCODE_FIELD as T,
  FORM_DEFAULT_PREFIX as P
} from '../text'

const PostcodeField = (props) => {
  const {
    postcode:inputDict,
    handleFormChange:onChange
  } = useContext(SC)
  return(
    <BaseTextInput
      prefix={ props.prefix || P }
      className={ props.className }
      name='postcode'
      label={ props.label ? (props.label !== true) ? props.label : T.LABEL : undefined }
      coloredLabel={ props.coloredLabel }
      coloredError={ props.coloredError }

      inputValue={ inputDict.value }
      icon={ 'map marker alternate' }
      onChange={ props.onChange || onChange }
      type='tel'
      placeholder={ props.placeholder || T.PLACEHOLDER }
      valid={ inputDict.valid }
      error={ inputDict.error }
      displayError={ props.displayError }
    />
  )
}

export default PostcodeField

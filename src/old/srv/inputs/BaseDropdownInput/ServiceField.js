import React, { memo, useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { BaseDropdownInput } from 'ui/form'

import {
  SERVICE_FIELD as T,
  FORM_DEFAULT_PREFIX as P
} from '../text'

import { alphaSort } from 'utils'

const ServiceField = (props) => {
  const {
    moto,
    service:inputDict,
    selected_service,
    handleFormDropdownChange:onChange,
    optionsService
  } = useContext(SC)
  const is_moto = Boolean(Number(moto.value))
  const options = !optionsService ? [] : optionsService.reduce( (a,e) => {
    if (!(e.invisible && !(e.id == selected_service.id))){
      const map = {
        key:e.name,
        value:e.id,
        text:e.name
      }
      if (is_moto && e.motorcycle) {
        a.push(map)
      } else if (!is_moto && e.car) {
        a.push(map)
      }

    }
    return a
  },[]).sort((a,b) => alphaSort(a.text, b.text))
  return(
    <BaseDropdownInput
      prefix={ props.prefix || P }
      className={ props.className }
      name='service'
      inputValue={ inputDict.value }
      label={ props.label ? (props.label !== true) ? props.label : T.LABEL : undefined }
      coloredLabel={ props.coloredLabel }
      coloredError={ props.coloredError }
      //icon={ props.moto ? 'motorcycle' : 'car' }
      onChange={ onChange }
      options={ options }
      placeholder={ props.placeholder || T.PLACEHOLDER }
      valid={ inputDict.valid }
      error={ inputDict.error }
      displayError={ props.displayError }
    />
  )
}

export default memo(ServiceField)

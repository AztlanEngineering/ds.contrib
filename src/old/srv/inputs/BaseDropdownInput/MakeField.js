import React, { useEffect, useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { BaseDropdownInput } from 'ui/form'

import {
  MAKE_FIELD as T,
  FORM_DEFAULT_PREFIX as P
} from '../text'

import { alphaSort } from 'utils'

const MakeField = (props) => {
  const {
    make:inputDict,
    moto,
    handleFormDropdownChange:onChange,
    setFormState,
    optionsMake
  } = useContext(SC)
  const is_moto = Boolean(Number(moto.value))
  const options = !optionsMake ? [] : optionsMake.reduce( (a,e) => {
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
    return a
  },[]).sort((a,b) => alphaSort(a.text, b.text))
  useEffect(() => setFormState('make', null, false), [setFormState, is_moto])
  return(
    <BaseDropdownInput
      prefix={ props.prefix || P }
      className={ props.className }
      name='make'
      inputValue={ inputDict.value }
      label={ props.label ? (props.label !== true) ? props.label : (is_moto ? T.MOTO.LABEL : T.CAR.LABEL) : undefined }
      coloredLabel={ props.coloredLabel }
      coloredError={ props.coloredError }

      //icon={ props.moto ? 'motorcycle' : 'car' }
      onChange={ onChange }
      options={ options }
      placeholder={ props.placeholder || (is_moto ? T.MOTO.PLACEHOLDER : T.CAR.PLACEHOLDER) }
      valid={ inputDict.valid }
      error={ inputDict.error }
      displayError={ props.displayError }
    />
  )
}

export default MakeField

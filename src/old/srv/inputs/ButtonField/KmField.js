import React, { useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { ButtonField } from 'ui/form'

import {
  KM_FIELD as T,
  FORM_DEFAULT_PREFIX as P
} from '../text'

const KmField = (props) => {
  const {
    km:inputDict,
    handleFormButtonFieldClick:onClick
  } = useContext(SC)
  return(
    <ButtonField
      prefix={ props.prefix || P }
      className={ props.className }
      name='km'
      label={ props.label ? (props.label !== true) ? props.label : T.LABEL : undefined }
      coloredLabel={ props.coloredLabel }
      coloredError={ props.coloredError }

      inputValue={ inputDict.value }
      buttonClassName={ props.vertical ? 'd-xs-16':'d-md-4'}
      vertical={ props.vertical }
      options={ T.OPTIONS }
      onClick={ onClick }
      valid={ inputDict.valid }
      displayError={ props.displayError }
      /*   error={ inputDict.error } */
    />
  )
}

export default KmField

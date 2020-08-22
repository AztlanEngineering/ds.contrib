import React, { useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { ButtonField } from 'ui/form'

import {
  HAS_WHATSAPP_FIELD as T,
  FORM_DEFAULT_PREFIX as P
} from '../text'

const HasWhatsappField = (props) => {
  const {
    has_whatsapp:inputDict,
    handleFormButtonFieldClick:onClick
  } = useContext(SC)
  return(
    <ButtonField
      prefix={ props.prefix || P }
      className={ props.className }
      name='has_whatsapp'
      inputValue={ inputDict.value }
      label={ props.label ? (props.label !== true) ? props.label : T.LABEL : undefined }
      coloredLabel={ props.coloredLabel }
      coloredError={ props.coloredError }
      buttonClassName={ props.vertical ? 'd-xs-16':'d-xs-8'}
      vertical={ props.vertical }
      options={ T.OPTIONS }
      onClick={ onClick }
      valid={ inputDict.valid }
      displayError={ props.displayError }
      /*   error={ inputDict.error } */
    />
  )
}

export default HasWhatsappField

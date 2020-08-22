import React, { useContext, useEffect } from 'react'
import { ServiceContext as SC } from 'ui/service/ServiceContext'

import {
  FORM_PART_2 as T,
} from './text'

import {
  FORM_DEFAULT_PREFIX as P
} from './inputs/text'

import {
  Accordion
} from 'ui/common'

import {
  FormSectionWrapper as SectionWrapper,
  ValidMessage
} from './form'

import {
  FirstNameField,
  LastNameField,
  MobilePhoneField,

  HasWhatsappField,
  PreferredTimeField
} from './inputs'

import {
  clickTo
} from 'utils'

const FormPart2 = ({rfn, setRfn, setCurrentCamera}) => {

  const {
    first_name,
    last_name,
    mobile_phone,

    has_whatsapp,
    preferred_time,
  } = useContext(SC)

  const s1_valid = first_name.valid && last_name.valid && mobile_phone.valid
  const s2_valid = has_whatsapp.valid
  const p_valid = s1_valid && s2_valid

  useEffect(() => {
    if(s1_valid) {
      clickTo([P + '_' + T.S_2.id])
      setCurrentCamera('P_2S1')
    }
  },
  [s1_valid, setCurrentCamera])

  useEffect(() =>{
    if(p_valid != rfn.P_2) {
      setRfn({...rfn, P_2:p_valid})
      setCurrentCamera('P_2S2')
    }
  },
  [p_valid, rfn, setCurrentCamera, setRfn]
  )

  return(
    <>
      <Accordion
        id='form_main'
        className='accord'
        activeIndex={0}
      >

        <SectionWrapper
          title={ T.S_1.TITLE }
          index={ 0 }
          id={ P + '_' + T.S_1.id }
          valid={ s1_valid }
        >
          <p>{ T.S_1.LABEL }</p>
          <FirstNameField
            className='d-xs-16 d-sm-8'
          />
          <LastNameField
            className='d-xs-16 d-sm-8'
          />
          <MobilePhoneField
            className='d-xs-16 d-md-12'
            displayError
            label
          />
        </SectionWrapper>

        <SectionWrapper
          title={ T.S_2.TITLE }
          index={ 1 }
          valid={ s2_valid }
          disabled={ !s1_valid }
          id={ P + '_' + T.S_2.id }
        >
          <HasWhatsappField
            className='d-xs-16'
            label
          />
          { (has_whatsapp.value != '1') && has_whatsapp.valid &&

          <PreferredTimeField
            className='d-xs-16'
            label
          />
          }
        </SectionWrapper>


      </Accordion>

      <ValidMessage
        rfn={p_valid}
        message={ T.NAV.VALID }
      />
    </>
  )
}

export default FormPart2

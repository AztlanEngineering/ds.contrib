import React, { useContext, useState, useEffect } from 'react'
import { ServiceContext as SC } from 'ui/service/ServiceContext'

import {
  FORM_PART_1 as T,
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
  PostcodeEmailField,

  MakeField,
  ModelField,
  YearField,

  ServiceField,
  KmField,
  MostlyCityField,
} from './inputs'

import {
  clickTo
} from 'utils'

const FormPart1 = ({rfn, setRfn, setCurrentCamera}) => {

  const {
    moto,
    postcode,
    make,
    model,
    year,
    service,
    km,
    mostly_city,

    //For the clickTo fn
    selected_make,
    selected_service,
  } = useContext(SC)

  const [postcodeEmailValid, setPostcodeEmailValid] = useState(false)

  const s1_valid = postcodeEmailValid
  const s2_valid = make.valid && model.valid && year.valid
  const s3_valid = service.valid && km.valid && mostly_city.valid
  const p_valid = s1_valid && s2_valid && s3_valid

  useEffect(() =>{
    if(p_valid != rfn.P_1) setRfn({...rfn, P_1:p_valid})
  },
  [p_valid, rfn, setRfn]
  )

  useEffect(() => {
    if(postcode.valid) {
      clickTo([P+'_postcode'])
    }
  },
  [postcode.valid, setCurrentCamera])

  useEffect(() => {
    if(s1_valid) {
      clickTo([P + '_' + T.S_2.id,
        selected_make.id ? P + '_model' : P + '_make']
      )
      setCurrentCamera('P_1S1')
    }
  },
  [postcodeEmailValid, s1_valid, selected_make, setCurrentCamera])

  useEffect(() => {
    if(s2_valid) {
      clickTo([P + '_' + T.S_3.id, P+'_service'])
      setCurrentCamera('P_1S2')
    }
  },
  [s2_valid, selected_service, setCurrentCamera])

  useEffect(() => {
    if(s3_valid) {
      setCurrentCamera('P_1S3')
    }
  },
  [s3_valid, setCurrentCamera])


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
          valid={ s1_valid }
          id={ P + '_' + T.S_1.id }
        >
          <PostcodeEmailField
            className='d-xs-16'
            setValidState={ setPostcodeEmailValid }
            displayError
            coloredError
            label
          />
        </SectionWrapper>

        <SectionWrapper
          title={ !selected_make.name ? T.S_2.TITLE : T.S_2.ALT_TITLE + ' ' +  selected_make.name}
          index={ 1 }
          valid={ s2_valid }
          disabled={ !s1_valid }
          id={ P + '_' + T.S_2.id }
        >
          <p>{ moto.value ? T.S_2.MOTO.LABEL : T.S_2.CAR.LABEL }</p>
          <MakeField
            className='d-xs-16 d-md-6'
            placeholder={ moto.value ? T.S_2.MOTO.MAKE_PLACEHOLDER : T.S_2.CAR.MODEL_PLACEHOLDER }
          />
          <ModelField
            className='d-xs-16 d-md-6'
            placeholder={ moto.value ? T.S_2.MOTO.MODEL_PLACEHOLDER : T.S_2.CAR.MODEL_PLACEHOLDER }
          />
          <YearField className='d-xs-16 d-md-4'/>
        </SectionWrapper>

        <SectionWrapper
          title={ T.S_3.TITLE }
          index={ 2 }
          valid={ s3_valid }
          disabled={ !(s2_valid && s1_valid)}
          id={ P + '_' + T.S_3.id }
        >
          <ServiceField
            className='d-xs-16'
            label
          />
          <KmField
            className='d-xs-16'
            vertical
            label
          />
          <MostlyCityField
            className='d-xs-16'
            label
          />
        </SectionWrapper>


      </Accordion>

      <ValidMessage
        rfn={p_valid}
        message={ T.NAV.VALID }
      />
    </>
  )
}

export default FormPart1

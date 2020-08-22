import React, { useContext } from 'react'
import { ServiceContext as SC } from 'ui/service/ServiceContext'

import {
  KM_FIELD,
  MOSTLY_CITY_FIELD,
  PREFERRED_TIME_FIELD,
} from './inputs/text'

import {
  CONFIRM_VIEW as T
} from './text'

import { cssClasses as C } from 'ui'

const getMake = (v, options) => {
  return options.reduce((a,e) => {
    return e.id == v ? e.name : a
  }, null)

}

const getService = (v, options) => {
  return options.reduce((a,e) => {
    return e.id == v ? e.name : a
  }, null)
}

const getKm = (v) => {
  return KM_FIELD.OPTIONS.reduce((a,e) => {
    return e.value == v ? e.text : a
  }, null)
}

const getMostlyCity = (v) => {
  return MOSTLY_CITY_FIELD.OPTIONS.reduce((a,e) => {
    return e.value == v ? e.alt : a
  }, null)
}

const getPreferredTime = (v) => {
  return PREFERRED_TIME_FIELD.OPTIONS.reduce((a,e) => {
    return e.value == v ? (e.alt || e.text) : a
  }, null)
}

const ConfirmPart = ({ title, children, mini }) =>
  <div className='row'>
    { !mini ?
      <>
        <div className='d-xs-6 ur'>
          <h4>{ title }</h4>
        </div>
        <div className='d-xs-10 ph1'>
          { children }
        </div>
      </>
      :
      <>
        <div className='uc pv05'>
          <h4 className='nm pv05'>{ title }</h4>
          { children }
        </div>
      </>
    }
  </div>

const ConfirmView = (props) => {
  const {
    first_name,
    last_name,
    postcode,
    model,
    year,
    mobile_phone,

    make,
    service,
    preferred_time,

    has_whatsapp,
    km,
    mostly_city,

    moto,
    from,

    optionsMake,
    optionsService,
  } = useContext(SC)
  return(
    <div className={
      'row mc confirm'
       + (props.inverted ? ' ' + C.inverted : '')
       + (props.mini ? ' ' + C.min : '')
    }
    >
      { props.title && <p className='uc'>{ T.TITLE }</p>}
      { !props.mini &&
      <ConfirmPart
        title={ T.S_1.TITLE }
      >
        <p>{ !props.confirmed ? T.S_1.T.PENDING : T.S_1.T.DONE }</p>
      </ConfirmPart>}

      <ConfirmPart
        title={ T.S_3.TITLE }
        mini={ props.mini }
      >
        <p>{ getService(service.value, optionsService || []) }</p>
        <p>
          <b>
            { getMake(make.value,optionsMake || []) }
            {' '}
            { model.value }
          </b>
          <small>
            {' '}
            { T.S_3.T.YEAR }
            {' '}
            { year.value }
          </small>
        </p>
        <p>
          { getKm(km.value) }
          {' '}
km
        </p>
        <p>
          { getMostlyCity(mostly_city.value) }
        </p>
      </ConfirmPart>

      <ConfirmPart
        title={ T.S_2.TITLE }
        mini={ props.mini }
      >
        <p>
          { first_name.value }
          { ' ' }
          { last_name.value }
        </p>
        <p>
          <small>C.P. </small>
          { postcode.value }
        </p>
        <p>
          <i className='phone icon'></i>
          { mobile_phone.value }
        </p>
        <p>
          { (has_whatsapp.value == '1')?
            <>
              { T.S_2.T.WHATSAPP_ME }
              <i className='whatsapp icon'></i>
            </> :
            <>
              { T.S_2.T.CALL_ME }
              { ' ' }
              { (preferred_time.value != 'A') ?
                <>
                  { T.S_2.T.BETWEEN }
                  {' '}
                  { getPreferredTime(preferred_time.value) }
                </> : getPreferredTime(preferred_time.value).toLowerCase()
              }
            </>
          }
        </p>

      </ConfirmPart>


      { props.debug &&
      <ConfirmPart
        title={ T.S_4.TITLE }
        mini={ props.mini }
      >
        <p>
          { Number(moto.value) ? 'moto ' : 'car ' }
selected
        </p>
        <p>
The form is sent from
          { ' ' }
          { from }
        </p>
      </ConfirmPart>
      }
    </div>
  )
}

export default ConfirmView

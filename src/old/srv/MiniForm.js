import React, { useState, useContext, useEffect } from 'react'
import { ServiceContext as SC } from 'ui/service/ServiceContext'
import { cssClasses as C } from 'ui'

import {
  //Link as ScrollLink,
  scroller
}
  from 'react-scroll'

import {
  MINI_FORM as T
} from './text'

import {
  TransparentButton
} from 'ui/common'

import {
  FormSectionWrapper as SectionWrapper,
  ValidMessage
} from './form'

import {
  MotoField,
  EmailActionField,
  ServiceSetter,
  ModelField,
  YearField,
  FirstNameField,
  LastNameField,
  MobilePhoneField,
  PostcodeField,
  MakeField,
  ServiceField,
  PreferredTimeField,
  HasWhatsappField,
  KmField,
  MostlyCityField,

  FromSetter,
  MakeSetter,
  PostcodeSetter,
  MotoSetter,

  RowSendButton,
  SendButton
} from './inputs'

import ConfirmView from './ConfirmView'
import ThanksView from './ThanksView'


const next_map={
  'P1':{
    name:'P2',
  },
  'P2':{
    name:'confirm',
  },
  'confirm':{
    name:'thanks',
  }
}

const scrollToFormTop = () =>
  scroller.scrollTo('fixed_form_title', {
    duration: 400,
    delay: 0,
    smooth: 'easeInOutQuart'
  })


const MiniLabel = ({
  name,
  min,
  inverted, children
})=>
  <label
    htmlFor={'rpf_' + name}
    className={'fw lab d-xs-16'
            + (min ? ' ' + C.min : '')
            + (inverted ? ' ' + C.inverted : '')
    }
  >
    {children}
  </label>

const FormPart = ({
  title,
  sub,
  active,
  isActive,
  children,
  backButton,
  sendButton,
  button,
  inverted,
  setActive,
  rfn,
  rfnMessage,
  flex,
  inArea
}) => {
  const [remainingFieldsMessage, setRFM] = useState(false)
  const button_props={
    className:'large ui button right labeled icon confirm' +
				(rfn ? ' green' : ' blue') +
				(flex ? ' circular' : ' row'),
    onClick:rfn ? () => {
      scrollToFormTop()
      setActive(next_map[active].name)
    } : () => setRFM(true)
  }
  return(
    <div className={
      'form-part'
    + (isActive ? ' ' + C.active : '')
    }
    >
      <div className='row content'>
        <h2
          className='small p1 uc'
          id='fixed_form_title'
        >
          { title }
        </h2>

        { backButton &&
        <div className='row uc ph2'>
          <TransparentButton
            left
            onClick={() => setActive('P1')}
            className='pv1'
            inverted={ inverted }
          >
            { backButton }
          </TransparentButton>
        </div>
        }
        {sub &&<p className='ph1 uc small nm'>{ sub }</p>}

        <div className='ph2 pv1'>
          { children }
          {rfn &&
          <div className='pv1 t green uc'>
            <p className='nm pv1 small'>{ rfnMessage }</p>
          </div>}
          {!rfn && remainingFieldsMessage &&
          <div className='pv1 t orange uc'>
            <p className='nm pv1 small'>{ T.REMAINING_FIELDS }</p>
          </div>}
        </div>

        {flex && inArea &&
        <div className='row uc'>
          { button &&
          <button
            { ...button_props}
          >
            <i className='right arrow icon'></i>
            { button }
          </button>}
          { sendButton && <SendButton
            color='alt-green'
            loadingColor='teal'
                          />}
        </div>}

        { !flex &&
        <p className='h-xs'>
&nbsp;
        </p>}
      </div>

      {!flex && inArea &&
      <>
        { button &&
        <button
          { ...button_props}
        >
          <i className='right arrow icon'></i>
          { button }
        </button>}
        { sendButton && <RowSendButton />}
      </>}

    </div>
  )}

const MiniForm = (props) => {

  const {
    moto,
    postcode,
    make,
    model,
    year,
    mostly_city,
    km,
    has_whatsapp,
    first_name,
    last_name,
    mobile_phone,
    success
  } = useContext(SC)

  const [active, setActive] = useState('P1')

  const rfn1 = postcode.valid &&
		make.valid &&
		model.valid &&
		year.valid &&
		mostly_city.valid &&
		km.valid

  const rfn2 = first_name.valid &&
		last_name.valid &&
		mobile_phone.valid &&
		has_whatsapp.valid

  useEffect(() => {
    if (success) {
      scrollToFormTop()
      setActive(next_map['confirm'].name)
    }
  }, [success])

  const form_part_params = {
    active,
    setActive
  }
  const is_moto = Boolean(Number(moto.value))

  return(
    <div className='form row'>

      <ServiceSetter
        slug={ is_moto ? props.motoServiceSetter || '' : props.carServiceSetter || ''}
      />
      <FromSetter from={ props.from }/>
      <FormPart
        title={ props.title || T.S_1.TITLE }
        sub={ props.sub || T.S_1.SUB }
        isActive={ active == 'P1' }
        button={ T.S_1.CTA }
        inverted={ props.inverted }
        rfn={ rfn1}
        rfnMessage={ T.S_1.VALID}
        inArea={ !postcode.error }
        flex={ props.flex }
        { ...form_part_params }
      >
        <PostcodeField
          className={
            'd-xs-16'
            + (props.min ? ' ' + C.min : '')
            + (props.inverted ? ' ' + C.inverted : '')
          }
          label
          displayError
          coloredLabel
          coloredError
        />

        { !postcode.error ?
          <>
            {props.motoField &&
            <MotoField
              className={
				    'd-xs-16'
            + (props.min ? ' ' + C.min : '')
            + (props.inverted ? ' ' + C.inverted : '')
				  }
              label
            />}
            <MakeField
              className={
                'd-xs-16'
            + (props.min ? ' ' + C.min : '')
            + (props.inverted ? ' ' + C.inverted : '')
              }
              label
            />

            <MiniLabel
              name={'model'}
              inverted={ props.inverted }
              min={ props.min }
            >
              { T.S_1.LABEL_MODEL }
            </MiniLabel>
            <ModelField
              className={
                'd-xs-10'
            + (props.min ? ' ' + C.min : '')
            + (props.inverted ? ' ' + C.inverted : '')
              }
            />
            <YearField
              className={
                'd-xs-6'
            + (props.min ? ' ' + C.min : '')
            + (props.inverted ? ' ' + C.inverted : '')
              }
            />

            <MostlyCityField
              className={
                'd-xs-16 compact'
            + (props.min ? ' ' + C.min : '')
            + (props.inverted ? ' ' + C.inverted : '')
              }
              label
            />
            { !(props.carServiceSetter || props.motoServiceSetter) &&
            <ServiceField
              className={
                'd-xs-16 compact'
            + (props.min ? ' ' + C.min : '')
            + (props.inverted ? ' ' + C.inverted : '')
              }
              label
            />}
            <KmField
              className={
                'd-xs-16'
            + (props.min ? ' ' + C.min : '')
            + (props.inverted ? ' ' + C.inverted : '')
              }
              label
              vertical
            />
          </> : <EmailActionField
            className={
		    'd-xs-16'
            + (props.min ? ' ' + C.min : '')
            + (props.inverted ? ' ' + C.inverted : '')
		  }
            displayError
            coloredError
            label
          />}
      </FormPart>

      <FormPart
        title={ T.S_2.TITLE }
        isActive={ active == 'P2' }
        button={ T.S_2.CTA }
        backButton={ is_moto ? T.MOTO_BACK : T.CAR_BACK }
        inverted={ props.inverted }
        rfn={ rfn2}
        rfnMessage={ T.S_2.VALID}
        flex={ props.flex }
        inArea={ true }
        { ...form_part_params }
      >
        <MiniLabel
          name={'first_name'}
          inverted={ props.inverted }
          min={ props.min }
        >
          { T.S_2.LABEL_NAME}
        </MiniLabel>
        <FirstNameField
          className={
            'd-xs-8'
            + (props.min ? ' ' + C.min : '')
            + (props.inverted ? ' ' + C.inverted : '')
          }
        />

        <LastNameField
          className={
            'd-xs-8'
            + (props.min ? ' ' + C.min : '')
            + (props.inverted ? ' ' + C.inverted : '')
          }
        />
        <MobilePhoneField
          className={
            'd-xs-16'
            + (props.min ? ' ' + C.min : '')
            + (props.inverted ? ' ' + C.inverted : '')
          }
          label
        />
        <HasWhatsappField
          className={
            'd-xs-16'
            + (props.min ? ' ' + C.min : '')
            + (props.inverted ? ' ' + C.inverted : '')
          }
          label
        />
        { (has_whatsapp.value != '1') && has_whatsapp.valid &&
          <PreferredTimeField
            className={
              'd-xs-16'
              + (props.min ? ' ' + C.min : '')
              + (props.inverted ? ' ' + C.inverted : '')
            }
            label
          />
        }
      </FormPart>

      <FormPart
        title={ T.S_3.TITLE }
        isActive={ active == 'confirm' }
        backButton={ is_moto ? T.MOTO_BACK : T.CAR_BACK }
        inverted={ props.inverted }
        flex={ props.flex }
        inArea={ true }
        sendButton
        { ...form_part_params }
      >
        <ConfirmView
          mini
          inverted={ props.inverted }
          title
        />
      </FormPart>


      <FormPart
        title={ T.S_3.TITLE }
        isActive={ active == 'thanks' }
        inArea={ true }
        { ...form_part_params }
      >
        <ThanksView
          inverted={ props.inverted }
        />
      </FormPart>

    </div>

  )
}

export default MiniForm

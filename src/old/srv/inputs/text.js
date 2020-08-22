import React from 'react'
import * as URLS from 'pages/urls'

const FORM_DEFAULT_PREFIX = 'rpf'

const EMAIL_FIELD ={
  LABEL:'Qual è la tua email? (Ci serve solo per risponderti. Non la useremo per nessun altra ragione, promesso!)',
  PLACEHOLDER:'mario.rossi@email.it',
  ACTION:'Invia',
  SUCCESS:'Inviata :)',
  NOTICE:'Ti invieremo solo due mail. Una per confermarti che sei nella lista della tua zona, l\'altra per avvisarti che siamo arrivati nei tuoi dintorni.',
  PRIVACY:`Puoi visionare la nostra informativa privacy <a href='${URLS.STATIC.PRIVACY}' target='_blank'>qui</a>.`
}

const MODEL_FIELD = {
  LABEL:'Qual è il modello della tua auto?',
  PLACEHOLDER:'500, Twingo, Rav-4'
}

const YEAR_FIELD = {
  LABEL:'Anno di immatricolazione della tua auto?',
  PLACEHOLDER:'2019'
}

const MAKE_FIELD = {
  CAR:{
    PLACEHOLDER:'Fiat, Renault, Toyota...',
    LABEL:'Qual è la marca della tua auto?',
  },
  MOTO:{
    PLACEHOLDER:'Piaggio, Yamaha, Moto Guzzi...',
    LABEL:'Qual è la marca della tua moto?',
  }
}

const SERVICE_FIELD = {
  LABEL:'Qual è il principale servizio che richiede il tuo veicolo?',
  PLACEHOLDER:'Tagliando Auto, Sostituzione Cinghia di Distribuzione,...',
}

const PREFERRED_TIME_FIELD = {
  LABEL:'Quando preferisci essere chiamato?',
  PLACEHOLDER:'Mattino, pomeriggio o sera',
  OPTIONS:[
    {
      key:1,
      text:'Il prima possibile',
      value:'A',
    },
    {
      key:2,
      text:'09 -> 12 del mattino',
      alt:'le 09:00 e le 12:00',
      value:'B',
    },
    {
      key:3,
      text:'12 -> 15 del pomeriggio',
      alt:'le 12:00 e le 15:00',
      value:'C',
    },
    {
      key:4,
      text:'15 -> 18 nel tardo pomeriggio',
      alt:'le 15:00 e le 18:00',
      value:'D',
    }
  ]


}

const FIRST_NAME_FIELD ={
  PLACEHOLDER:'Mario'
}

const LAST_NAME_FIELD ={
  PLACEHOLDER:'Rossi'
}

const MOBILE_PHONE_FIELD ={
  LABEL:'Qual è il tuo numero di cellulare?',
  PLACEHOLDER:'301 234 5678'
}

const POSTCODE_FIELD ={
  LABEL:'Qual è il tuo codice postale?',
  PLACEHOLDER:'20134'
}

const HAS_WHATSAPP_FIELD ={
  LABEL:'Come possiamo contattarti?',
  //PLACEHOLDER:'20134',
  OPTIONS:[
    {
      key:1,
      content:<p>Telefonami</p>,
      value:'0',
    },
    {
      key:2,
      content:<>
        <p className='nm small'>Inviami un</p>
        <p>
Whatsapp&nbsp;&nbsp;
          <i className='whatsapp icon'></i>
        </p>
      </>,
      value:'1',
    }
  ]
}

const KM_FIELD ={
  LABEL:'Quanti chilometri ha percoso il tuo veicolo?',
  //PLACEHOLDER:'20134',
  OPTIONS:[
	  {
      key:1,
      text:'< 10 000',
      value:'A',
    },
    {
      key:2,
      text:'10 000 ~ 75 000',
      value:'B',
    },
    {
      key:3,
      text:'75 000 ~ 150 000',
      value:'C',
    },
    {
      key:4,
      text:'> 150 000',
      value:'D',
    }

  ]
}

const MOTO_FIELD ={
  LABEL:'Richiedi il servizio per un\'auto o moto ?',
  //PLACEHOLDER:'20134',
  OPTIONS:[
    {
      key:1,
      content:<p>
        <i className='car icon'/>
Car
      </p>,
      value:'0',
    },
    {
      key:2,
      content:<p>
        <i className='motorcycle icon'/>
Moto / scooter
      </p>,
      value:'1',
    }
  ]
}

const MOSTLY_CITY_FIELD ={
  LABEL:'Dove guidi la maggior parte del tempo?',
  //PLACEHOLDER:'20134',
  OPTIONS:[
    {
      key:1,
      alt:'Guido principalmente in città',
      text:'In città',
      icon:'city',
      value:'2',
    },
    {
      key:2,
      text:'In autostrada o Extraurbana',
      alt:'Guido principalmente in autostrada o extraurabana',
      icon:'highway',
      value:'1',
    }
  ]
}

const POSTCODE_EMAIL_FIELD = {
  AVAILABLE: 'Ottime notizie! Meccamico è presente nella tua area. Ripara la tua auto o moto già da oggi cliccando i bottoni qui sotto.',
  UNAVAILABLE: 'Per sapere quando arriveremo nella tua città inserisci la tua email di seguito.',
  CONFIRM:'È questo il posto esatto?',
  BUTTON:'Si'

}

const SEND_BUTTON ={
  S_1:{
    __html:'Conferma e invia',
    color:'alt-pink'
  },
  S_2:{
    //__html:'<p class="nm">É tutto corretto?</p><p class="nm"><small>Ultima chance di correggere quell\'errore di battitura!</small></p>',
    color:'alt-blue-c'
  },
  S_3:{
    __html:'✓',
    color:'green'
  }
}

const ROW_SEND_BUTTON ={
  S_1:{
    __html:'Invia',
    color:'blue'
  },
  /*S_2:{
    __html:'<p class="nm">É tutto corretto?</p><p class="nm"><small>Ultima chance di correggere quell\'errore di battitura!</small></p>',
    color:'green'
	},*/
  S_2:{
    __html:'La tua richiesta è stata inviata',
  }
}


export {
  FORM_DEFAULT_PREFIX,

  EMAIL_FIELD,

  MODEL_FIELD,
  YEAR_FIELD,
  FIRST_NAME_FIELD,
  LAST_NAME_FIELD,
  MOBILE_PHONE_FIELD,
  POSTCODE_FIELD,

  MAKE_FIELD,
  SERVICE_FIELD,
  PREFERRED_TIME_FIELD,

  HAS_WHATSAPP_FIELD,
  KM_FIELD,
  MOSTLY_CITY_FIELD,
  MOTO_FIELD,

  SEND_BUTTON,
  ROW_SEND_BUTTON,

  POSTCODE_EMAIL_FIELD
}

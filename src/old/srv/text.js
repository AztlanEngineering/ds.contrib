const THANKS_VIEW = {
  TITLE:'Grazie per esserti affidato a noi!',
  SUB:'Ti confermiamo che abbiamo ricevuto la tua richiesta.',
  SUB_2:'A breve verrai contattato da uno dei nostri specialisti al numero di telefono',
  NEXT_TEXT:'Continua la navigazione'

}

const CONFIRM_VIEW = {
  STATE:{
  },
  TITLE:'Ricapitolando : vorrei richiedere un preventivo gratuito per',
  S_1:{
    TITLE:'Stato',
    T:{
      PENDING:'In attesa di conferma.',
      DONE:'Confermato',
    }
  },
  S_2:{
    TITLE:'Contatti',
    T:{
      CALL_ME:'Telefonami',
      WHATSAPP_ME:'Inviami un Whatsapp',
      BETWEEN:'tra',
    }
  },
  S_3:{
    TITLE:'Servizio',
    T:{
      YEAR:'Anno'
    }
  },
  S_4:{
    TITLE:'Debug',
  },

}

const FORM_PART_1 = {
  NAV: {
    VALID: 'Ci sembra tutto a posto! Termina la richiesta cliccando il bottone qui sotto.',
  },
  S_1:{
    TITLE:'Zona di servizio',
    CONFIRM:'È questo il posto esatto?',
    id:'p1',
  },

  S_2:{
    TITLE:'Marca e modello',
    ALT_TITLE:'Modello della tua',
    id:'p2',
    CAR:{
      LABEL:'Quali sono marca, modello e anno di immatricolazione della tua auto?',
      MAKE_PLACEHOLDER:'Fiat, Renault...',
      MODEL_PLACEHOLDER:'500, Twingo...'
    },
    MOTO:{
      LABEL:'Quali sono marca, modello e anno di immatricolazione della tua moto?',
      MAKE_PLACEHOLDER:'Piaggio, Yamaha...',
      MODEL_PLACEHOLDER:'Primavera, V7...'

    }
  },
  S_3:{
    TITLE:'Dettagli sull\'auto',
    id:'p3',
  },

}

const FORM_PART_2 = {
  NAV: {
    VALID: 'Perfetto! Dacci un secondo per confermare ed inserire la tua richiesta nel nostro sistema.',

  },
  S_1:{
    TITLE:'Nome e Numero di telefono',
    LABEL:'Nome',
    id:'p4',
  },
  S_2:{
    TITLE:'Le tue preferenze di contatto',
    id:'p5',
  },

}

const MINI_FORM = {
  REMAINING_FIELDS:'Perfavore accertati di aver compilato ogni campo prima di cliccare sul pulsante di Conferma',
  AREA:'Zona di servizio a Milano',
  TITLE:'Ciao',
  CAR_BACK:'Ricontrolla i dettagli della tua auto',
  MOTO_BACK:'Ricontrolla i dettagli della tua moto',
  S_1:{
    TITLE:'Parlaci della tua auto',
    LABEL_MODEL:'Modello e Anno di Immatricolazione',
    CTA:'Termina la richiesta',
    SUB:'(Tutto questo in due minuti del tuo tempo, promesso)',
    VALID: 'Ci sembra tutto a posto! Termina la richiesta cliccando il pulsante qui sotto.',
  },
  S_2:{
    TITLE:'Informazioni Personali',
    LABEL_NAME:'Nome e Cognome',
    CTA:'Conferma e richiedi un preventivo',
    VALID: 'Perfetto! Dacci un secondo per confermare ed inserire la tua richiesta nel nostro sistema.',
  },
  S_3:{
    TITLE:'Conferma e invio'
  },
  S_4:{
    TITLE:'Grazie per esserti affidato a noi!'
  },
  LABELS:{
    YEAR:'Anno'
  }
}

export {
  THANKS_VIEW,
  CONFIRM_VIEW,
  FORM_PART_1,
  FORM_PART_2,
  MINI_FORM
}

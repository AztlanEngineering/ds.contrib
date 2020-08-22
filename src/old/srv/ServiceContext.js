import React, { Component } from 'react'
import * as validator from 'validation/serviceValidator'

import {
  graphql,
  withApollo
} from 'react-apollo'

import compose from 'lodash.flowright'

import gql from 'graphql-tag'
import QUERY_INITIAL_DATA from './graphql/i.graphql'
import MUTATION_NEW_TICKET from './graphql/newTicket.graphql'
import MUTATION_NEW_IN_WAITLIST from './graphql/newInWaitList.graphql'

import { useQuery, useMutation } from '@apollo/react-hooks'

const ServiceContext = React.createContext({})

const fields = [
  'email',
  'make',
  'model',
  'year',
  'service',
  'km',
  'mostly_city',
  'first_name',
  'last_name',
  'mobile_phone',
  'postcode',
  'has_whatsapp',
  'preferred_time',
  'moto',
]

class ServiceContextProviderPayload extends Component {
  constructor(props){
    super(props)
    this.initState()
  }

  initState = (hard=false) => {
    this.state = {
      loading:false,
      success:null,
    }

    fields.forEach(e =>
      this.state[e] = {
        value:'',
        valid:false,
        error:null,
      }
    )
    this.state.preferred_time.value = 'A'
    this.state.preferred_time.valid = true
    //this.handleDropdownChange(null, {name:'preferred_time', value:'A'})

    this.state.moto.value = false

    this.state.from = 'home'

    this.state.selected_make = {}
    this.state.selected_service = {}
    this.baseState = this.state
  }

	resetState = () => {
	  this.setState({
	    ...this.baseState,
	    from:this.state.from,
	  })
	}

  validFields = () => fields.reduce((a,e) => {
    if (this.state[e].valid) a.push(e)
    return a
  },[])

  handleChange = (e) => {
    const t = e.target
    this.setState({ [t.name]: validator[t.name](t.value)})
    /* console.log(t.name, t.value, 'changed')
       console.log(this.state[t.name]) */
  }

  handleDropdownChange = (e, {name, value}) => {
    this.setState({
      [name]:{
        value,
        valid:value ? true:false,
        error:null
      }
    })
    //console.log('dd', name, value)
  }

  handleButtonFieldClick = (e) => {
    var t = e.target
    while(!t.name) {
      t = t.name ? t : t.parentNode
    }
    this.setState({
      [t.name]:{
        value:t.value,
        valid:t.value ? true : false,
        error:null,
      }
    })
  }

	setBaseState = (k, v) => {
	  this.setState({
	    [k]:v
	  })
	}

  setFormState = (name, value, valid=true) => {
    this.setState({
      [name]:{
        value,
        valid:valid,
        error:null,
      }
    })
  }

  _confirmWaitlist = (data) => {
    this.setState({
      success_waitlist:true,
      loading_waitlist:false
    })
    // console.log(data)
  }

  _errorWaitlist = (err) => {
    this.setState({
      success_waitlist:false,
      loading_waitlist:false
    })
    // console.log(err)
  }

  handleWaitlistSubmit = (e) => {
    e.stopPropagation()
    this.setState({loading_waitlist:true})
    const mutate = this.props.mutation_to_waitlist
    const variables = {
      postcode:this.state.postcode.value, //TODO inconsistent pass as Int
      email:this.state.email.value
    }
    console.log(variables)
    mutate({ variables }).then((a,b) =>{
      this._confirmWaitlist(a.data)
    }).catch((e) => {
      this._errorWaitlist(e)
    })
  }

  _confirmMain = (data) => {
    this.setState({
      success:true,
      loading:false
    })
    // console.log(data)
  }

  _errorMain = (err) => {
    this.setState({
      success:false,
      loading:false
    })
    // console.log(err)
  }

  handleMainSubmit = (e) => {
    e.stopPropagation()
    this.setState({loading:true})
    const mutate = this.props.mutation_send
    const variables = {
      postcode:Number(this.state.postcode.value),
      make:this.state.make.value,
      model:this.state.model.value,
      year:Number(this.state.year.value),
      service:this.state.service.value,
      km:this.state.km.value,
      mostly_city:Boolean(Number(this.state.mostly_city.value)),
      first_name:this.state.first_name.value,
      last_name:this.state.last_name.value,
      mobile_phone:this.state.mobile_phone.value.replace(/\D/g,''),
      whatsapp:Boolean(Number(this.state.has_whatsapp.value)),
      preferred_time:this.state.preferred_time.value,
      motorcycle:Boolean(Number(this.state.moto.value)),
    }
    console.log(variables)
    mutate({ variables }).then((a,b) =>{
      this._confirmMain(a.data)
    }).catch((e) => {
      this._errorMain(e)
    })
  }

  render() {
    const loading = this.props.initial_data.loading
    var options = {}
    if (!loading)
      options = this.props.initial_data.i || {}
    return (
      <ServiceContext.Provider
        value={{
          ...this.state,
          handleFormChange:this.handleChange,
          handleFormDropdownChange:this.handleDropdownChange,
          handleFormButtonFieldClick:this.handleButtonFieldClick,
          formValidFields:this.validFields(),
          optionsMake: options.makes || [],
          optionsService: options.services || [],
          setBaseState:this.setBaseState,
          setFormState:this.setFormState,
          resetState:this.resetState,

          ready:(this.validFields().length > 10),
          submit:this.handleMainSubmit,
          submitWaitlist:this.handleWaitlistSubmit,
          mutation_in_progress:this.state.loading//TODO remove as already included in state
        }}
      >
        { this.props.children }
      </ServiceContext.Provider>
    )
  }
}

const ServiceContextProvider = compose(
  withApollo,
  graphql(gql(QUERY_INITIAL_DATA), {name:'initial_data'}),
  graphql(gql(MUTATION_NEW_TICKET), {name:'mutation_send'}),
  graphql(gql(MUTATION_NEW_IN_WAITLIST), {name:'mutation_to_waitlist'}),
)(ServiceContextProviderPayload)

const ServiceContextConsumer = ServiceContext.Consumer

export {
  ServiceContext,
  ServiceContextProvider,
  ServiceContextConsumer,
}

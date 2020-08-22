import { memo, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { getFromSlug } from 'utils'

const MakeOrServiceSetter = ({ slug:value, history, ifNullRedirect }) => {
  const {
    handleFormDropdownChange:set,
    optionsMake,
    optionsService,
    setBaseState,
  } = useContext(SC)
  useEffect(() => {
    var current = 'make'
    const cb = (match) => setBaseState('selected_' + current, match)
    const a = getFromSlug(value, optionsMake, cb)
    if (a) {
      set(null, {name:current, value:a}, cb)
      //console.log('set up make', a)
    }
    else {
      current = 'service'
      const b = getFromSlug(value, optionsService, cb)
      if (b) {
        set(null, {name:current, value:b})
        //console.log('set up service', b)
      }
      else if (optionsMake.length){
        history.push(ifNullRedirect)
      }
    }
  }, [value, set, optionsMake, optionsService, setBaseState, history, ifNullRedirect])
  return null
}

const isEqual = (prevProps, nextProps) => {
  if (prevProps.slug != nextProps.slug){
    return false
  }
  else return true
}

export default memo(withRouter(MakeOrServiceSetter), isEqual)

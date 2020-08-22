import {useContext} from 'react'
import { ServiceContext as SC } from 'ui/service/ServiceContext'

export default function(slug) {
  const {
    optionsMake,
    optionsService,
  } = useContext(SC)
  /*useEffect(() => {
			setFormFrom(value)
		},[value, setFormFrom])*/
  var make, service
  var i = 0
  make = false

  while ((i < optionsMake.length) && !make) {
    if (optionsMake[i].slug == slug) {
      make = optionsMake[i]
      break
    }
    i++
  }

  if (make) return ['make', make]
  else {
    service = false
    i = 0
    while ((i < optionsService.length) && !service){
      if (optionsService[i].slug == slug) {
        service = optionsService[i]
        break
      }
      i++
    }

    if (service) return ['service', service]
    else return ['',null]

  }
}


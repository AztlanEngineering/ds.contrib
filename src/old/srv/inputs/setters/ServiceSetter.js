import { memo, useEffect, useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { getFromSlug } from 'utils'

const ServiceSetter = ({ slug:value }) => {
  const {
    handleFormDropdownChange:set,
    optionsService:options,
  } = useContext(SC)
  useEffect(() => {
    if(options.length) set(null,
      {name:'service', value:getFromSlug(value, options)}
    )
  }, [value, options, set])
  return null
}

export default memo(ServiceSetter)

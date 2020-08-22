import { memo, useEffect, useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

import { getFromSlug } from 'utils'

const MakeSetter = ({ slug:value }) => {
  const {
    handleFormDropdownChange:set,
    optionsMake:options,
  } = useContext(SC)
  useEffect(() => {
    set(null, {name:'make', value:getFromSlug(value, options)})
  }, [value, set, options])
  return null
}

export default memo(MakeSetter)

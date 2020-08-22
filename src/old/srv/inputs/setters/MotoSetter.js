import { memo, useEffect, useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

const MotoSetter = ({ value }) => {
  const {
    setFormState
  } = useContext(SC)
  useEffect(() => {
    setFormState('moto', value)
  }, [value, setFormState])
  return null
}

export default memo(MotoSetter)

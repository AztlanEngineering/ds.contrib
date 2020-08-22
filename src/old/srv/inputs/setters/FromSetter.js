import { memo, useEffect, useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

const FromSetter = ({ from:value }) => {
  const {
    setBaseState
  } = useContext(SC)
  useEffect(() => {
    setBaseState('from', value)
  }, [value, setBaseState])
  return null
}

export default memo(FromSetter)

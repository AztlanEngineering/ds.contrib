import { memo, useEffect, useContext } from 'react'

import { ServiceContext as SC } from 'ui/service/ServiceContext'

const PostcodeSetter = ({ value }) => {
  const {
    setFormState
  } = useContext(SC)
  useEffect(() => {
    setFormState('postcode', value)
  }, [value, setFormState])
  return null
}

export default memo(PostcodeSetter)

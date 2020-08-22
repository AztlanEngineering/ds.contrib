import * as React from 'react'

import qs from 'query-string'
import { useLocation } from 'react-router-dom'

export default () => {
  const location = useLocation()

  const urlParams = location.search

  return qs.parse(urlParams)
}

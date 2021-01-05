import * as React from 'react'
import { useEffect, useMemo, useCallback } from 'react'

import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import { useForm } from 'ds-form'

export default (MUTATION, extraProps) => {

  const {
    additionalVariables={},
    defaultDataObject={},
    refetch
  } = extraProps || {}

  const { parsed } = useForm()

  const [
    doMutate,
    {
      loading,
      error,
      data={}
    }
  ] = useMutation(
    gql(MUTATION),
    {
      notifyOnNetworkStatusChange:true,
    })

  const finalData = useMemo(() => {
    var result = defaultDataObject
    if(data) {
      const dataKey = Object.keys(data).reduce((a, e) => e)
      result = data[dataKey]
    }
    return result
  },
  [data])


  useEffect(() => {
    if (Object.keys(finalData).length) {
      refetch?.()
    }
  }, finalData)


  const mutate= useCallback(() => doMutate({
    variables:{
      ...parsed,
      ...additionalVariables
    }
  }),
  [parsed, additionalVariables]
  )

  return {
    mutate,
    loading,
    error,
    response:finalData
  }
}

import * as React from 'react'
import { useEffect, useMemo, useCallback } from 'react'
import diffCountFunc from './diffCount.js'

import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import { useForm } from 'ds-form'

export default (MUTATION, extraProps) => {

  const {
    id,
    additionalVariables={},
    //defaultDataObject={},
    removeVariables,
    compareWithOriginalObject,
    refetch
  } = extraProps || {}

  const { parsed } = useForm()

  const [
    doMutate,
    {
      loading,
      error,
      data
    }
  ] = useMutation(
    gql(MUTATION),
    {
      notifyOnNetworkStatusChange:true,
    })

  const finalData = useMemo(() => {
    var result = {} //defaultDataObject
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
  }, [finalData])

  const mutate= useCallback(() => {
    const finalFormVariables = Object.keys(parsed)
      .filter(key => removeVariables ? !removeVariables.includes(key): true)
      .reduce((a, key) => {
        a[key] = parsed[key]
        return a
      }, {})
    doMutate({
      variables:{
        id   :id,
        input:{
          ...finalFormVariables,
          ...additionalVariables
        }
      }
    })},
  [parsed, additionalVariables]
  )


  const diffCount = useMemo(() => {
    if(compareWithOriginalObject) {
      return diffCountFunc(compareWithOriginalObject, parsed)
    }
    else return null
  }, [parsed, compareWithOriginalObject])

  return {
    mutate,
    loading,
    error,
    diffCount,
    response:finalData,
  }
}

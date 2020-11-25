import React from 'react'
import { ApolloProvider } from '@apollo/client'
import getClient from './getClient'
import * as CONFIG from 'stories/config.js'


const Provider = ({endpoint=CONFIG.ENDPOINT, children, ...props}) => (
  <ApolloProvider
    {...props}
    client={ getClient(endpoint) }
  >
    { children }
  </ApolloProvider>
)

export default Provider


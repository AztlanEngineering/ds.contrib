/* @fwrlines/generator-react-component 2.3.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'


import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import QUERY from './graphql/getSimpleHello.gql'



//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

const baseClassName = 'graph_q_l_tester'


/**
 * Use `GraphQLTester` to
 * Has color `x`
 */
const GraphQLTester = ({
  id,
  className,
  style
}) => {

  const {
    loading,
    error,
    data:{ getSimpleHello:stringReceived }={}
  } = useQuery(gql(QUERY))


  return (
    <div
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <p><strong>The following paragraph should display the string received from the server. Usually something like a hello message.</strong></p>
      <h2>{ loading ? 'Loading...' : stringReceived }</h2>
    </div>
  )}

GraphQLTester.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,
}

export default GraphQLTester

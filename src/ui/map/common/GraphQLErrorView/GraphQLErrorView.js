/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'


import {
  Button,
  Heading,
} from 'ds-core'

import {
  ActionGrid
} from '../ActionGrid'



//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './graph_q_l_error_view.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./graph_q_l_error_view.scss')
}

const baseClassName = 'graph_q_l_error_view'


/**
 * Use `GraphQLErrorView` to
 * Has color `x`
 */
const GraphQLErrorView = ({
  id,
  className,
  style,

  item,
  loadingSingle,
  loadingList,
  currentSingleView,
  currentListView,
  title,
  refetch,
  error
}) => {

  const loading = loadingSingle || loadingList

  const graphQLState = loading ? 'Loading' : 'Error'

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
      <ActionGrid
        item={ item }
        loadingSingle={ loadingSingle }
        loadingList={ loadingList }
        currentSingleView={ currentSingleView }
        currentListView={ currentListView }
        title={ `${title} (${graphQLState})` }
        //title={ name }
      >
        <Button
          onClick={ refetch }
          className='pointer x-green'
        >
          Refetch
        </Button>
      </ActionGrid>
      { loading ?

        <Heading heading='Getting the data from the GraphQL api ....'>
        </Heading> :

        <Heading heading='There was an error executing the GraphQL query or mutation.'>
          <pre className='c-x'>
            { error && JSON.stringify(error, null, 2) }
          </pre>
        </Heading>
      }

    </div>
  )}

GraphQLErrorView.propTypes = {
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

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,
  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

/*
GraphQLErrorView.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default GraphQLErrorView

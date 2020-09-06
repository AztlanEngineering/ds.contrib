/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useCallback, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

import {
  Accordion,
  Button,
  DotInfo,
  Heading,
  InlineLoader,
  Timestamp
} from 'ds-core'

import {
  ActionGrid
} from '../ActionGrid'

import {
  useModelMap,
} from '../Context'

import {
  SingleActions
} from './common'

/*
import {
  MapSingleActions as Actions
} from '../common'
*/

import { Link, useLocation, useParams, useHistory } from 'react-router-dom'

import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/client'
//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './single_view.scss' */

const baseClassName = 'associations_view'


/**
 * Use `EditView` to
 * Has color `x`
 */
const AssociationsView = ({
  id,
  className,
  style,
  itemId,
  //setCurrentTab
}) => {

  const location = useLocation()

  const history = useHistory()

  const {
    guid:currentId,
    ...routeParams
  } = useParams()

  const {
    currentType,
    generateLocalPath
  } = useModelMap()

  const {
    loading,
    error,
    data,
    refetch
  } = useQuery(gql(currentType.graphql.queries.ONE_ASSOCIATIONS),
    {
      variables:{
        id:itemId || currentId
      },
      skip                       :!currentId || !currentType.name,
      notifyOnNetworkStatusChange:true
    })

  const finalData = useMemo(() => {
    var result = {}
    if(data) {
      const dataKey = Object.keys(data).reduce((a, e) => e)
      result = data[dataKey]
    }
    return result
  },
  [currentType.name, loading, location, data])


  //console.log(777, loading, error, data, finalData, currentId)

  const name = currentId ? (finalData._string || finalData.name || (finalData.id && finalData.id.substring(0, 8)) || 'Loading') : `New ${currentType.name}`


  if(!currentId || finalData.__typename) return (
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
        item={ finalData }
        loadingSingle={ loading  }
        currentSingleView='Associations'
        title='Object Associations'
      >
        <Button onClick={ refetch } className='pointer x-green'>
          Refetch
        </Button>
              </ActionGrid>
      { currentType.associations.belongsTo.length &&
        <div className='pv-v'>
          <Heading
            headingAs='h1'
            heading='Local associations'
          />
          <ul>
            { currentType.associations.belongsTo.map((e, i) =>
              <li>
                <p>
                  <DotInfo
                    subtitleUpper={ false }
                    className={ (finalData[e.foreignKey]) ? 'y-success' : 'y-warning'}
                  >
                    <code>
                      { JSON.stringify(
                        {
                          [e.foreignKey]:finalData[e.foreignKey] || null
                        }
                      ) }
                    </code>

                  </DotInfo>
                </p>
                <p className='s-1 k-s'>
                  <span>
                    <code className='x-primary c-x'>
                      { finalData.__typename }
                      .
                      { e.as }
                    </code>
                    {' is a foreign key to '}
                    <code className='x-accent1 c-x'>
                      { e.to }
                    </code>
                    {' stored as '}
                    <code className='x-primary c-x'>
                      { finalData.__typename }
                      .
                      { e.foreignKey }
                    </code>
                  </span>
                </p>
              </li>
            ) }
          </ul>
        </div>}
      <div className='pv-v'>
        <Heading
          headingAs='h1'
          heading='Reverse associations'
        />
        <ul>
          { currentType.associations.hasMany &&
            <>
              {currentType.associations.hasMany.map((e, i) =>
                <li>
                  <p>
                    <DotInfo
                      subtitleUpper={ false }
                      //className={ (finalData[e.foreignKey]) ? 'y-success' : 'y-warning'}
                    >
                    </DotInfo>
                  </p>
                  <p className='s-1 k-s'>
                    <span>
                      <code className='x-primary c-x'>
                        { finalData.__typename }
                        .
                        { e.as }
                      </code>
                      {' is the reserve plural FK relationship from '}
                      <code className='x-accent1 c-x'>
                        { e.from }
                        .
                        { e.foreignKey }
                      </code>
                    </span>
                  </p>
                </li>
              ) }
            </>}

        </ul>
      </div>
    </div>
  )
  else return(
    <div
      className={
        [
          //styles[baseClassName],
          baseClassName,
          'x-paragraph',
          's-2 k-s',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <ActionGrid
        item={ finalData }
        loadingSingle={ loading  }
        currentSingleView='Associations'
        title={ name }
      >
        <Button onClick={ refetch } className='pointer x-green'>Refetch</Button>
              </ActionGrid>

      <pre className='c-x'>
        { error && JSON.stringify(error, null, 2) }
      </pre>
      {!(loading || error) &&
        <p className='c-x'>
          If nothing else appears, the object was not found or there was no data returned
          <pre>
            { JSON.stringify(finalData) }
            { JSON.stringify(data) }
          </pre>
        </p>}

    </div>
  )
}

AssociationsView.propTypes = {
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
   * Overloads the automatic detection of the id in the url
   */
  itemId:PropTypes.string,

  /**
   * For the case this needs to be executed inside of a tab context, we use this to change the current tab context
   */
  setCurrentTab:PropTypes.func

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
EditView.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default AssociationsView

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
  GraphQLErrorView
} from '../GraphQLErrorView'

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

import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./associations_view.scss')
}

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
    getType,
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

  if(!finalData.__typename) return(
    <GraphQLErrorView
      item={ finalData }
      loadingSingle={ loading }
      currentSingleView='Associations'
      title='Local Associations'
      error={ error }
      refetch={refetch}
    />
  )

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
        item={ finalData }
        loadingSingle={ loading  }
        currentSingleView='Associations'
        title='Local Associations'
        refetch={ refetch }
      >
      </ActionGrid>

      { currentType.associations.belongsTo.length &&
        <div className='pv-u module uc'>
          <Heading
            headingAs='h2'
            heading='Foreign Keys'
            subtitle='If an object appears here, it means it is referenced by one of the foreign keys of the current object'
          >
          </Heading>

          <div className='belongs-to ul'>
            { currentType.associations.belongsTo.map((e, i) =>{
              const localType = getType(e.to)
              const ObjectCard = localType.defaultViews.card.Component
              return (
                <ObjectCard
                  className='y-background b-y'
                  enableUnlink
                  item={ finalData[e.as] || {} }
                  foreignKey={ e.foreignKey }
                  refetch={ refetch }

                  typeInfo={ currentType.name }
                  objectType={ localType.name }
                >
                </ObjectCard>

              ) } )}
          </div>
        </div>}
      { currentType.associations.hasOne && currentType.associations.hasOne.length &&
        <div className='pv-u module uc'>
          <Heading
            headingAs='h2'
            heading='Reverse 1-to-1'
            subtitle={` If an object appears here, it means its foreign key is set to the current object and no more than one foreign object can have the current object selected. (For instance a site can only receive the foreign key of one location at once)`}
          >
          </Heading>

          <div className='has-one ul'>
            {currentType.associations.hasOne.map((e, i) =>{
              const localType = getType(e.to)
              const ObjectCard = localType.defaultViews.card.Component
              return (
                <ObjectCard
                  className='y-background b-y'
                  enableUnlink
                  item={ finalData[e.as] || {} }
                  foreignKey={ e.foreignKey }
                  refetch={ refetch }

                  typeInfo={ currentType.name }
                  objectType={ localType.name }
                  reverseRelation
                >
                </ObjectCard>

              ) } )}
          </div>
        </div>}
      { currentType.associations.hasMany && currentType.associations.hasMany.length &&
        <div className='pv-u module uc'>
          <Heading
            headingAs='h2'
            heading='Reverse many-to-1'
            subtitle={` If an object appears here, it means its foreign key is set to the current object`}
          >
          </Heading>

          { currentType.associations.hasMany.map(type => {
            const localType = getType(type.to)
            const ObjectCard = localType.defaultViews.card.Component
            const relatedData = finalData[type.as]
            return (
              <div key={type.as} className='pv-u'>
                <Heading
                  headingAs='h4'
                  heading={ localType.plural }
                  subtitle={ relatedData ?
                    relatedData.length ? `There are ${relatedData.length} ${localType.plural} associated with this ${currentType.name}.`
                      : `Key '${type.as}' exists but has length 0.`
                    : `Key '${type.as}' is null on the current ${currentType.name}`}
                >
                </Heading>
                <div className='has-many ul'>
                  { relatedData && relatedData.length &&
                  relatedData.map(item =>
                    <ObjectCard
                      className='y-background b-y'
                      enableUnlink
                      item={ item }
                      foreignKey={ type.foreignKey }
                      refetch={ refetch }

                      typeInfo={ currentType.name }
                      objectType={ localType.name }
                    >
                    </ObjectCard>
                  )
                  }
                </div>
              </div>
            )
          }) }

        </div>}
      {/*
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
      </div>*/}
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

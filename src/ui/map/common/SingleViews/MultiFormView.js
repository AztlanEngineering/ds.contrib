/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useCallback, useMemo} from 'react'
import PropTypes from 'prop-types'

import {
  SingleActions
} from '../SingleActions'

import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/client'

import {
  Accordion,
  Heading,
  Button
} from 'ds-core'

import {
  FormContextProvider,
  FormContextDebugger,
  FormQueryMultiObject,
  FormMultiObject,
  useForm
} from 'ds-form'

import {
  ActionGrid
} from '../ActionGrid'

import {
  GraphQLErrorView
} from '../GraphQLErrorView'

import {
  useModelMap,
} from '../Context'

import { Link, useLocation, useParams, useHistory } from 'react-router-dom'
//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './multi_form_view.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./multi_form_view.scss')
}

const baseClassName = 'multi_form_view'


/**
 * Use `MultiFormView` to
 * Has color `x`
 */
const MultiFormView = ({
  id,
  className,
  style,
  itemId,
  foreignKey
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

  const currentMultiFormInfo = useMemo(() => {
    const typeLower = routeParams.view && routeParams.view.split('-')[1]
    const multiInfo = currentType.defaultViews.multi
    return multiInfo ? multiInfo.find(e => e.type.toLowerCase() === typeLower) || {} : {}
  },
  [
    location.pathname
    //routeParams.type,
    //currentId
  ])

  const currentRelatedType = useMemo(() => getType(currentMultiFormInfo.type),
    [ currentMultiFormInfo ]
  )

  const ObjectCard = useMemo(() => currentRelatedType.defaultViews.card.Component, [currentRelatedType])

  const {
    loading,
    error,
    data,
    refetch
  } = useQuery(gql(currentMultiFormInfo.QUERY || currentType.graphql.queries.FULL || currentType.grqphql.queries.ONE),
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

  const existingItems = finalData[currentMultiFormInfo.accessor] || []

  console.log(8877, 'existing items are', existingItems, finalData, currentMultiFormInfo)

  const MultiFormComponent = currentMultiFormInfo.query ? FormQueryMultiObject : FormMultiObject

  const actionsProps = useMemo(() => ({
    enableDelete:true,
    enableEdit  :true,
    enableUnlink:true,
    foreignKey  :currentMultiFormInfo.foreignKey,
    objectType  :currentMultiFormInfo.type,
    refetch,
  }), [currentMultiFormInfo, refetch])

  const [upsertObjects, {
    data:mutationData,
    error:mutationError,
    loading:mutationLoading
  }] = useMutation(gql(currentMultiFormInfo.MUTATION_UPSERT || currentRelatedType.graphql.mutations.UPDATE))

  const finalMutationData = useMemo(() => {
    var result = []
    if(mutationData) {
      const dataKey = Object.keys(mutationData).reduce((a, e) => e)
      result = mutationData[dataKey]
    }
    return result
  },
  [mutationLoading])

  const SubmitButton = React.memo((props) => {

    const {
      objects,
      getObjectsArray
    /* touched,
         errors,
         isValid */
    } = useForm()

    const mutate = useCallback(() => {
      const variables = {
        inputs:getObjectsArray().map((e) => ({...e, [currentMultiFormInfo.foreignKey]: finalData.id}))
      }
      confirm(`Please take a second to review the updated data and confirm afterwards. \n\n Mutation payload : \n ${JSON.stringify(variables, null, 2)}`) && upsertObjects({variables})
    }, [objects])

    return(
      <Button
        className='x-success'
        compact
        {...props}
        onClick={ !mutationLoading ? mutate : undefined }
        loading={ mutationLoading }
      >
        Submit
      </Button>
    )

  })

  if(!finalData.__typename) return(
    <GraphQLErrorView
      item={ finalData }
      loadingSingle={ loading }
      currentSingleView={ `Multi ${currentMultiFormInfo.type}` }
      title={ `Multi ${currentMultiFormInfo.type}` }
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

      <FormContextProvider
        key={ currentRelatedType && currentRelatedType.name }
        useObjects
      >
        <ActionGrid
          item={ finalData }
          loadingSingle={ loading  }
          currentSingleView={ `Multi ${currentMultiFormInfo.type}` }
          title={ `Multi ${currentMultiFormInfo.type}` }
          refetch={ refetch }
          editMode
        >
          <SubmitButton/>
        </ActionGrid>
        <MultiFormComponent
          key={ mutationData ? finalMutationData[0].updatedAt :'fresh' }
          formClassName='s-1 k-s'
          orderField={ currentMultiFormInfo.orderField }
          inputMap={ currentRelatedType.defaultViews.single.fields.filter(e => e.name !== currentMultiFormInfo.foreignKey) }
          maxExtra={ currentMultiFormInfo.maxExtra || 4 }
          extra={ currentMultiFormInfo.extra || 1 }
          //query={ currentMultiFormInfo.query }
          existing={ existingItems }
          ObjectActions={({objectId}) =>
            <SingleActions
              { ...actionsProps }
              itemId={ objectId }
            />
          }
          ObjectInfo={({item, ...props}) =>
            <div className=''>
              <ObjectCard
                { ...props }
                className='y-background b-y'
                enableUnlink
                item={ item || {}}
                foreignKey={ currentMultiFormInfo.foreignKey }
                typeInfo={ currentType.name }
                objectType={ currentRelatedType.name }
                refetch={ refetch }
                reverseRelation={ true }
              >
              </ObjectCard>
            </div>
          }
        >
        </MultiFormComponent>
        <br />

        <ActionGrid
          lean
          item={ finalData }
          loadingSingle={ loading  }
          currentSingleView={ `Multi ${currentMultiFormInfo.type}` }
          title={ `Multi ${currentMultiFormInfo.type}` }
          refetch={ refetch }
          editMode
        >
          <SubmitButton/>
        </ActionGrid>

        <Accordion
          className='s0 k-s y-white x-subtitle'
          toggleStyle='plus'
        >
          <Accordion.Item
            className='y-blue b-y ui-dark'
            title={
              <Heading
                headingAs='h2'
                heading='Local Graph'
              />
            }
            id={ 'local_graph' }
          >
            <pre className='c-x x-paragraph'>

              { data && JSON.stringify(finalData, null, 2) }
            </pre>
          </Accordion.Item>
          <Accordion.Item
            className='y-background b-y'
            title={
              <Heading
                headingAs='h2'
                heading='Form Debug'
              />
            }
            id={ 'form_debugger' }
          >
            <FormContextDebugger/>
          </Accordion.Item>

          { error &&
            <Accordion.Item
              className='y-error b-dark-y ui-dark'
              title={
                <Heading
                  headingAs='h2'
                  heading='Loading Error (query)'
                  subtitle='This only appears if the object didnt load properly.'
                />
              }
              id={ 'loading_error' }
            >
              <pre className='c-x x-paragraph'>

                { data && JSON.stringify(error, null, 2) }
              </pre>
            </Accordion.Item>}

          {mutationError &&
            <Accordion.Item
              className='y-error b-dark-y ui-dark'
              title={
                <Heading
                  headingAs='h2'
                  heading='Upsert Error (mutation)'
                  subtitle='This only appears if the object didnt save properly.'
                />
              }
              id={ 'mutation_error' }
            >
              <pre className='c-x x-paragraph'>

                { data && JSON.stringify(mutationError, null, 2) }
              </pre>
            </Accordion.Item>}
          { mutationData &&
            <Accordion.Item
              className='y-success b-dark-y ui-dark'
              title={
                <Heading
                  headingAs='h2'
                  heading='Upsert Success (mutation)'
                  subtitle='This only appears if the object did save properly.'
                />
              }
              id={ 'mutation_data' }
            >
              <pre className='c-x x-paragraph'>

                { data && JSON.stringify(mutationData, null, 2) }
              </pre>
            </Accordion.Item>}
        </Accordion>
      </FormContextProvider>
    </div>
  )
}

MultiFormView.propTypes = {
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
   * Overloads the automatic detection of the id in the url
   */
  itemId:PropTypes.string,

  /**
   * If this is displayed in the context of a fk, please enter here the foreign key from the current type
   */
  foreignKey:PropTypes.string,

}

/*
MultiFormView.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default MultiFormView

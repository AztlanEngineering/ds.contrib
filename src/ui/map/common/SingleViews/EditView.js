/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useCallback, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

import {
  FormContextDebugger,
  FormContextProvider,
  FormInput,
  useForm,
} from 'ds-form'

import {
  Accordion,
  Button,
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
} from '../SingleActions'

/*
import {
  MapSingleActions as Actions
} from '../common'
*/

import { Link, useLocation, useParams, useHistory } from 'react-router-dom'

import gql from 'graphql-tag'
import { useLazyQuery, useMutation } from '@apollo/client'
//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './single_view.scss' */

const baseClassName = 'edit_view'


/**
 * Use `EditView` to
 * Has color `x`
 */
const EditViewPayload = ({
  id,
  className,
  style,
  itemId,
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

  const [getItem, {
    loading,
    error,
    data,
    refetch
  }] = useLazyQuery(gql(currentType.graphql.queries.ONE),
    {
      variables:{
        id:itemId || currentId
      },
      skip                       :!currentId || !currentType.name,
      notifyOnNetworkStatusChange:true
    })


  const { fields=[] } = currentType.name ?
    currentType.defaultViews.single : {}

  const finalData = useMemo(() => {
    var result = {}
    if(data) {
      const dataKey = Object.keys(data).reduce((a, e) => e)
      result = data[dataKey]
    }
    return result
  },
  [currentType.name, loading, location, data])

  useEffect(() => {
    if(currentId && (!finalData.id)) {
      getItem({variables: {id: currentId}})
    }
  }, [])

  //console.log(777, loading, error, data, finalData, currentId)

  const name = currentId ? (finalData._string || finalData.name || (finalData.id && finalData.id.substring(0, 8)) || 'Loading') : `New ${currentType.name}`

  const [saveItem, {
    data:mutationData={},
    error:mutationError,
    loading:mutationLoading
  }] = useMutation(gql(
    currentId ?
      currentType.graphql.mutations.UPDATE:
      currentType.graphql.mutations.ADD
  ))

  const mutationResponse = useMemo(() => (mutationData && mutationData[Object.keys(mutationData).reduce((a, e) => {
    return e
  }, '')]) || {},
  [mutationLoading, mutationData])




  useEffect(() =>
  {
    //console.log('SHOULD REDIR here', mutationResponse.id, mutationData)
    if(mutationResponse.id && (mutationResponse.id !== currentId)) {
      const path = generateLocalPath(
        'single',
        {
          guid:mutationResponse.id,
          ...routeParams
        }
      )
      history.push(path)

    }
    if(mutationResponse.id) {
      currentId && refetch()
    }
  }

  ,[ mutationResponse ]
  )

  const {
    mergeValues
    /* touched,
         errors,
         isValid */
  } = useForm()

  useEffect(() => {
    if (mergeValues && mutationResponse.id) {
      mergeValues(mutationResponse)

    }
  }, [mutationResponse.id])

  useEffect(() => {
    if(finalData && finalData.id) {
      mergeValues(finalData)
    }

  }, [finalData])

  const SubmitButton = React.memo((props) => {

    const {
      parsed:values,
      touched,
      setInputValue,
    /* touched,
         errors,
         isValid */
    } = useForm()

    //console.log('rdr submitbtn', values)


    const mutate = useCallback(() => {
      const variables = values ? Object.keys(values).reduce((a, e) => {
        if (Object.keys(touched).includes(e)) {
          const customType = currentType.graphql.types && currentType.graphql.types[e]
          a[e] = customType ? customType(values[e]) : values[e]
        }
        return a
      }
      ,{}) : {}
      if (values && values.id) {
        variables['id'] = values.id

      }
      //console.log('Will now mutate', variables)
      saveItem({variables})
    }, [values])


    return(
      <Button
        className='x-success'
        {...props}
        onClick={ !mutationLoading ? mutate : undefined }
        loading={ mutationLoading }
      >
        Submit
      </Button>
    )
  })

  if(currentId && !finalData.__typename) return (
    <GraphQLErrorView
      item={ finalData }
      loadingSingle={ loading }
      currentSingleView='Edit'
      title={ finalData.id ? 'Edit' : 'New' }
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
        loadingSingle={ loading || mutationLoading }
        currentSingleView='Edit'
        title={ finalData.id ? 'Edit' : 'New' }
        refetch={ refetch }
        editMode
      >
        <SingleActions
          item={ finalData }
          enableDelete={ currentId ? true : false }
          lean
          independent
          reverse={ false }
          redirectAfterDelete={ true }
          style={{
            justifyContent:'end'
          }}
          extraActions={[
            {
              condition:(user) => true,
              Component:SubmitButton
            }
          ]}
        />
      </ActionGrid>
      <div className='pv-v v2'>

        { finalData.createdAt &&
          <Timestamp
            time={ finalData.createdAt }
            className={ 'x-subtitle c-x' }
            prefix={
              <strong>Created</strong>
            }
          />
        }
        { finalData.updatedAt &&
          <Timestamp
            time={ finalData.updatedAt }
            className={ 'x-primary c-x' }
            prefix={
              <strong>Updated</strong>
            }
          />
        }
      </div>
      <div
        className='pv-v v2 s-1 k-s'
        style={{ zIndex: 6 }}
      >
        { fields.map((e, i) =>
          <FormInput
            key={e.inputId}
            compact
            { ...e }
          />
        ) }
      </div>
      <div className='pv-v v2'>
        <ActionGrid
          item={ finalData }
          loadingSingle={ loading || mutationLoading }
          lean
        >
          <SingleActions
            item={ finalData }
            enableDelete={ currentId ? true : false }
            lean
            independent
            reverse={ false }
            redirectAfterDelete={ true }
            style={{
              justifyContent:'end'
            }}
            extraActions={[
              {
                condition:(user) => true,
                Component:SubmitButton
              }
            ]}
          />
        </ActionGrid>
      </div>
      <div className='pv-v v2'>
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
          { mutationError &&
            <Accordion.Item
              className='y-error b-dark-y ui-dark'
              title={
                <Heading
                  headingAs='h2'
                  heading='Save Error (mutation)'
                  subtitle='This only appears if the object didnt save properly.'
                />
              }
              id={ 'mutation_error' }
            >
              <pre className='c-x x-paragraph'>

                { data && JSON.stringify(mutationError, null, 2) }
              </pre>
            </Accordion.Item>}
          { mutationData && (Object.keys(mutationData).length > 0) &&
            <Accordion.Item
              className='y-success b-dark-y ui-dark'
              title={
                <Heading
                  headingAs='h2'
                  heading='Save Success (mutation)'
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
      </div>

    </div>
  )
}

const EditView = (props) => {

  const {
    currentType,
  } = useModelMap()

  return (
    <FormContextProvider
      //initialValues={ finalData }
      parsers={ currentType.graphql.types }
    >
      <EditViewPayload {...props}/>

    </FormContextProvider>

  )
}

EditView.propTypes = {
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

export default EditView

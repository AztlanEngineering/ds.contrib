/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'


import { useObjectMap } from '../Context'

import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/client'

import { Heading, Card } from 'ui/elements'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './card_view.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./card_view.scss')
}

const baseClassName = 'card_view'


/**
 * Use `CardView` to
 * Has color `x`
 */
const CardView = ({
  id,
  className,
  style
}) => {

  const {
    currentType
  } = useObjectMap()

  const CardComponent = currentType.defaultViews.card.Component

  const {
    loading,
    error,
    data={}
  } = useQuery(gql(currentType.graphql.queries.ALL),
    {
      skip:!currentType.name
    })

  const finalData = useMemo(() => (data && data[Object.keys(data).reduce((a, e) => {
    return e
  }, '')]) || [],
  [currentType.name, loading])

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
      <div className="l-cheading">
        <Heading
          className='i-heading'
          heading={ currentType.name }
          headingAs='h1'
        />
        <div className="i-content">
          Content here
        </div>
      </div>
      { loading && 'LOADING' }
      { error && JSON.stringify(error) }

      { data &&
        <Card.Group
          style={{
            '--card-width':currentType.defaultViews.card.minWidth || '200px'
          }}
          className='u0'
        >
          { finalData.map((e, i) =>
            <CardComponent
              backFace={
                <Card.Section>
                  <pre className='x-paragraph c-x'>
                    { JSON.stringify(e, null, 2) }
                  </pre>
                </Card.Section>

              }
              item={ e }
              key={ i }
              className='y-background b-y'
            />
          ) }
        </Card.Group>
      }
    </div>
  )}

CardView.propTypes = {
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
CardView.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default CardView

/* @fwrlines/generator-react-component 2.3.3 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import {
  IconList,
  useSite,
} from '@fwrlines/ds/common'

import {
  Card,
  Heading
} from '@fwrlines/ds/elements'

import {
  Feature ,
  Price,
} from './common'

import PlanContext from './Context'

//Intl

import { FormattedMessage} from 'react-intl'
import messages from './messages'

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './plan.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./plan.scss')
}

const baseClassName = 'plan'


/**
 * Use `Plan` to
 * Has color `x`
 */
const Plan = ({
  id,
  className,
  style,
  children,

  textClassName,
  name,

  price,
  currency,
  Cta,

  ...otherProps
}) => {

  return (
    <PlanContext.Provider value={{
      textClassName,
      name,
    }}
    >
      <Card
        className={
          [
            //styles[baseClassName],
            baseClassName,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={{
          overflow:'visible',
          ...style,
        }}
        { ...otherProps }
      >
        <Card.Section className='price_tag'>

          <Heading
            heading={ name }
            headingClassName={
              [
                'h3',
                textClassName
              ].filter(e => e).join(' ')
            }
          />
          <Price
            price={ price }
            currency={ currency }
          >
          </Price>
        </Card.Section>
        <Card.Section className='features'>
          <Heading
            heading={ <FormattedMessage {...messages.features } /> }
            headingClassName={
              [
                'h4',
                textClassName
              ].filter(e => e).join(' ')
            }
          />
          <IconList className={textClassName}>
            { children }
          </IconList>
        </Card.Section>
        { Cta &&
          <Card.Section className='ur'>
            <Cta name={ name } />
          </Card.Section>

        }
      </Card>
    </PlanContext.Provider>
  )}

Plan.propTypes = {
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
   * The html class names to be provided to all the children and grandchildren text elements
   */
  textClassName:PropTypes.string,

  /**
   * The plan name
   */
  name:PropTypes.string.isRequired,

  /**
   * The price, passed to `Plan.Price`
   */
  price:PropTypes.string,

  /**
   * The currency, passed to `Price``
   */
  currency:PropTypes.string,

  /**
   * The cta
   */
  Cta:PropTypes.node,
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

Plan.defaultProps = {
  currency:'€',
}

Plan.Feature = Feature
Plan.Price = Feature

export default Plan

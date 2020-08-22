/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import FormContext from '../FormContext'


/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './debugger.scss'
   import './debugger.scss' */

//const baseClassName = 'debugger'


/**
 * Use `Debugger` to
 * Has color `x`
 */
const Debugger = ({
  context,

  id,
  className,
  style,

  as:Wrapper
}) => {
  const {
    values,
    parsed,
    touched,
    errors,
    isValid
  } = useContext(context)

  return (
    <Wrapper
    /*
    className={
      [
        //styles[baseClassName],
        baseClassName,
        className
      ].filter(e => e).join(' ')
  }
     */
      id={ id }
      style={ style }
    >
      <div>
        <p className='h2'>Values</p>
        <ul className='compact'>
          { values && Object.keys(values).map((e, i) =>
            <li key={i}>
              <em>{ e }</em>
&nbsp;:&nbsp;
              { JSON.stringify(values[e]) }
              {/* (values[e] && values[e].size) ? '[' + [...values[e]].join(', ')+ ']' : values[e] */}
            </li>
          )
          }
        </ul>
      </div>
      <div>
        <p className='h2'>Parsed</p>
        <ul className='compact'>
          { values && Object.keys(parsed).map((e, i) =>
            <li key={i}>
              <em>{ e }</em>
&nbsp;:&nbsp;
              { JSON.stringify(parsed[e]) }
              {/* (values[e] && values[e].size) ? '[' + [...values[e]].join(', ')+ ']' : values[e] */}
            </li>
          )
          }
        </ul>
      </div>
      <div>
        <p className='h2'>Touched</p>
        <ul className='compact'>
          { touched && Object.keys(touched).map((e, i) =>
            <li key={i}>
              <em>{ e }</em>
&nbsp;:&nbsp;
              { String(touched[e]) }
            </li>
          )
          }
        </ul>
      </div>
      <div>
        <p className='h2'>Errors</p>
        <ul className='compact'>
          { errors && Object.keys(errors).map((e, i) =>
            <li key={i}>
              <em>{ e }</em>
&nbsp;:&nbsp;
              { JSON.stringify(errors[e]) }
            </li>
          )
          }
        </ul>
      </div>
      <div>
        { isValid ? 
            <p className='h2'>
              FORM IS VALID
            </p>:
            <p className='h2'>
              FORM IS INVALID
            </p>
        }
      </div>

    </Wrapper>
  )}

Debugger.propTypes = {
  /**
   * A react context object to instantiate the provider
   */
  context:PropTypes.object,

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
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

}

Debugger.defaultProps = {
  context:FormContext,
  as     :'div'
  /* height:'2.2em',
     as:'p', */
}

export default Debugger

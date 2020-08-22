/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useReducer, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

import {
  Item,
  Debug,
} from './common'

import AccordionContext from './common/Context'


//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './accordion.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./accordion.scss')
}

const baseClassName = 'accordion'

const reducer = (state, action) =>{
  switch (action.type) {
  case 'REGISTER':
    //console.log(action)
    return {
      ...state,
      items:[...state.items, action.payload].sort(),
    }
  case 'UNREGISTER':
    return {
      ...state,
      items:state.items.filter(e => e !== action.payload),
      open :state.open.filter(e => e !== action.payload),
    }
  case 'TOGGLE_ONE':
    return {
      ...state,
      open:state.open.includes(action.payload) ?
        state.open.filter(e => e !== action.payload) :
        [...state.open, action.payload].sort(),
    }
  case 'OPEN_ONE':
    return {
      ...state,
      open:[...state.open, action.payload].sort(),
    }
  case 'OPEN_ALL':
    return {
      ...state,
      open:state.items.map(e => e)
    }
  case 'CLOSE_ONE':
    return {
      ...state,
      open:state.open.filter(e => e !== action.payload),
    }
  case 'CLOSE_ALL':
    return {
      ...state,
      open:[]
    }

  default:
    return state
  }

}


/**
 * Use `Accordion` to
 * Has color `x`
 */
const Accordion = ({
  id,
  className,
  style,
  children,

  as:Wrapper,

  toggleStyle
}) => {

  const [{ items, open }, dispatch] = useReducer(reducer, {
    items:[],
    open :[]
  })

  //console.log("ITEMS", items)


  const openOne = useMemo(
    () => (id) => {
      //console.log('O1')
      dispatch({
        type   :'OPEN_ONE',
        payload:id
      })
    },
    []
  )

  const openAll = useMemo(
    () => () => {
      console.log('OA')
      dispatch({
        type:'OPEN_ALL',
      })
    },
    []
  )

  const toggleOne = useMemo(
    () => (id) => {
      dispatch({
        type   :'TOGGLE_ONE',
        payload:id
      })
    },
    []
  )

  const closeAll = useMemo(
    () => () => {
      console.log('CA')
      dispatch({
        type:'CLOSE_ALL',
      })
    },
    []
  )

  const closeOne = useMemo(
    () => (id) => {
      console.log('C1')
      dispatch({
        type   :'CLOSE_ONE',
        payload:id
      })
    },
    []
  )

  const register = useMemo(
    () => (id) => {
      console.log('REG', id)
      dispatch({
        type   :'REGISTER',
        payload:id
      })
    },
    []
  )


  const unregister = useMemo(
    () => (id) => {
      dispatch({
        type   :'UNREGISTER',
        payload:id
      })
    },
    []
  )

  return (
    <AccordionContext.Provider
      value={{
        toggleStyle,
        openItems:open,
        items,
        openOne,
        openAll,
        toggleOne,
        closeOne,
        closeAll,
        register,
        unregister
      }}
    >
      <Wrapper
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
        { children }
      </Wrapper>
    </AccordionContext.Provider>
  )}

Accordion.propTypes = {
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
   * The style of the accordion item
   */
  toggleStyle:PropTypes.oneOf(['plus', 'caret'])
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

Accordion.defaultProps = {
  as         :'div',
  toggleStyle:'caret'
  /* height:'2.2em',
     as:'p', */
}

Accordion.Item = Item
Accordion.Debug = Debug

export default Accordion

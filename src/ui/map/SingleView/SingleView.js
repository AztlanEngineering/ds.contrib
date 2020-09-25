/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useCallback, useMemo, useState, useEffect } from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'


import {
  useModelMap,
} from '../common'


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
  import('./single_view.scss')
}

const baseClassName = 'single_view'

import {
  useHistory,
  useLocation,
  useParams,
  Link
} from 'react-router-dom'
/**
 * Use `SingleView` to
 * Has color `x`
 */
const SingleView = ({
  id,
  className,
  style,
  //setCurrentTab
}) => {

  const location = useLocation()

  const history = useHistory()

  const {
    currentType={},
    generateLocalPath,
    availableSingleViews:availableViews
  } = useModelMap()

  const {
    guid:currentId,
    view,
    ...routeParams
  } = useParams()


  const findCurrentView = useCallback(viewParam =>
    currentId ? availableViews.find(e => e.view === viewParam) || availableViews[0] : availableViews[0]
  ,
  [availableViews, currentId]
  )

  const [currentView, setCurrentView] = useState(
    findCurrentView(view)
  )

  useEffect(() => {
    if(view !== currentView.view) {
      //console.log('View changes', findCurrentView(view), view)
      setCurrentView(findCurrentView(view))
    }
    /*
    if(setCurrentTab) {
      setCurrentTab({
        path :`${location.pathname}`,
        title:`${currentType.name} | ${currentView.name}`
      })
    }*/
  }, [view])




  const {
    Component:ViewComponent=null
  } = currentView

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
      key={ currentId }

    >
      { currentType.name ?
        <ViewComponent/>
        :
        'Type not found'
      }
    </div>
  )
}

SingleView.propTypes = {
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
SingleView.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default SingleView

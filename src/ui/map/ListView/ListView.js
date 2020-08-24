/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useCallback, useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  useModelMap,
  TableView,
  CardView,
} from '../common'


import {
  Button,
  Shortcut
} from 'ds-core'

import {
  useHistory,
  useLocation,
  useParams,
  Link
} from 'react-router-dom'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './list_view.scss' */

const baseClassName = 'list_view'

/**
 * Use `ListView` to
 * Has color `x`
 */
const ListView = ({
  id,
  className,
  style,
  setCurrentTab
}) => {

  const location = useLocation()

  const history = useHistory()

  const {
    currentType={},
    generateLocalPath,
    availableListViews:availableViews
  } = useModelMap()

  const { view, ...routeParams } = useParams()


  const findCurrentView = useCallback(viewParam =>
    availableViews.find(e => e.view === viewParam) || availableViews[0]
    ,
    [availableViews]
  )


  const [currentView, setCurrentView] = useState(
    findCurrentView(view)
  )

  useEffect(() => {
    if(view !== currentView.view) {
      setCurrentView(findCurrentView(view))
    }
    if(setCurrentTab) {
      setCurrentTab({
        path :`${location.pathname}`,
        title:`${currentType.name} | ${currentView.name}`
      })
    }
  }, [view])



  const getViewUrl = (newView) => {
    return newView.length ? generateLocalPath(
      'listAlt',
      {
        ...routeParams,
        view:newView
      }
    ) : generateLocalPath(
      'list',
      {
        ...routeParams
      }
    )
  }

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
    >
      { currentType.name ?
        <ViewComponent/>
        :
        'Type not found'
      }
    </div>
  )
}

ListView.propTypes = {
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
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

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
ListView.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default ListView

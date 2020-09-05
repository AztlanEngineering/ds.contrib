/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import { Actions } from './common'



import {
  useHistory,
  useLocation,
  useParams,
  Link
} from 'react-router-dom'

import {
  Button,
  Label,
  Shortcut,
  InlineLoader
} from 'ds-core'

import {
  useTabline
} from 'ui/tabs'

import {
  useModelMap ,
} from '../Context'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './action_grid.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./action_grid.scss')
}

const baseClassName = 'action_grid'


/**
 * Use `ActionGrid` to
 * Has color `x`
 */
const ActionGrid = ({
  id,
  className,
  style,
  children,

  currentListView,
  currentSingleView,

  loadingSingle,
  loadingList,

  item,

  title,
  editMode,

  lean
}) => {

  const history = useHistory()

  const routeParams = useParams()

  const {
    setCurrentTab
  } = useTabline()

  const {
    currentType,
    availableListViews,
    availableSingleViews,
    generateLocalPath,
  } = useModelMap()

  const getListViewUrl = useCallback((newView) => {
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
  }, [routeParams])

  const getSingleViewUrl = useCallback((newView) => {
    return newView.length ? generateLocalPath(
      'singleAlt',
      {
        ...routeParams,
        view:newView,
      }
    ) : generateLocalPath(
      'single',
      {
        ...routeParams,
      }
    )
  }, [routeParams])

  const getNewViewUrl = useCallback(() => {
    return generateLocalPath(
      'new',
      {
        ...routeParams,
        //view:newView
      }
    )
  }, [routeParams])


  const newViewUrl = getNewViewUrl()

  const name = (item && item.id) ? (item._string || item.name || (item.id && item.id.substring(0, 8)) || 'Loading') : `New ${currentType.name}`

  useEffect(() =>
  {
    !lean && setCurrentTab && setCurrentTab({
      path :`${location.pathname}`,
      title:(item && item.id) ?
        (
          <>
            <Label
              className='x-accent2 s-2 k-s'
              basic
              style={{ margin: 0 }}
            >
              { currentSingleView }
            </Label>
            <span>
              &nbsp;
              {name }
            </span>
          </>

        ) :
        (
          <>
            <Label
              className='x-accent1 s-2 k-s'
              basic
              style={{ margin: 0 }}
            >
              { currentListView }
            </Label>
            <span>
              &nbsp;
              { currentType.name }
            </span>
          </>

        )
    })
  },
  [item, currentSingleView, currentListView, currentType.name]
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
      { !lean &&
        <>
          <span className='h3 x-subtitle c-x f-m'>
            {
              loadingList ?
                <InlineLoader type='circle'/>:
                //JSON.stringify({ __typename: currentType.name })}
                currentType.name}
          </span>

          <Actions>
            { (availableListViews.length > 1) && availableListViews.map((e, i) =>{
              const isActive = e.name === currentListView
              return (
                <Link
                  to={ getListViewUrl(e.view) }
                  key={i}
                >
                  <Button
                    className={ isActive ? e.className : 'x-grey' }
                    key={i}
                  >
                    <strong>
                      { e.name }
                    </strong>
                    {' '}
                    { !editMode &&
                      <Shortcut
                        className='s-2 k-s x-white ul'
                        action={
                          () => history.push(getListViewUrl(e.view))
                        }
                        keys={[
                          e.shortcut
                        ]}
                      />
                    }
                  </Button>
                </Link>

              )
            }
            ) }
            <Link to={ newViewUrl } >
              <Button className='x-orange'>
                New
                {' '}
                { !editMode &&
                  <Shortcut
                    className='s-2 k-s x-white ul'
                    action={
                      () => history.push(newViewUrl)
                    }
                    keys={[
                      'n'
                    ]}
                  />
                }
              </Button>
            </Link>
          </Actions>
          { item && item.id &&
            <>
              <span className='h3 x-subtitle c-x f-m'>

                {loadingSingle ?
                  <InlineLoader type='circle'/>:
                  //JSON.stringify({ _string: item._string })}
                  item._string || item.name || ' '}
              </span>
              <Actions>
                { (availableSingleViews.length > 1) && availableSingleViews.map((e, i) =>{
                  const isActive = e.name === currentSingleView
                  return (
                    <Link
                      to={ getSingleViewUrl(e.view) }
                      key={i}
                    >
                      <Button
                        className={ isActive ? e.className : 'x-grey' }
                        key={i}
                      >
                        <strong>
                          { e.name }
                        </strong>
                        {' '}
                        { !editMode &&
                          <Shortcut
                            className='s-2 k-s x-white ul'
                            action={
                              () => history.push(getSingleViewUrl(e.view))
                            }
                            keys={[
                              e.shortcut
                            ]}
                          />}
                      </Button>
                    </Link>

                  )
                }
                ) }

              </Actions>
            </>
          }
        </>
      }
      <>
        <span className='h3 f-m'>
          { title || ' ' }
        </span>
        { children &&
          <Actions independent>
            { children }
          </Actions>}
      </>
    </div>
  )}

ActionGrid.propTypes = {
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


  /**
   * like 'cards'
   */
  currentListView:PropTypes.string,

  /**
   * like 'associations'
   */
  currentSingleView:PropTypes.string,


  /**
   * The selected item. Usually a graphql object from the response
   */
  item:PropTypes.object,


  /**
   * Whether a list view is loading
   */
  loadingList:PropTypes.bool,

  /**
   * Whether a single view is loading
   */
  loadingSingle:PropTypes.bool,

  /**
   * Only displays the options
   */
  lean:PropTypes.bool,

  /**
   * Whether edit mode is enabled (no shortcuts)
   */
  editMode:PropTypes.bool,

  /**
   * The title to display of the element
   */
  title:PropTypes.string,

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

ActionGrid.defaultProps = {
  loadingSingle:false,
  loadingList  :false,
  editMode     :false,
  lean         :false,
  /* height:'2.2em',
     as:'p', */
}
export default ActionGrid

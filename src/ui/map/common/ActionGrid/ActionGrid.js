/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Actions } from './common'



import {
  useHistory,
  Link
} from 'react-router-dom'

import {
  Button,
  Shortcut
} from 'ds-core'

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
  item
}) => {

  const history = useHistory()

  const {
    currentType,
    availableListViews,
    generateLocalPath,
    getListViewUrl,
    getNewViewUrl
  } = useModelMap()


  const newViewUrl = getNewViewUrl()
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
      <span className='h3 f-m'>{JSON.stringify({ __typename:currentType.name })}</span>

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
                <Shortcut
                  className='s-2 k-s x-white ul'
                  action={
                    () => history.push(getListViewUrl(e.view))
                  }
                  keys={[
                    e.shortcut
                  ]}
                />
              </Button>
            </Link>

          )
        }
        ) }
        <Link to={ newViewUrl } >
          <Button className='x-orange'>
            New
            {' '}
            <Shortcut
              className='s-2 k-s x-white ul'
              action={
                () => history.push(newViewUrl)
              }
              keys={[
                'n'
              ]}
            />
          </Button>
        </Link>
      </Actions>
      { item &&
        <>
      <span className='h3 f-m'>
          {JSON.stringify({ object:item._string })}
      </span>
          <Actions>
          </Actions>
        </>
      }
      {
        children &&
          <>
      <span className='h3 f-m'>
        Options
      </span>
            <Actions>
              { children }
            </Actions>
            </>
      }
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
ActionGrid.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default ActionGrid

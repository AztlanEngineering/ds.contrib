/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'ui/elements'

import { useObjectMap } from '../Context'

import { useTable, useSortBy } from 'react-table'

import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/client'
//Intl
import { SingleActions } from '../SingleActions'
import { Row } from './common'

import { Keys, Popup, InlineLoader } from 'ui/common'

import { Shortcut } from 'ui/site'

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './table_view.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./table_view.scss')
}

const baseClassName = 'table_view'


/**
 * Use `TableView` to
 * Has color `x`
 */
const TableView = ({
  id,
  className,
  style,
}) => {

  const [columnSelectorDisplay, setColumnSelectorDisplay] = useState(false)

  const {
    currentType
  } = useObjectMap()

  const {
    loading,
    error,
    data={},
    refetch
  } = useQuery(gql(currentType.graphql.queries.ALL),
    {
      skip                       :!currentType.name,
      notifyOnNetworkStatusChange:true
    })

  const columns = useMemo(() => currentType.defaultViews.table.columns, [currentType.name])
  const finalData = useMemo(() => (data && data[Object.keys(data).reduce((a, e) => {
    return e
  }, '')]) || [],
  [currentType.name, loading])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
  } = useTable(
    {
      columns,
      data        :finalData,
      initialState:currentType.defaultViews.table.initialState,
    },
    useSortBy
  )

  const firstPageRows = rows

  if(!(loading || error)) return (
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
      { error && JSON.stringify(error) }
      <Button.Group
        style={{
          justifyContent:'flex-end'
        }}
        independent
      >
        <Button
          className='x-grey b-dark-x ui-dark'
          disabled
        >
          Multi-sort
          {' '}
          <Keys
            keys={['shift']}
            className='x-paragraph c-x s-2 k-s ul'
          />
        </Button>
        <Button
          id='toggle_button'
          className='x-yellow'
          style={{ overflow: 'initial' }}
          onMouseEnter={() => setColumnSelectorDisplay(true)}
          onMouseLeave={() => setColumnSelectorDisplay(false)}
        >
          Toggle
          {' '}
          <Shortcut
            className='s-2 k-s x-white ul'
            action={
              () => setColumnSelectorDisplay(!columnSelectorDisplay)
            }
            keys={[
              'g'
            ]}
          />
          <Popup
            className='u50'
            isVisible={ columnSelectorDisplay }
          >
            <div
              className='l-resgrid ul'
            >
              <div className='p-u'>
                <span className='tb fh x-paragraph c-x'>
                  Visible
                </span>
                <ul className='compact visible-columns'>
                  {allColumns.map(column =>
                    (column.isVisible && !(column.id === 'id')) &&
                      <li key={column.id}>
                        <label>
                          <input
                            type='checkbox'
                            {...column.getToggleHiddenProps()}
                          />
                          {' '}
                          {column.id}
                        </label>
                      </li>
                  )}
                </ul>
              </div>
              <div className='p-u'>
                <span className='tb fh x-paragraph c-x'>
                  Hidden
                </span>
                <ul className='compact hidden-columns'>
                  {allColumns.map(column =>
                    !column.isVisible &&
                      <li key={column.id}>
                        <label>
                          <input
                            type='checkbox'
                            {...column.getToggleHiddenProps()}
                          />
                          {' '}
                          {column.id}
                        </label>
                      </li>
                  )}
                </ul>
              </div>
            </div>
          </Popup>
        </Button>
        <Button
          onClick={ !loading ? () => refetch() : undefined }
          className='x-green'
          loading={ loading }
        >
          Refetch
          {' '}
          <Shortcut
            className='s-2 k-s x-white ul'
            action={
              () => refetch()
            }
            keys={[
              'r'
            ]}
          />
        </Button>
      </Button.Group>

      <br />


      { data &&
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((e, i) => (
              <tr
                {...e.getHeaderGroupProps()}
                key={i}
              >
                {e.headers.map((f, j) => (
                /* Add the sorting props to control sorting. For this example
                   we can add them into the header props */
                  <th
                    {...f.getHeaderProps(f.getSortByToggleProps())}
                    key={j}
                  >
                    <div className='yf inside'>
                      {f.render('Header')}
                      {/* Add a sort direction indicator */}
                      <span className='fi'>
                        {f.isSorted
                          ? f.isSortedDesc
                            ? 'j'
                            : 'k'
                          : ''}
                      </span>
                    </div>
                  </th>
                ))}
                <th className='actions'>
                  Actions
                </th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map(
              (e, i) => {
                prepareRow(e)
                return (
                  <tr
                    {...e.getRowProps()}
                    key={i}
                  >
                    {e.cells.map(cell => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )
                    })}
                    <td className='actions'>
                      <SingleActions
                        className='s-2 k-s'
                        style={{ justifyContent: 'flex-end' }}
                        item={ e.values }
                        refetch={ refetch }
                        extraActions={
                          currentType.actions ? currentType.actions.extraActions: undefined
                        }
                      />
                    </td>
                  </tr>
                )}
            )}

          </tbody>
        </table>
      }
    </div>
  )
  else return(
    <div
      className={
        [
          //styles[baseClassName],
          baseClassName,
          'x-paragraph',
          's-2 k-s',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >

      { loading && <InlineLoader/> }
      <pre className='c-x'>
        { error && JSON.stringify(error, null, 2) }
      </pre>
      {!(loading || error) &&
        <p className='c-x'>
          If nothing else appears, the object was not found or there was no data returned
        </p>}

    </div>
  )
}

TableView.propTypes = {
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
TableView.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default TableView

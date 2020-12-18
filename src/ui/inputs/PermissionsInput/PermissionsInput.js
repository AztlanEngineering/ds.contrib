/* @fwrlines/generator-react-component 2.5.1 */
import * as React from 'react'
import { useState, useMemo, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useTable, useSortBy } from 'react-table'

import { Button } from 'ds-core'

import {
  useFormInput,
  FormContext,
  InputHolder,
} from 'ds-form'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './permissions_input.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./permissions_input.scss')
}

const baseClassName = 'permissions_input'


/**
 * Use `PermissionsInput` to
 * Has color `x`
 */
const PermissionsInput = ({
  id,
  className,
  style,

  valid,
  disabled,
  optional,
  aesthetic,
  compact,

  name,
  context,
  cleanup,
  defaultPermissionsList,

  label,
  labelId,
  labelClassName,
  labelStyle,

  description,
  descriptionAs,
  descriptionClassName,
  descriptionStyle,
}) => {

  const {
    value,
    touched,
    errors,
    setInputValue,
    setInputTouched,
  } = useFormInput(name, context, cleanup)

  const [ newPermission, setNewPermission ] = useState()

  const onChangeNewPermission = useCallback(event => {
    setNewPermission(event.target.value)
  }, [setNewPermission])

  const [ additionalPermissions, setAdditionalPermissions ] = useState([])

  const addNewPermission = useCallback(() => {
    setAdditionalPermissions([...additionalPermissions, {
      type :null,
      value:newPermission
    }])
    setInputValue(value?.push(newPermission) || [newPermission])
  }, [newPermission, setAdditionalPermissions, value])
  /*
  useEffect(() => {
    setInputValue([1,2,3])
  }, [])
  */


  //Populate additional perms if not provided in defaultPermissionsList
  const defaultPermissionsValues = useMemo(() =>
    defaultPermissionsList.reduce((a ,e) => {
      a.push(e.value)
      return a
    }, [])
  ,[ defaultPermissionsList ])

  useEffect(() => {
    if(value) {
      const newAdditionalPerms = value.filter(e => !defaultPermissionsValues.includes(e))
      if (newAdditionalPerms?.length){
        const newSet = new Set([
          ...additionalPermissions,
          ...newAdditionalPerms.map(e => ({
            type :null,
            value:e
          }))
        ])
        setAdditionalPermissions(Array.from(newSet))
      }
    }
  }, [value, defaultPermissionsValues])

  const onCheckboxChange = useCallback(event => {
    !touched && setInputTouched()
    const newSet = new Set(value)
    const permissionValue = event.target.value
    //console.log(newSet, permissionValue, value)
    newSet.has(permissionValue) ? newSet.delete(permissionValue) : newSet.add(permissionValue)
    setInputValue(Array.from(newSet))
  }, [setInputValue, value])

  const holderProps = {
    id,
    className:[
    //styles[baseClassName],
      baseClassName,
      className
    ].filter(e => e).join(' '),
    style,

    errors,
    valid,

    disabled,
    optional,

    aesthetic,
    compact,

    //inputId,

    label,
    labelId,
    labelClassName,
    labelStyle,

    description,
    descriptionAs,
    descriptionClassName,
    descriptionStyle,

    suffix:value && <span>
      { value.length }
      {' '}
      permission
      { (value.length > 1) && 's' }
      {' '}
      selected
    </span>

  }


  const columns = useMemo(
    () => [
      {
        Header  :'Type',
        accessor:'type',
      },
      {
        Header  :'Dangerous',
        accessor:'dangerous',
        Cell    :(v) => v.value ? (
          <span className='x-warning c-x fi'>
            !
          </span>
        ) : null,
        sortType:(rowA, rowB) => {
          const a = rowA.original.dangerous
          const b = rowB.original.dangerous

          if (!(a ^ b)) return 0
          if (!a && b) return 1
          if (!b && a) return -1
        },
      },
      {
        Header  :'value',
        accessor:'value',
        Cell    :(cell) => (
          <label htmlFor={`${name}_${ cell.row.original.value }`}>
            { cell.value }
          </label>
        ),
      },
      {
        Header  :'Enabled',
        accessor:(d) => value?.includes(d.value),
        Cell    :(cell) => {
          //console.log(v)
          return(<input
            id={`${name}_${ cell.row.original.value }`}
            name={ cell.row.original.value }
            value={ cell.row.original.value }
            type='checkbox'
            checked={ value?.includes(cell.row.original.value) }
            onChange={ onCheckboxChange }
                 />)
        },
        sortType:(rowA, rowB) => {
          const a = value?.includes(rowA.original.value)
          const b = value?.includes(rowB.original.value)

          if (!(a ^ b)) return 0
          if (!a && b) return 1
          if (!b && a) return -1
        },
      },
    ],
    [value]
  )

  const permissions = useMemo(() => [
    ...defaultPermissionsList,
    ...additionalPermissions
  ],
  [ defaultPermissionsList, additionalPermissions ]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data:permissions,
  },
  useSortBy
  )

  const getRowProps = useCallback(row => ({
    className:`${value?.includes(row.original.value) ? 'x-success b-x c-on-x' : null}`,
  }), [value]
  )

  return (
    <InputHolder {...holderProps}>
      <div className='input_content'>
        <div className='permission_selector'>
          <table
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    /* Add the sorting props to control sorting. For this example
                       we can add them into the header props */
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      <div className='yf fb'>
                        {column.render('Header')}
                        {/* Add a sort direction indicator */}
                        <span className='fi'>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? 'j'
                              : 'k'
                            : ''}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps(getRowProps(row))}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className='add_other'>
            <label htmlFor={`${name}_add_other_permission`}>Add permission</label>
            {' '}
            <input
              type='text'
              id={`${name}_add_other_permission`}
              placeholder='has_beta_access'
              onChange={ onChangeNewPermission }
              value={ newPermission }
            />
            &nbsp;
            <Button
              className='x-grey'
              onClick={ addNewPermission }
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </InputHolder>
  )}

PermissionsInput.propTypes = {
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
  * Whether the input is valid. If a sentence, will be displayed before the description.
  */
  valid:PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),

  /**
  * Whether the input is disabled. This property is applied at the wrapper level, and only if the wrapper is a fieldset
  */
  disabled:PropTypes.bool,

  /**
  * Whether the input is optional. Is considered a better practice than to mark the required fields
  */
  optional:PropTypes.bool,

  /**
  * The display style.
  */
  aesthetic:PropTypes.oneOf(['mars', 'saturn']),

  /**
  * Whether the input is compact
  */
  compact:PropTypes.bool,

  /**
   * The input name
   */
  name:PropTypes.string.isRequired,

  /**
   * A list of permissions as objects
   */
  defaultPermissionsList:PropTypes.arrayOf(PropTypes.shape({
    type     :PropTypes.string.isRequired,
    value    :PropTypes.string.isRequired,
    dangerous:PropTypes.boolean
  })),

  /**
 * The content of the label
 */
  label:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
 * Provide an HTML id to the label
 */
  labelId:PropTypes.string,

  /**
 * The html class names to be provided to the label
 */
  labelClassName:PropTypes.string,

  /**
 * The JSX-Written, css styles to apply to the label.
 */
  labelStyle :PropTypes.object,
  /**
 * The input description
 */
  description:PropTypes.string,

  /**
 * The html class names to be provided to the input description
 */
  descriptionClassName:PropTypes.string,

  /**
 * The JSX-Written, css styles to apply to the input description.
 */
  descriptionStyle:PropTypes.object,

  /**
 * Which html tag to use
 */
  descriptionAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),


  /*
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

PermissionsInput.defaultProps = {
  context  :FormContext,
  cleanup  :true,
  aesthetic:'mars',
  /* height:'2.2em',
     as:'p', */
}

export default PermissionsInput

/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'ui/elements'

import { Actions } from '../../Actions'



//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './row.scss' */
const baseClassName = 'row'


/**
 * Use `Row` to
 * Has color `x`
 */
const Row = ({
  id,
  className,
  style,

  row,

  refetch,
  extraActions,
}) => {

  const [displayDetails, setDisplayDetails] = useState(false)

  const toggleDisplayDetails = setDisplayDetails(!displayDetails)

  const DisplayJsonButton = useMemo(() => () => {
    return (
      <Button
        className='x-yellow'
        onClick={ toggleDisplayDetails }
      >
        JSON
      </Button>
    )
  })


  return (
    <>
      <tr
        {...row.getRowProps()}
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
        {row.cells.map(cell => {
          return (

            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
          )
        })}
        <td className='actions'>
          <Actions
            className='s-2 k-s'
            style={{ justifyContent: 'end' }}
            item={ row.values }
            refetch={ refetch }
          />
        </td>
      </tr>
      { displayDetails &&
        <tr>
          <td className='x-paragraph s-1 k-s'>
            <pre>
              { JSON.stringify(row.values, null, 2) }
            </pre>
          </td>
        </tr>
      }
    </>
  )}

Row.propTypes = {
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

Row.defaultProps = {
  extraActions:[]
}
export default Row

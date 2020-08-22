/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'ui/elements'


import AccordionContext from './Context'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './debug.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
}

const baseClassName = 'debug'


/**
 * Use `Debug` to
 * Has color `x`
 */
const Debug = ({
}) => {
  //console.log('IN THE DEBUG', AccordionContext)

  const {
    openOne,
    openAll,
    closeAll,
    closeOne,
    toggleOne,
    items,
    openItems
  } = useContext(AccordionContext)

  const actions = [
    {
      className:'x-green',
      name     :'Open all',
      action   :() => openAll(),
    },
    {
      className:'x-green',
      name     :'Open #0',
      action   :() => openOne(items[0]),
    },
    {
      className:'x-red',
      name     :'Close all',
      action   :() => closeAll(),
    },
    {
      className:'x-red',
      name     :'Close #0',
      action   :() => closeOne(items[0]),
    },
    {
      className:'x-blue',
      name     :'Toggle #1',
      action   :() => toggleOne(items[1]),
    },
  ]


  return (
    <>
      <p>
        <strong>All </strong>
        { items }
      </p>
      <p>
        <strong>Open </strong>
        { openItems }
      </p>
      <Button.Group stretch='horizontal'>
        { actions.map((e ,i)=>
          <Button
            className={
              [
              //styles[baseClassName],
                e.className,
              ].filter(e => e).join(' ')
            }
            onClick={ e.action }
          >
            { e.name }
          </Button>
        ) }
      </Button.Group>
    </>
  )}

Debug.propTypes = {
}

/*
Debug.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Debug

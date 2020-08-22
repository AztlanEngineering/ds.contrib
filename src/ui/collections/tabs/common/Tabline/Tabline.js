/* @fwrlines/generator-react-component 2.2.5 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import { DownshiftSelect } from 'ui/form'
import { Context as TabContext } from '../Context'

import { Tab } from './common'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './tabline.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./tabline.scss')
}

const baseClassName = 'tabline'


/**
 * Use `Tabline` to
 * Has color `x`
 */
const Tabline = ({
  id,
  className,
  style,

  FooterComponent
}) => {

  const {
    openMenuOptions,
    tabs,

    openNewTab,
  } = useContext(TabContext)


  const onSelectedItemChange = ({selectedItem}) => {
    openNewTab({
      path :selectedItem.value,
      title:selectedItem.label,
      className:selectedItem.className
    })
  }

  const displaySelectedItem = (item) => ''

  return (
    <ul
      className={
        [
        //styles[baseClassName],
          baseClassName,
          //'x-blue b-x',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { tabs.map((e, i) =>
        <Tab
          key={ i }
          tabId={e.id}
          closable={ e.closable }
          className={ e.className }
        >
          <strong>
          { e.title || e.label }
          </strong>
        </Tab>
      ) }
      <li className='add-tab'>
        <DownshiftSelect
          inputId='tabs-open-menu'
          //label="Please select your favourite fruit"
          options={openMenuOptions}
          //description="Here is a list of very tasty fruits you can choose your favourite from"
          aesthetic='mars'
          onSelectedItemChange={ onSelectedItemChange }
          displaySelectedItem={ displaySelectedItem }
          /* setInputValue={setInputValue}
           value={preferredTheme} */
          buttonChildren=''
          value=''
          popupClassName='ul'
          itemClassName='ph-u'
          popupStyle={{

          }}
          style={{
            display:'inline-block',
            width  :'auto'
          }}
          buttonProps={{
            className:'x-secondary',
            //simple   :true,
            icon     :'+',
          //iconSide :'r'
          }}
        />
      </li>
      { FooterComponent && <FooterComponent/>}
    </ul>

  )}

Tabline.propTypes = {
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
   *  A component to display as footer
   */
  FooterComponent:PropTypes.node,
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
Tabline.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

Tabline.Tab = Tab

export default Tabline

/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import { useMemo, useCallback } from 'react'

import PropTypes from 'prop-types'

import { useSelect } from 'downshift'

import { Popup } from '@fwrlines/ds/common'

import { Button } from '@fwrlines/ds/elements'

import { InputHolder as Holder } from '../../elements'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './downshift_select.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./downshift_select.scss')
}

const baseClassName = 'downshift_select'


/**
 * Use `DownshiftSelect` to
 * Has color `x`
 */
const DownshiftSelect = ({
  id,
  className,
  style,

  errors,
  valid,

  disabled,
  optional,

  as:Wrapper,
  aesthetic,
  compact,

  inputId:userInputId,

  label,
  labelAs, //This is the only new prop compared to Input
  labelId,
  labelClassName,
  labelStyle,

  description,
  descriptionAs,
  descriptionClassName,
  descriptionStyle,

  // Start of downshift props
  options:items, //originally called items in downshift
  itemToString:userItemToString,
  onSelectedItemChange:userOnSelectedItemChange,
  stateReducer,
  //initialSelectedItem, //Harmo
  initialHighlightedIndex,
  defaultSelectedItem,
  defaultIsOpen,
  onHighlightedIndexChange,
  onIsOpenChange,
  onStateChange,
  circularNavigation,
  //id //this is given by inputId to harmonize the api
  menuId,
  toggleButtonId,
  getItemId,
  // end of downshift props

  buttonProps,
  buttonChildren,

  itemClassName,
  itemStyle,

  popupPreferredOrder,
  popupId,
  popupClassName,
  popupStyle,

  highlightedClassName,
  displayItem:userDisplayItem,
  displaySelectedItem:userDisplaySelectedItem,

  //Control Props, automatically passed from context
  setInputValue,
  setInputTouched,
  touched,
  value,
  //...otherProps
}) => {

  const areItemsObjects = useMemo(() =>
    items.length ?
      (typeof items[0] === 'object') ? true : false
      : false,
  [items]
  )

  const itemToString = useCallback(userItemToString ?
    userItemToString : (areItemsObjects ?
      (item => (item ? item.value : '')) :
      (item => (item ? String(item) : ''))
    ),
  [userItemToString, areItemsObjects]
  )

  const displayItem = useCallback(userDisplayItem ?
    userDisplayItem : (areItemsObjects ?
      (item => (item ? item.label : '')) :
      (item => (item ? String(item) : ''))
    ),
  [displayItem, areItemsObjects]
  )

  const displaySelectedItem = useCallback(userDisplaySelectedItem ?
    userDisplaySelectedItem : (areItemsObjects ?
      (item => (item ? item.label : '')) :
      (item => (item ? String(item) : ''))
    ),
  [userDisplaySelectedItem, areItemsObjects]
  )

  //console.log(otherProps)

  const onSelectedItemChange = useCallback((setInputValue || userOnSelectedItemChange) ?
    userOnSelectedItemChange ? userOnSelectedItemChange : (c) => {
      console.log('DS change', c)
      !touched && setInputTouched && setInputTouched()
      setInputValue(itemToString(c.selectedItem))
    } : () => null)

  const selectedItem = value ? items.find((e) => itemToString(e) == value) : undefined

  //console.warn('selected item is', selectedItem)

  const allUseSelectProps = {
    items,
    itemToString,
    onSelectedItemChange,
    stateReducer,
    initialSelectedItem:selectedItem,
    initialHighlightedIndex,
    defaultSelectedItem,
    defaultIsOpen,
    onHighlightedIndexChange,
    onIsOpenChange,
    onStateChange,
    circularNavigation,
    id                 :userInputId,
    labelId, //This one prop comes from outside !
    menuId,
    toggleButtonId,
    getItemId,

    /* inputValue:value,
       selectedItem, */
  }

  const finalUseSelectProps = useMemo(
    () => Object.keys(allUseSelectProps).reduce(
      (a,e) => {
        const current = allUseSelectProps[e]
        if (current) a[e] = current
        return a
      },
      {}
    ),
    []
  )

  const {
    isOpen,
    selectedItem:uncontrolledSelectedItem, //Unused because we control the input
    getLabelProps,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect(
    finalUseSelectProps
  )



  const {
    id:inputId,
    ...otherToggleButtonProps
  } = getToggleButtonProps()

  const holder_props = {
    id,
    //className, // We transform the classname as usual so not needed here
    style,

    errors,
    valid,

    disabled,
    optional,

    as:Wrapper,
    aesthetic,
    compact,

    inputId,

    label,
    labelAs, //This is the only new prop compared to Input
    labelId,
    labelClassName,
    labelStyle,

    description,
    descriptionAs,
    descriptionClassName,
    descriptionStyle,

    labelAdditionalProps:getLabelProps(),
  }

  return (
    <Holder
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      { ...holder_props }
    >
      <div className='yb'>
        <div className='yib xv'>
          <Button
            id={ inputId }
            { ...otherToggleButtonProps }
            { ...buttonProps }
            className='b-x c-on-x x-primary'

          >
            { (selectedItem && displaySelectedItem(selectedItem))
            || ( uncontrolledSelectedItem && displaySelectedItem(uncontrolledSelectedItem ))
            || buttonChildren }
            <Popup
              className={ [
                popupClassName,
                'b-y y-background',
              ].filter(e => e).join(' ')
              }
              id={ popupId }
              //style={{ width: '200px', ...popupStyle }}
              isVisible={ isOpen }
              preferredOrder={ popupPreferredOrder }
              style={ popupStyle }
            >
              <ul {...getMenuProps()}>
                {
                  items.map((item, index) => (
                    <li
                      className={ [
                        itemClassName,
                        (highlightedIndex === index) && highlightedClassName
                      ].filter(e => e).join(' ')
                      }
                      style={ itemStyle }
                      key={`${item}${index}`}
                      {...getItemProps({ item, index })}
                    >
                      {
                        selectedItem === item ?
                          displaySelectedItem(item) :
                          displayItem(item)
                      }
                    </li>
                  ))}
              </ul>
            </Popup>
          </Button>
        </div>
      </div>
    </Holder>
  )}

DownshiftSelect.propTypes = {
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
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * Whether the input is on an errors state. Will be displayed before the description.
   */
  errors:PropTypes.string,

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
   * Whether the input is compact
   */
  compact:PropTypes.bool,

  /**
   * The display style.
   */
  aesthetic:PropTypes.oneOf(['mars', 'saturn']),

  /**
   * Provide an HTML id to the input
   */
  inputId:PropTypes.string.isRequired,

  /**
   * The content of the label
   */
  label:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),


  /**
   * Provide an HTML id to the label. Trumps https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#labelid
   */
  labelId:PropTypes.string,

  /**
   * The html class names to be provided to the label
   */
  labelClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the label.
   */
  labelStyle:PropTypes.object,

  /**
   * Which html tag to use to display the label (This prop doesnt exist in the input component)
   */
  labelAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

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

  /**
   * Props to be passed to the button. See elements/button for details
   */
  buttonProps:PropTypes.object,

  /**
   * The default children of the button in case there is no selected element
   */
  buttonChildren:PropTypes.node,

  /**
   * The html class names to be provided to the items in the menu.
   */
  itemClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the items in the menu.
   */
  itemStyle:PropTypes.object,

  /**
   * The html class names to be provided to the input description
   */
  highlightedClassName:PropTypes.string,

  /**
   * This function takes an item and outputs the component displayed as the children of each list item. Defaults to the current string for an array of strings, and for item.value for an array of objects
   */
  displayItem:PropTypes.func,

  /**
   * This function takes an item and outputs the component displayed in the button. Defaults to the current string for an array of strings, and for item.value for array of objects
   */
  displaySelectedItem:PropTypes.func,

  /**
   * The html id for the popup.
   */
  popupId:PropTypes.string,

  /**
   * The html class names to be provided to the popup/
   */
  popupClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the popup.
   */
  popupStyle:PropTypes.object,

  /**
   * In which order should we open the pop-up. Warning : Default is different than the base Popup component
   */
  popupPreferredOrder:PropTypes.arrayOf(
    PropTypes.oneOf([
      'bottom',
      'top',
      'right',
      'left'
    ])
  ),

  /**
   * The items to display in the dropdown. https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#items. This is the renamed prop "items" from downshift, renamed here for api coherence
   */
  options:PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.string
    ),
    PropTypes.arrayOf(
      PropTypes.object
    )
  ]),

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#itemtostring
   */
  itemsToString:PropTypes.func,

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#itemtostring
   */
  stateReducer:PropTypes.func,

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#onselecteditemchange
   */
  onSelectedItemChange:PropTypes.func,

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#initialselecteditem
   */
  initialSelectedItem:PropTypes.oneOf([
    PropTypes.object,
    PropTypes.string
  ]),

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#initialHighlightedIndex
   */
  initialHighlightedIndex:PropTypes.number,

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#defaultselecteditem
   */
  defaultSelectedItem:PropTypes.oneOf([
    PropTypes.object,
    PropTypes.string
  ]),

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#defaultisopen
   */
  defaultIsOpen:PropTypes.bool,

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#onhighlightedindexchange
   */
  onHighlightedIndexChange:PropTypes.func,

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#onisopenchange
   */
  onIsOpenChange:PropTypes.func,

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#onstatechange
   */
  onStateChange:PropTypes.func,

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#circularnavigation
   */
  circularNavigation:PropTypes.bool,

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#id
   */
  mainId:PropTypes.string,

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#menuid
   */
  menuId:PropTypes.string,

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#togglebuttonid
   */
  toggleButtonId:PropTypes.string,

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#getitemid
   */
  getItemId:PropTypes.func,

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

DownshiftSelect.defaultProps = {
  buttonChildren      :'Select',
  buttonProps         :{},
  //displayItem         :(i) => i,
  circularNavigation  :true,
  popupPreferredOrder :['bottom', 'right', 'top', 'left'],
  highlightedClassName:'b-light-y'
  /* height:'2.2em',
     as:'p', */
}

export default DownshiftSelect

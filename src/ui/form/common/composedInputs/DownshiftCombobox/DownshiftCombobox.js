/* @fwrlines/generator-react-component 1.4.0 */
import * as React from 'react'
import { useEffect, useState, useCallback, useMemo, useReducer } from 'react'
import PropTypes from 'prop-types'

import { useCombobox } from 'downshift'
import { BaseHTMLInput } from '../../baseInputs'

import C from 'ui/cssClasses'

import { Popup, InlineLoader } from '@fwrlines/ds/common'
import { Button } from '@fwrlines/ds/elements'

import {
  InputInside,
  InputHolder as Holder,
} from '../../elements'

/* Relative imports
   import styles from './downshift_combobox.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./downshift_combobox.scss')
}

const baseClassName = 'downshift_combobox'


/**
 * Use `DownshiftCombobox` to
 * Has color `x`
 */
const DownshiftCombobox = ({
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
  inputClassName,
  inputStyle,
  inputDisabled,

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
  options:allItems, //originally called items in downshift
  itemToString:userItemToString,
  onSelectedItemChange:userOnSelectedItemChange,
  stateReducer,

  initialHighlightedIndex,
  defaultSelectedItem,
  defaultIsOpen,
  onHighlightedIndexChange,
  onIsOpenChange,
  onStateChange,
  circularNavigation,
  menuId,
  toggleButtonId,
  getItemId,

  itemClassName,
  itemStyle,

  popupPreferredOrder,
  popupId,
  popupClassName,
  popupStyle,

  highlightedClassName,
  displayItem:userDisplayItem,
  displaySelectedItem:userDisplaySelectedItem,
  filterItems:userFilterItems,

  //Unique to this input type
  placeholder,
  loading,

  debug,

  setInputValue,
  setInputTouched,
  touched,
  value


}) => {



  const areItemsObjects = useMemo(() =>
    allItems.length ?
      (typeof allItems[0] === 'object') ? true : false
      : false,
  [allItems]
  )

  const itemToString = useCallback(userItemToString ?
    userItemToString : (areItemsObjects ?
      (item => (item ? item.id : '')) :
      (item => (item ? String(item) : ''))
    ),
  [userItemToString, areItemsObjects]
  )

  const displayItem = useCallback(userDisplayItem ?
    userDisplayItem : (areItemsObjects ?
      (item => (item ? item._string || item.label : '')) :
      (item => (item ? String(item) : ''))
    ),
  [displayItem, areItemsObjects]
  )

  const displaySelectedItem = useCallback(userDisplaySelectedItem ?
    userDisplaySelectedItem : (areItemsObjects ?
      (item => (item ? item._string || item.label : '')) :
      (item => (item ? String(item) : ''))
    ),
  [userDisplaySelectedItem, areItemsObjects]
  )

  const filterItems = useCallback(userFilterItems ?
    userFilterItems : (areItemsObjects ?
      ((items, value) => {
        return items.filter(e =>(e._string || e.label).match(new RegExp(value, 'gi')))
      }) :
      ((items, value) => {
        return items.filter(e => e.match(new RegExp(value, 'gi')))
      })
      /* (item => (item ? item.label : '')) :
         (item => (item ? String(item) : '')) */
    ),
  [userFilterItems, areItemsObjects]
  )


  const onSelectedItemChange = useCallback((setInputValue || userOnSelectedItemChange) ?
    userOnSelectedItemChange ? userOnSelectedItemChange : (c) => {
      console.log('DS change', c)
      !touched && setInputTouched && setInputTouched()
      setInputValue(itemToString(c.selectedItem))
    } : () => null)

  const selectedItem = value ? allItems.find((e) => itemToString(e) == value) : undefined

  const [filteredItems, setFilteredItems] = useState(allItems)


  const onInputValueChange = ({inputValue:localValue}) =>{
    console.log('Input value changed to', localValue, allItems)
    setFilteredItems(filterItems(allItems, localValue))
  }


  const allUseComboboxProps = {
    items              :filteredItems,
    itemToString,
    onSelectedItemChange,
    stateReducer,
    initialSelectedItem:selectedItem,
    initialHighlightedIndex,
    /* initialInputValue,*/
    onInputValueChange,
    defaultSelectedItem,//TODO need to control this
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

  const finalUseComboboxProps = useMemo(
    () => Object.keys(allUseComboboxProps).reduce(
      (a,e) => {
        const current = allUseComboboxProps[e]
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
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    reset:resetDownshift
  } = useCombobox(finalUseComboboxProps)


  useEffect(() =>  {
    if(!filteredItems.length) {
      setFilteredItems(allItems)
      resetDownshift()
    }
  }, [
    allItems
  ]
  )

  const {
    id:inputId,
    ...otherSearchInputProps
  } = getInputProps()


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

  const insideContainerProps = {
    errors,
    valid,

    //rightIcon:'j',
    rightSide:loading ? (<InlineLoader
      type='circle'
      className='x-blue'
      height='2.3em'
    />) : !selectedItem ? (
                           <Button
        { ...getToggleButtonProps() }
        simple
        icon='j'
      />

    ) :
      (<Button
        simple
        //className='x-red'
        icon='p'
        onClick={ resetDownshift }
      />)
    ,
    ...getComboboxProps()
    /*
    leftSide,
    rightSide,
    sidesClassName,
    sidesStyle,

    leftIcon,
    rightIcon,
    iconsClassName,
    iconsStyle,

    errorIcon,
    validIcon,
    */

  }

  const searchInputProps = {
    type       :'text',
    placeholder:placeholder,
    name       :name ,
    className  :[
      //styles[baseClassName],
      inputClassName
    ].filter(e => e).join(' '),
    id      :userInputId,
    style   :inputStyle,
    disabled:inputDisabled,

    id:inputId,
    ...otherSearchInputProps
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
      {/* leftSide &&
          <InputSide
            className={ sidesClassName }
            style={ sidesStyle }
          >
            { leftSide }
          </InputSide>
          }
        {
          leftIcon &&
            <InputIcon
              className={ iconsClassName }
              style={ iconsStyle }
              icon={ leftIcon }
            />
        */}
      <InputInside
        { ...insideContainerProps }
      >
        {
          selectedItem ?
            <div className='selected-item'>
              {displayItem(selectedItem)}
            </div>:
            <BaseHTMLInput
              { ...searchInputProps }
            />
        }
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
          <ul
            {...getMenuProps()}
            className='compact'
          >
            {
              filteredItems.map((item, index) => (
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

      </InputInside>
      { debug &&
        <div>
          <pre>
            filteredItems :
            {' '}
            { JSON.stringify(filteredItems, null, 2) }
            value :
            {' '}
            { JSON.stringify(value, null, 2) }
            (The value is only displayed if the component is in a FormContextProvider)
          </pre>
        </div>
      }
    </Holder>

  )
}

DownshiftCombobox.propTypes = {
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
   *  The children JSX
   */
  children:PropTypes.node,


  /**
   * Whether the input is disabled. This property is applied at the wrapper level, and only if the wrapper is a fieldset
   */
  disabled:PropTypes.bool,

  /**
   * Whether the input is optional. Is considered a better practice than to mark the required fields
   */
  optional:PropTypes.bool,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * The display style.
   */
  aesthetic:PropTypes.oneOf(['mars', 'saturn']),

  /**
   * Whether the input is compact
   */
  compact:PropTypes.bool,

  /**
   * Provide an HTML id to the input
   */
  inputId:PropTypes.string.isRequired,

  /**
   * The html class names to be provided to the input
   */
  inputClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the input.
   */
  inputStyle:PropTypes.object,

  /**
   * Whether the input is disabled. Do not apply at the same time as 'disabled'
   */
  inputDisabled:PropTypes.bool,

  /**
   * The content of the label
   */
  label:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * Which html tag to use to display the label (This prop doesnt exist in the input component)
   */
  labelAs:PropTypes.oneOfType([
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
   * The input description
   */
  description:PropTypes.string,

  /**
   * Which html tag to use
   */
  descriptionAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * The html class names to be provided to the input description
   */
  descriptionClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the input description.
   */
  descriptionStyle:PropTypes.object,

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
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#onselecteditemchange
   */
  onSelectedItemChange:PropTypes.func,

  /**
   * https://github.com/downshift-js/downshift/tree/master/src/hooks/useSelect#itemtostring
   */
  stateReducer:PropTypes.func,

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

  /**
   * The html class names to be provided to the items in the menu.
   */
  itemClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the items in the menu.
   */
  itemStyle:PropTypes.object,

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
   * whether the map returns an array
   */
  filterItems:PropTypes.array,

  /**
   * placeholder for the input
   */
  placeholder:PropTypes.string,

  /**
   * Whether the input is in the loading state.
   */
  loading:PropTypes.bool,

  /**
   * Whether the input is in debug mode (prints the available options and the value).
   */
  debug:PropTypes.bool,

  /**
   * the funnction to set the value of input
   */
  setInputValue:PropTypes.func,

  /**
   * the function to set inputTouched value.
   */
  setInputTouched:PropTypes.func,

  /**
   * whether the input is touched
   */
  touched:PropTypes.bool,

  /**
   * set value to string
   */
  value:PropTypes.string,


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

DownshiftCombobox.defaultProps = {
  debug               :false,
  loading             :false,
  circularNavigation  :true,
  popupPreferredOrder :['bottom', 'top'],
  highlightedClassName:'b-light-y'
  /* height:'2.2em',
     as:'p', */
}

export default DownshiftCombobox

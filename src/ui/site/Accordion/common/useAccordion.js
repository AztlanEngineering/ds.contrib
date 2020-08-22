import { useEffect, useContext, useMemo } from 'react'


import AccordionContext from './Context'

export default (
  id,
  defaultIsOpen
) => {
  if(!id) {
    console.error('An id is required to instantiate accordion items')
  }

  const {
    openOne,
    closeOne,
    toggleOne,
    openItems,
    toggleStyle,
    register,
    unregister
  } = useContext(AccordionContext)

  const isOpen = openItems.includes(id)

  const open = useMemo(
    () => () => openOne(id),
    [openOne, id]
  )

  const close = useMemo(
    () => () => closeOne(id),
    [closeOne, id]
  )

  const toggle = useMemo(
    () => () => {
      return toggleOne(id)
    },
    [toggleOne, id]
  )

  useEffect(() => {
    register(id)

    if (defaultIsOpen) {
      openOne(id)
    }
    return () => unregister(id)
  },
  []
  )

  return {
    open,
    close,
    toggle,
    toggleStyle,
    isOpen
  }
}

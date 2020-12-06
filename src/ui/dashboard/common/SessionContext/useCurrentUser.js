import { useContext } from 'react'
import { SessionContext } from './common'

export default () => {
  const { currentUserData } = useContext(SessionContext)
  return currentUserData
}

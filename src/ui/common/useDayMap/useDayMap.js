
import * as React from 'react'
import { useMemo } from 'react'

import { useSite } from 'ds-core'
import { useIntl } from 'react-intl'
import messages from './messages'

export default () => {
  /*

  const {
    WEEK_STARTS_ON_SUNDAY=0
  } = useSite() || {}

  const intl = useIntl()

  const daysMap = useMemo(() => WEEK_STARTS_ON_SUNDAY ? ({
    0:intl.formatMessage(messages.sunday),
    1:intl.formatMessage(messages.monday),
    2:intl.formatMessage(messages.tuesday),
    3:intl.formatMessage(messages.wednesday),
    4:intl.formatMessage(messages.thursday),
    5:intl.formatMessage(messages.friday),
    6:intl.formatMessage(messages.saturday),
  }) : ({
    0:intl.formatMessage(messages.monday),
    1:intl.formatMessage(messages.tuesday),
    2:intl.formatMessage(messages.wednesday),
    3:intl.formatMessage(messages.thursday),
    4:intl.formatMessage(messages.friday),
    5:intl.formatMessage(messages.saturday),
    6:intl.formatMessage(messages.sunday),
  }), [
    intl, WEEK_STARTS_ON_SUNDAY
  ])*/
  const dayMap = ['']

  return daysMap
}

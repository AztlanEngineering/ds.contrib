import * as React from 'react'
import { addDecorator } from '@storybook/react'
import { IntlProvider } from 'react-intl'
import '@fwrlines/alphabet-scss/main.scss'

addDecorator(storyFn => <IntlProvider locale='en'>{ storyFn() }</IntlProvider>)


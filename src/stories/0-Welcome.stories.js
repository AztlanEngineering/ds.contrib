import * as React from 'react'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'

export default {
  title    :'ds-contrib',
  component:Welcome,
}

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />

ToStorybook.story = {
  name:'to Storybook',
}

/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'

//import { action } from '@storybook/addon-actions'
import {ALL_COLORS, SIZES } from '../config.js'
import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy'

import { Button } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'elements/Button',
  component    :Button,
  subcomponents:{
    Group:Button.Group
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
}

const button_text = (id) => `I am the ${id}button`

const icons_map = [
  {
    'icon':'F',
    'side':'l',
    'text':'Share on Facebook',
    'back':'facebook',
  },
  {
    'icon'    :'I',
    'side'    :'l',
    'text'    :'Login with Instagram',
    'back'    :'instagram',
    loaderType:'circle',
  },
  {
    'icon':'T',
    'side':'l',
    'text':'Share on Twitter',
    'back':'twitter',
  },
  {
    'icon'    :'a',
    'side'    :'r',
    'text'    :'Car-repair',
    'back'    :'red',
    loaderType:'circle',
  },
  {
    'icon':'l',
    'side':'r',
    'text':'Right Arrow',
    'back':'green',
  },
  {
    'icon':'d',
    'side':'r',
    'text':'Send e-mail',
    'back':'yellow',
  },
]


export const Default = () => (
  <>
    <Button>Click me</Button>
    <Button disabled>You can't, I'm disabled</Button>
    <Button className='x-blue'>I'm blue!</Button>
  </>
)

export const Colors = () => (
  ALL_COLORS.map((e,i) =>
    <Button
      className={
        'x-' + e.toLowerCase()
      }
      key={i}
    >
      { button_text(e + ' ') }
    </Button>
  )
)

export const Basic = () => (
  ALL_COLORS.map((e,i) =>
    <Button
      className={
        'x-' + e.toLowerCase()
      }
      basic
      key={i}
    >
      { button_text(e + ' ') }
    </Button>
  )
)

export const Simple = () => (
  ALL_COLORS.map((e,i) =>
    <Button
      className={
        'x-' + e.toLowerCase()
      }
      simple
      key={i}
    >
      { button_text(e + ' ') }
    </Button>
  )
)

export const Disabled = () => (
  ALL_COLORS.map((e,i) =>
    <Button
      className={
        'x-' + e.toLowerCase()
      }
      disabled
      key={i}
    >
      { button_text(e + ' ') }
    </Button>
  )
)

export const In3D = () => (
  ALL_COLORS.map((e,i) =>
    <Button
      className={
        'x-' + e.toLowerCase()
      }
      in3d
      key={i}
    >
      { button_text(e + ' ') }
    </Button>
  )
)

export const Sizes = () =>
  SIZES.map((e,i) =>
    <Button
      className={ 'x-success ks s' + e }
      key={i}
    >
      { button_text(e + ' ') }
    </Button>
  )

export const ButtonIconOnly = () =>
  icons_map.map((e,i) =>
    <>
      <Button
        className={'ks s2  x-' + e.back }
        icon={ e.icon }
      >
      </Button>
      <Button
        className={'ks s2  x-' + e.back }
        icon={ e.icon }
        basic
      >
      </Button>
      <Button
        className={'ks s2  x-' + e.back }
        icon={ e.icon }
        simple
      >
      </Button>
      <br/>
    </>
  )

export const ButtonLoading = () =>
  icons_map.map((e,i) =>
    <div className='p1'>
      <Button
        className={'s2 ks x-' + e.back }
        iconSide={ e.side }
        icon={e.icon}
        loading
        loaderType={ e.loaderType }
        key={i}
      >
        { e.text }
      </Button>
    </div>
  )



export const AnimatedArrow = () =>
  <>
    <Button
      vertical
      icon='h'
      iconSide='l'
      className='it x-green'
    >
      Pass your mouve over me !
    </Button>
    <Button
      icon='l'
      iconSide='r'
      className='it x-blue'
    >
      Pass your mouve over me !
    </Button>
  </>



export const StretchedGroup = () =>
  <>
    <Button.Group stretch='horizontal'>
      {icons_map.slice(1, 3).map((e,i) =>
        <Button
          className={'ks s2 x-' + e.back}
          key={i}
        >
          { e.text }
        </Button>
      )}
    </Button.Group>
    <Button.Group stretch='horizontal'>
      {icons_map.slice(2,4).map((e,i) =>
        <Button
          className={'ks s2 x-' + e.back}
          iconSide={ e.side }
          icon={e.icon}
          key={i}
        >
          { e.text }
        </Button>
      )}
    </Button.Group>
  </>

export const BasicGroup = () =>
  <>
    <Button.Group>
      {icons_map.slice(2).map((e,i) =>
        <Button
          className={'ks s2 x-' + e.back}
          basic
          key={i}
        >
          { e.text }
        </Button>
      )}
    </Button.Group>

    <Button.Group>
      {icons_map.slice(2,4).map((e,i) =>
        <Button
          className={'ks s2 x-' + e.back}
          iconSide={ e.side }
          icon={e.icon}
          key={i}
          basic
        >
          { e.text }
        </Button>
      )}
    </Button.Group>
  </>


export const GroupIndep = () =>
  <>
    <Button.Group independent>
      {icons_map.slice(2).map((e,i) =>
        <Button
          className={'ks s2 x-' + e.back}
        >
          { e.text }
        </Button>
      )}
    </Button.Group>

    <Button.Group independent>
      {icons_map.slice(2,4).map((e,i) =>
        <Button
          className={'ks s2 x-' + e.back}
          iconSide={ e.side }
          icon={e.icon}
          key={i}
          basic
        >
          { e.text }
        </Button>
      )}
    </Button.Group>
  </>


export const GroupVertical = () =>
  <Button.Group vertical>
    {icons_map.map((e,i) =>
      <Button
        className={'ks s2 x-' + e.back}
        iconSide={ e.side }
        icon={e.icon}
        key={i}
      >
        { e.text }
      </Button>
    )}
  </Button.Group>

export const GroupVerticalIndep = () =>
  <Button.Group
    vertical
    independent
  >
    {icons_map.map((e,i) =>
      <Button
        className={'ks s2 x-' + e.back}
        iconSide={ e.side }
        icon={e.icon}
        key={i}
      >
        { e.text }
      </Button>
    )}
  </Button.Group>

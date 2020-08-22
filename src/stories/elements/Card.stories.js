/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'
import faker from 'faker'

import { Image, Card, SimpleCard, SVG } from 'ui'
import { ALL_COLORS } from '../config'

export default {
  title        :'elements/Card',
  component    :Card,
  subcomponents:{
    'Card.Section':Card.Section,
    'Card.Divider':Card.Divider,
    'Card.Group'  :Card.Group,
  },
  parameters:{
    decorators:[
      //storyfn => <div className="">{ storyfn() }</div>,
    ]
  }
}

const text = `
En su grave rincón, los jugadores
rigen las lentas piezas. El tablero
los demora hasta el alba en su severo
ámbito en que se odian dos colores.

Adentro irradian mágicos rigores
las formas: torre homérica, ligero
caballo, armada reina, rey postrero,
oblicuo alfil y peones agresores.
Cuando los jugadores se hayan ido,
cuando el tiempo los haya consumido,
ciertamente no habrá cesado el rito.

En el Oriente se encendió esta guerra
cuyo anfiteatro es hoy toda la Tierra.
Como el otro, este juego es infinito.
`

const img_src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'


export const Simple = () => (
  <SimpleCard className='y-accent1 b-light-y'>
    <SimpleCard.Section>
      <h2 className='small'>Ajedrez</h2>
    </SimpleCard.Section>
    <SimpleCard.Divider/>
    <SimpleCard.Section>
      <p dangerouslySetInnerHTML={{__html: text}}>

      </p>
    </SimpleCard.Section>
  </SimpleCard>

)

export const Default = () => (
  <Card>
    <Card.Section>
      <h2 className='small'>Ajedrez</h2>
    </Card.Section>
    <Card.Divider/>
    <Card.Section>
      <p dangerouslySetInnerHTML={{__html: text}}>

      </p>
    </Card.Section>
  </Card>

)

export const BackFace = () => (
  <Card
    className='y-red b-dark-y x-white c-x'
    backFaceClassName='y-indigo b-light-y'
    backFace={
      <Card.Section>
        Hello from the other side
      </Card.Section>

    }
  >
    <Card.Section>
      <h2 className='small c-x'>This card has a secret</h2>
    </Card.Section>
    <Card.Divider/>
    <Card.Section>
      Click on the top right icon
    </Card.Section>
  </Card>

)

export const WithSectionAndSection = () =>(

  <Card className='y-blue b-y x-white'>
    <Card.Section>
      <h2 className='small'>Ajedrez</h2>
    </Card.Section>
    <Card.Divider/>
    <Card.Section>
      <p dangerouslySetInnerHTML={{__html: text}}>

      </p>
    </Card.Section>
    <Card.Divider/>
    <Card.Section className='ur'>
      <p className=''>Jorge Luis Borges</p>
    </Card.Section>
  </Card>


)

export const Selectable = () =>(
  <div className='p2'>
    <Card selectable>
      <Card.Section>
        <h2 className='small'>Ajedrez</h2>
      </Card.Section>
      <Card.Divider/>
      <Card.Section>
        <p dangerouslySetInnerHTML={{__html: text}}>

        </p>
      </Card.Section>
    </Card>
    <Card
      selectable
      active
    >
      <Card.Section>
        <h2 className='small'>Ajedrez</h2>
      </Card.Section>

      <Card.Divider/>

      <Card.Section>
        <p dangerouslySetInnerHTML={{__html: text}}>

        </p>
      </Card.Section>
    </Card>
  </div>


)

export const WithImage = () =>(
  <div className='p2'>
    <Card
      style={{ width: '500px' }}
      className='b-y y-yellow'
    >
      <Card.Section
        image
        as='header'
      >
        <img
          src={ img_src }
          alt='alt img'
          className='fit'
          height={200}
          width={350}
        />
      </Card.Section>
      <Card.Section>
        <p dangerouslySetInnerHTML={{__html: text}}>

        </p>
      </Card.Section>
    </Card>
  </div>
)


export const IconCard = () => (
  <div className='p2'>
    <Card style={{ width: 'min-content' }}>
      <Card.Section>
        <SVG
          width='120'
          target='engine'
          className='x-blue f-x'
          anim
        />
      </Card.Section>

      <Card.Divider/>

      <Card.Section>
        <p className='uc'>Engine repair</p>
      </Card.Section>

    </Card>
  </div>
)

export const Colors = () => (
  ALL_COLORS.map((e,i) =>
    <Card
      style={{ width: '320px' }}
      className={
        'y-' + e.toLowerCase() + ' b-y'
      }
      key={i}
    >
      <Card.Section>
        <h2 className='small'>Ajedrez</h2>
      </Card.Section>
      <Card.Divider/>
      <Card.Section>
        <p dangerouslySetInnerHTML={{__html: text}}>

        </p>
      </Card.Section>
      <Card.Divider/>
      <Card.Section className='ur'>
        <p className=''>Jorge Luis Borges</p>
      </Card.Section>
    </Card>
  )
)

export const BasicStyle = () => (
  ALL_COLORS.map((e,i) =>
    <Card
      style={{ width: '320px' }}
      className={
        'x-' + e.toLowerCase()
      }
      basic
      key={i}
    >
      <Card.Section>
        <h2 className='small'>Ajedrez</h2>
      </Card.Section>
      <Card.Divider/>
      <Card.Section>
        <p dangerouslySetInnerHTML={{__html: text}}>

        </p>
      </Card.Section>
      <Card.Divider/>
      <Card.Section className='ur'>
        <p className=''>Jorge Luis Borges</p>
      </Card.Section>
    </Card>
  )
)

export const SimpleStyle = () => (
  ALL_COLORS.map((e,i) =>
    <Card
      style={{ width: '320px' }}
      simple
      className={
        'x-' + e.toLowerCase()
      }
      key={i}
    >
      <Card.Section>
        <h2 className='small'>Ajedrez</h2>
      </Card.Section>
      <Card.Divider/>
      <Card.Section>
        <p dangerouslySetInnerHTML={{__html: text}}>

        </p>
      </Card.Section>
      <Card.Divider/>
      <Card.Section className='ur'>
        <p className=''>Jorge Luis Borges</p>
      </Card.Section>

    </Card>
  )
)

export const GroupFlex = () =>(
  <Card.Group>
    {
      [ 'yellow', 'indigo', 'background' ].map((e , i)=>
        <Card
          className={'b-y y-' + e}
          key={i}
        >
          <Card.Section
            image
            as='header'
          >
            <img
              src={ img_src }
              alt='alt img'
              className='fit'
              height={200}
              width={350}
            />
          </Card.Section>
          <Card.Section>
            <p dangerouslySetInnerHTML={{__html: text}}>

            </p>
          </Card.Section>
        </Card>
      )}

  </Card.Group>
)

export const GroupGrid = () =>(
  <Card.Group
    grid
    cardWidth='500px'
  >
    {
      [ 'yellow', 'indigo', 'background', 'red' ].map((e , i)=>
        <Card
          className={'b-y y-' + e}
          key={i}
        >
          <Card.Section
            image
            as='header'
          >
            <Image
              src={ img_src }
              alt='alt img'
              objectFit='cover'
              height={200}
            />
          </Card.Section>
          <Card.Section>
            <p>
              { faker.lorem.paragraph() }
            </p>
          </Card.Section>
        </Card>
      )}

  </Card.Group>
)


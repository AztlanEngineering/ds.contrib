/* @fwrlines/generator-storybook-story 1.5.0 */
import * as React from 'react'
import { useContext } from 'react'

//import { action } from '@storybook/addon-actions'

import { ContentSlides, ProgressBar,  HorizontalBar, Button } from 'ui'
import { Router } from 'stories/utils'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import {ALL_COLORS, SIZES } from '../config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'site/ContentSlides',
  component    :ContentSlides,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    'Slide'        :ContentSlides.Slide,
    'HorizontalBar':ContentSlides.Horizontalbar,
    'SideBar'      :ContentSlides.Sidebar
  },
  parameters:{
    decorators:[
      storyfn => <Router>{ storyfn() }</Router>,
      /* storyfn => <div className="">{ storyfn() }</div>,
       storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,*/
    ]
  }
}

export const Default = () => {
  const slides = [
    {
      id      :'welcome',
      title   :'Welcome',
      progress:40,
      location:'welcome',
    },
    {
      id      :'plan',
      title   :'Choose your plan',
      progress:60,
      location:'select-plan',
    },
    {
      id      :'details',
      title   :'Personal details',
      progress:70,
      location:'personal-details',
    },
    {
      id      :'payment',
      title   :'Payment',
      progress:90,
      location:'payment',
    }
  ]


  const Navigator = () => {
    const {
      setPrevSlide,
      setNextSlide,
      isFirst,
      isLast,
      currentSlide,
    } = useContext(ContentSlides.Context)

    return (
      <div className='mt-u'>
        { !isLast &&
          <Button
            className='it x-success'
            icon='l'
            iconSide='r'
            onClick={() => setNextSlide()}
          >
            Next

          </Button>
        }
      </div>

    )
  }

  return (
    <ContentSlides
      slides={slides}
      className='g'

    >

      <ContentSlides.HorizontalBar/>
      <div className='g12 b-z z-primary'>
        <ContentSlides.Slide
          className='b-light-z z-primary c-on-z'
          index={ 0 }
        >
          Slide 0
          <Navigator />
        </ContentSlides.Slide>
        <ContentSlides.Slide
          className='b-dark-z z-secondary c-on-z'
          index={ 1 }
        >
          Slide 1
          <Navigator />
        </ContentSlides.Slide>
        <ContentSlides.Slide
          className='b-z z-accent1 c-on-z'
          index={ 2 }
        >
          Slide 2
          <Navigator />
        </ContentSlides.Slide>
        <ContentSlides.Slide
          className='b-z z-accent2 c-on-z'
          index={ 3 }
        >
          Slide 3
          <Navigator />
        </ContentSlides.Slide>
      </div>
    </ContentSlides>
  )

}

/*
export const Variant = () => (
  <ContentSlides></ContentSlides>
)
*/

export const SideBar = () => {
  const slides = [
    {
      id      :'welcome',
      title   :'Welcome',
      progress:40,
      location:'welcome',
    },
    {
      id      :'plan',
      title   :'Choose your plan',
      progress:60,
      location:'select-plan',
    },
    {
      id      :'details',
      title   :'Personal details',
      progress:70,
      location:'personal-details',
    },
    {
      id      :'payment',
      title   :'Payment',
      progress:90,
      location:'payment',
    }
  ]

  const Navigator = () => {
    const {
      setPrevSlide,
      setNextSlide,
      isFirst,
      isLast,
      currentSlide,
    } = useContext(ContentSlides.Context)

    return (
      <div className='mt-u'>
        { !isFirst &&
          <Button
            className='it x-grey'
            icon='h'
            iconSide='l'
            onClick={() => setPrevSlide()}
          >
            Back
          </Button>
        }
        { !isLast &&
          <Button
            className='it x-grey'
            icon='l'
            iconSide='r'
            onClick={() => setNextSlide()}
          >
            Next

          </Button>
        }
      </div>

    )
  }

  return (
    <ContentSlides
      slides={slides}
      className='g-sidebar left'

    >

      <ContentSlides.SideBar
        className='u2 p-u'
        header={<span className='fh tb s4 k-s mb-v ml-u u2 v4 yb'>meccamico</span>}
        //progressBarClassName=''
      />
      <div className='g12 b-z z-primary'>
        <ContentSlides.Slide
          className='b-light-z z-primary c-on-z'
          index={ 0 }
        >
          Slide 0
          <Navigator />
        </ContentSlides.Slide>
        <ContentSlides.Slide
          className='b-dark-z z-secondary c-on-z'
          index={ 1 }
        >
          Slide 1
          <Navigator />
        </ContentSlides.Slide>
        <ContentSlides.Slide
          className='b-z z-accent1 c-on-z'
          index={ 2 }
        >
          Slide 2
          <Navigator />
        </ContentSlides.Slide>
        <ContentSlides.Slide
          className='b-z z-accent2 c-on-z'
          index={ 3 }
        >
          Slide 3
          <Navigator />
        </ContentSlides.Slide>
      </div>
    </ContentSlides>
  )

}

export const Responsive = () => {
  const slides = [
    {
      id      :'welcome',
      title   :'Welcome',
      progress:40,
      location:'welcome',
    },
    {
      id      :'plan',
      title   :'Choose your plan',
      progress:60,
      location:'select-plan',
    },
    {
      id      :'details',
      title   :'Personal details',
      progress:70,
      location:'personal-details',
    },
    {
      id      :'payment',
      title   :'Payment',
      progress:90,
      location:'payment',
    }
  ]

  const Navigator = () => {
    const {
      setPrevSlide,
      setNextSlide,
      isFirst,
      isLast,
      currentSlide,
    } = useContext(ContentSlides.Context)

    return (
      <div className='mt-u'>
        { !isFirst &&
          <Button
            className='it x-grey'
            icon='h'
            iconSide='l'
            onClick={() => setPrevSlide()}
          >
            Back
          </Button>
        }
        { !isLast &&
          <Button
            className='it x-grey'
            icon='l'
            iconSide='r'
            onClick={() => setNextSlide()}
          >
            Next

          </Button>
        }
      </div>

    )
  }

  return (
    <ContentSlides
      slides={slides}
      className='g sm-g-sidebar left'

    >

      <ContentSlides.SideBar
        className='xs-h sm-h u2 ph-u'
        header={<span className='fh tb s4 k-s mb-v ml-u u2 v4 yb'>meccamico</span>}
        //progressBarClassName=''
      />
      <ContentSlides.HorizontalBar className='md-h lg-h x-grey'/>
      <div className='g12 b-light-z z-yellow'>
        <ContentSlides.Slide
          className='b-light-z z-primary c-on-z'
          index={ 0 }
        >
          Slide 0
          <Navigator />
        </ContentSlides.Slide>
        <ContentSlides.Slide
          className='b-dark-z z-secondary c-on-z'
          index={ 1 }
        >
          Slide 1
          <Navigator />
        </ContentSlides.Slide>
        <ContentSlides.Slide
          className='b-z z-accent1 c-on-z'
          index={ 2 }
        >
          Slide 2
          <Navigator />
        </ContentSlides.Slide>
        <ContentSlides.Slide
          className='b-z z-accent2 c-on-z'
          index={ 3 }
        >
          Slide 3
          <Navigator />
        </ContentSlides.Slide>
      </div>
    </ContentSlides>
  )

}


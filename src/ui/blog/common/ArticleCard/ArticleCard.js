/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Image } from '@fwrlines/ds/common'
import { Heading, Card } from '@fwrlines/ds/elements'

import { AnalyticsButton as LocalButton } from 'ui/collections/analytics'

import { BlogLink } from '../Link'
import { CategoryButton } from '../CategoryButton'
//Intl

import { FormattedMessage} from 'react-intl'
import messages from './messages'

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './article_card.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./article_card.scss')
}

const baseClassName = 'article_card'


/**
 * Use `ArticleCard` to
 * Has color `x`
 */
const ArticleCard = ({
  id,
  className,
  style,

  title,
  description,
  slug,
  category,

  headingAs,

  imageSrc,
  imageAlt,

  readMoreButton,

  categoryClassName,

  size
}) => {


  return (
    <Card
      wrapperClassName={
        [
        //styles[baseClassName],
          baseClassName,
          size && `size-${size}`,
        ].filter(e => e).join(' ')

      }

      className={
        [
        //styles[baseClassName],
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      <Card.Section
        image
        className='gc-illustration'
      >
        <BlogLink
          to='SINGLE'
          params={{slug}}
          aria-label={ description }
        >
          <Image
            src={imageSrc}
            alt={imageAlt || title}
          />
        </BlogLink>
      </Card.Section>
      <Card.Section className='gc-heading'>
        { category &&
          <CategoryButton
            slug={ category.slug }
            name={ category.name }
            className={
              [
                categoryClassName,
                's0 k-s'
              ].filter(e => e).join(' ')

            }
          />
        }
        <Heading
          headingAs={ headingAs }
          headingClassName=''
          heading={
            <BlogLink
              to='SINGLE'
              params={{slug}}
              className='x-paragraph c-x'
            >
              { title }
            </BlogLink>
          }
          subtitle={ description }
        />
      </Card.Section>
      { readMoreButton &&
        <Card.Section className='gc-extra ur'>
          <LocalButton
            { ...readMoreButton }
          >
            <FormattedMessage {...messages.readMore} />
          </LocalButton>
        </Card.Section>
      }
    </Card>
  )}

ArticleCard.propTypes = {
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
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * Which html tag to use for the heading
   */
  headingAs:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The title of the card
   */
  title:PropTypes.string,

  /**
   * The description text
   */
  description:PropTypes.string,

  /**
   * The description text
   */
  category:PropTypes.string,

  /**
   * the image src
   */
  imageSrc:PropTypes.string,

  /**
   * the image alt
   */
  imageAlt:PropTypes.string,

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string,

  /**
   * The icon for read more
   */
  readMoreIcon:PropTypes.string,

  /**
   * The html class names to be provided to the category button
   */
  categoryClassName:PropTypes.string,


  /**
   * The size of the article card. If undefined will render a uniform card.
   */
  size:PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  */
}

ArticleCard.defaultProps = {
  readMoreIcon:'l',
  headingAs   :'h2'
  /* height:'2.2em',
     as:'p', */
}

export default ArticleCard

/* @fwrlines/generator-react-component 1.1.2 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useIntl } from 'react-intl'

import { SiteContext } from 'ui/common'

/* Config
   import C from 'ui/cssClasses' */


const helmet_map = [
  {
    variables:['robots'],
    render   :(v) =>
      <meta
        name='robots'
        content={ v || '"index, follow"'}
      />
  },


  {
    variables:['title_tag', 'title'],
    render   :(v) =>
      <title>{ v }</title>
  },

  {
    variables:['meta_description'],
    render   :(v) =>
      <meta
        name='description'
        content={ v }
      />
  },

  {
    variables:['canonical'],
    render   :(v, c) =>
      c.SITE_CANONICAL ?
        <link
          rel='canonical'
          href={`${c.SITE_CANONICAL}/${v}`}
        /> :
        <link
          rel='canonical'
          href={v}
        />
  },

  {
    variables:['twitter_title', 'title', 'title_tag'],
    render   :(v) =>
      <meta
        name='twitter:title'
        content={ v }
      />
  },

  {
    variables:['twitter_description', 'meta_description'],
    render   :(v) =>
      <meta
        name='twitter:description'
        content={ v }
      />
  },

  {
    test     :true,
    variables:['twitter_image, main_image'],
    render   :(v) =>
      <meta
        name='twitter:image'
        content={ v }
      />
  },

  {
    variables:['og_title','title', 'title_tag'],
    render   :(v) =>
      <meta
        property='og:title'
        content={ v }
      />
  },

  {
    variables:['og_description', 'meta_description'],
    render   :(v) =>
      <meta
        property='og:description'
        content={ v }
      />
  },

  {
    test     :true,
    variables:['og_image', 'main_image'],
    render   :(v) =>
      <meta
        property='og:image'
        content={ v }
      />
  },

  {
    test     :true,
    variables:['og_type'],
    render   :(v) =>
      <meta
        property='og:type'
        content={ v || 'article' }
      />
  },

  {
    variables:['og_url', 'canonical'],
    render   :(v, c) =>
      c.SITE_CANONICAL ?
        <meta
          property='og:url'
          content={`${c.SITE_CANONICAL}/${v}`}
        />
        :
        <meta
          property='og:url'
          content={ v }
        />
  },

]




const conditionMatchAndGetProps = (props, context, intl) =>
  helmet_map.reduce((a,
    { variables, render, test }
  ) =>{
    var current, content = ''
    for (var key in variables) {
      if (props[variables[key]]) {
        content = props[variables[key]]
        break
      }
    }
    if (typeof test === 'undefined' || (test && content.length)) {
      // if content is an object, then its a message and we need to render it as a string first
      const stringContent = typeof content === 'string' ? content : intl.formatMessage(content)
      //console.log(stringContent, content)
      current = render(stringContent, context)
    }
    current && a.push(current)
    return a
  }
  ,[])


const LocalHelmet = ({
  ...props
}) => {
  //console.log(props)

  const intl = useIntl()

  const context = useContext(SiteContext)

  const HelmetProps = conditionMatchAndGetProps(props, context, intl)

  return (
    <Helmet>
      { HelmetProps }
    </Helmet>


  )
}

LocalHelmet.propTypes = {
  robots:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  title:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  title_tag:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  canonical:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  meta_description:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  twitter_title:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  twitter_description:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  twitter_image:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  og_title:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  og_description:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  og_image:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  og_type:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  og_url:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
}

/*
LocalHelmet.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

export default LocalHelmet

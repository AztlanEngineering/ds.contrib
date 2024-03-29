const path=require('path')

const ADD_SCSS_LIB_TO_CONTEXT = '../node_modules'

module.exports = {
    webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader', 
        {
          loader: 'css-loader',
          options: {
            //modules:{
            //  mode:'global',
            //},
            //localIdentName:"[name]__hello_[local]__[hash:base64:5]"
          },
        },
        { 
          loader:'sass-loader', 
          options: {
            sassOptions: {
              includePaths: [path.resolve(__dirname, ADD_SCSS_LIB_TO_CONTEXT)]
            }
          }
        }
    ],
      include: path.resolve(__dirname, '../..')
    });

    config.resolve = {
      alias:{
      'react'           :path.resolve('./node_modules/react'),
      'react-dom'       :path.resolve('./node_modules/react-dom'),
      'react-intl'      :path.resolve('./node_modules/react-intl'),
      }
    }

    // Return the altered config
    return config;
  },
  stories: ['../src/stories/**/*.stories.@(ts|js|mdx|jsx)'],
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links',
    '@storybook/addon-docs'
  ],
};

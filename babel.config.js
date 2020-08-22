//Needs a bit of cleanup

module.exports = function (api) {
  //api.cache(false)
  var isProd = api.cache(() => process.env.NODE_ENV === 'production')
  var isCjs = api.cache(() => process.env.NODE_ENV === 'cjs')
  var isEs = api.cache(() => process.env.NODE_ENV === 'es')

  const modules = isEs ? false : 'commonjs'
  const targets = isProd ?
    { node: '10' } :
    isCjs ?
      { esmodules: true } :
      { browsers: 'last 4 versions' }

  const presets = [
    [
      '@babel/preset-env',
      {
        modules,
        targets
        //        debug:true,
      }
    ],
    '@babel/preset-react'
  ]
  const plugins = [
    ['module-resolver', {
      root :['./src'],
      alias:{
        '@fwrlines/ds':'./src/ui'
      }
    }],
    '@babel/plugin-proposal-class-properties',
    ['babel-plugin-inline-import', {
      'extensions':[
        '.html',
        '.graphql',
        '.gql'
      ]}],
    /*
    ['transform-react-remove-prop-types', {
      'mode':'wrap',
    }],
    */
    ['add-module-exports'],

  ]

  /* We comment out this part because it's probably better to remove the proptypes in the final react app instead of in the compilation process
  if(isEs || isCjs) { plugins.push(
    [
      'transform-react-remove-prop-types',
      {
        removeImport:true
      },
    ],
  )}
	*/

  /*const env = { //UNUSED (??)
    'production': {
      'plugins': ['transform-react-remove-prop-types']
    }
	}*/

  return {
    presets,
    plugins
  }
}

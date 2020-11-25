module.exports = {
  'settings':{
    'import/resolver':{
      'webpack':{
        'config':'webpack.config.js'
      }
    }
  },
  'env':{
    'browser' :true,
    'node'    :true,
    'commonjs':true,
    'es6'     :true
  },
  'extends':[
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions':{
    'ecmaFeatures':{
      'jsx':true
    },
    'ecmaVersion':2018,
    'sourceType' :'module'
  },
  'parser' :'babel-eslint',
  'plugins':[
    'react',
    'react-hooks',
    'formatjs'
  ],
  'rules':{
    'indent':[
      'error',
      2,
      //{'ignoredNodes': ['JSXElement']}
    ],
    'linebreak-style':[
      'error',
      'unix'
    ],
    'quotes':[
      'error',
      'single',
      { 'allowTemplateLiterals': true }
    ],
    'semi':[
      'error',
      'never'
    ],
    'no-trailing-spaces':[
      'error', { 'skipBlankLines': false }
    ],
    'no-console'           :0,
    'array-bracket-newline':[
      'error', 'consistent'
    ],
    'multiline-comment-style':[
      'error', 'bare-block'
    ],
    'jsx-quotes':[
      'error', 'prefer-single'
    ],
    'no-tabs':[
      'error', { 'allowIndentationTabs': false }
    ],
    'no-mixed-spaces-and-tabs':[
      'error'
    ],
    'no-unused-vars':[
      'warn'
    ],
    'react/jsx-closing-tag-location':['error'],
    'react/jsx-indent'              :[
      2, 2, {indentLogicalExpressions: true}
    ],
    'react/jsx-indent-props':[
      'error',2
    ],
    'react/jsx-closing-bracket-location':['error', 'tag-aligned'],
    'react/jsx-first-prop-new-line'     :[
      'error', 'multiline-multiprop'
    ],
    'react/jsx-max-props-per-line'     :['error', { 'maximum': 1}],
    'react/jsx-one-expression-per-line':[
      'error', {
        'allow':'single-child'
      }
    ],
    'react/jsx-equals-spacing':[
      1,
      'never'
    ],
    'react/display-name'         :0,
    //'react/prop-types': 0,
    'react/forbid-prop-types'    :0,
    'react-hooks/rules-of-hooks' :'error',
    'react-hooks/exhaustive-deps':0,
    'key-spacing'                :[
      'error', {
        'multiLine':{
          'beforeColon':false,
          'afterColon' :false
        },
        'align':{
          'beforeColon':false,
          'afterColon' :false,
          'on'         :'colon'
        }
      }
    ],
  }
}


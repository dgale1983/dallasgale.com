module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:testcafe/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'graphql', 'testcafe'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/prop-types': [2, { skipUndeclared: true }],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['label'],
        depth: 3,
      },
    ],
    // 'graphql/template-strings': [
    //   'error',
    //   {
    //     env: 'relay',
    //     schemaJsonFilepath: './src/graphql/schema.json',
    //   },
    // ],
    // FIXME: we have a lot of cyclic dependencies
    // https://github.com/benmosher/eslint-plugin-import/blob/v2.17.2/docs/rules/no-cycle.md
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.jsx', '**/*.test.js?(x)', '**/test_support/**/*.js?(x)', 'testcafe/**/**/*.js'],
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'max-len': [
      'error',
      {
        code: 132,
        ignoreComments: true,
        ignoreTrailingComments: true,
      },
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.4',
    },
    'import/resolver': {
      alias: {
        extensions: ['.mjs', '.js', '.json', '.jsx'],
        map: [
          ['__mocks__', './src/__mocks__'],
          ['analytics', './src/analytics'],
          ['components', './src/components'],
          ['images', './src/images'],
          ['geolocation', './src/geolocation'],
          // ['graphql', './src/graphql'],
          ['helpers', './src/helpers'],
          ['@web', './src'],
        ],
      },
    },
  },
  globals: {
    afterAll: false,
    beforeAll: false,
    afterEach: false,
    beforeEach: false,
    describe: false,
    expect: true,
    jest: true,
    test: true,
    xit: true,
    Stripe: true,
  },
}

module.exports = Object.assign({}, require('./.stylelintrc'), {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
  ],
  processors: ['stylelint-processor-styled-components'],
  syntax: 'scss',
})

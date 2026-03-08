import antfu from '@antfu/eslint-config'

export default antfu({
  react: {
    overrides: {
      'no-empty-pattern': 'off',
      'no-console': 'off',
      'ts/no-use-before-define': 'off',
    },
  },
})

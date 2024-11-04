import pegasus from 'eslint-config-pegasus';

export default [
  pegasus.configs.default,
  pegasus.configs.node,
  {
    name: 'custom',
    rules: {
      'no-console': 'off',
      'no-extra-parens': ['error', 'all', { enforceForArrowConditionals: false }],
    },
  },
];

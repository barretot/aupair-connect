module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-import-module-exports': 'off',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    indent: ['error', 2],
    'max-len': ['error', 140, 2, {
      ignoreComments: true,
    }],
    'no-unused-vars': ['error', {
      vars: 'local',
      args: 'after-used',
    }],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    }],
  },
};

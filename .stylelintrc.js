module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
        'stylelint-prettier/recommended',
    ],
    plugins: ['stylelint-order', 'stylelint-scss'],
    rules: {
        'string-quotes': 'single',
        'declaration-colon-space-before': 'never',
        'declaration-colon-space-after': 'always',
        'rule-empty-line-before': 'never',
        'media-feature-range-operator-space-before': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-colon-space-after': 'always',
        'function-url-quotes': 'never',
        'selector-class-pattern': '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
    },
};

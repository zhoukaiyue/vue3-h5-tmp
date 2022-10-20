/*
 * @Descripttion: eslint配置文档
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-08-25 15:52:00
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:04:30
 */

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index'] //需要忽略的组件名
            }
        ]
    }
};

/*
 * @Descripttion: eslint配置文档
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-08-25 15:52:00
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-28 10:18:35
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

        /**
         * "PascalCase"...组件定义名称为 Pascal 大小写。
         * "kebab-case"...组件定义名称为烤肉串大小写。
         */
        // @ts-ignore
        'vue/component-definition-name-casing': ['error', 'PascalCase' | 'kebab-case'],
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index'] //需要忽略的组件名
            }
        ]
    }
};

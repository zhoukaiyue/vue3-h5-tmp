/*
 * @Descripttion: eslint配置文档
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-08-25 15:52:00
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-01-22 09:24:29
 */

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    env: {
        browser: true,
        amd: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier',
        './.eslintrc-auto-import.json'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
        'vue/component-definition-name-casing': 'off', // 对组件命名不做校验，你可以采用驼峰命名或者烤肉串大小写。
        'vue/multi-word-component-names': 'off', //关闭eslint检查文件名是否为驼峰命名
        '@typescript-eslint/no-unused-vars': 'error' // 对未使用的变量进行检查，如果未使用则报错
    }
};

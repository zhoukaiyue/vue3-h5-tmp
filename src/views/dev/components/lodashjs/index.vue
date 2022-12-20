<!--
 * @Descripttion: lodashjs使用demo
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-09-29 16:58:37
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:08:46
-->

<template>
    <frame-view class="dev-lodashjs">
        项目中集成了 Lodash
        <a href="https://www.lodashjs.com/">【官方文档】</a>
        工具库。
        <br />
        <br />
        <strong>强烈推荐按需引入方式使用</strong>
        <br />
        <br />
        例子：
        <br />
        <div>引入：import isArray from "lodash/isArray";</div>
        <div>使用：isArray([111])</div>
    </frame-view>
</template>

<script setup lang="ts">
import isArray from 'lodash/isArray';

// eslint-disable-next-line prettier/prettier
console.log(`%c[111]是数组：${isArray([111])}`, 'color:green;font-size:36px');
</script>

<style scoped lang="scss">
.dev-lodashjs {
    :deep(.frame-view-content) {
        padding: 40px 10px;
        font-size: 36px;
        line-height: 48px;
    }
}
</style>

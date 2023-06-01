<!--
 * @Descripttion: lodashjs使用demo
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-09-29 16:58:37
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-01 22:53:11
-->
<script setup lang="ts"></script>

<template>
    <frame-view class="dev-lodashjs">
        <strong>*强烈推荐按需引入方式使用</strong>
        <p><br /></p>
        <div>
            <p>
                <span style="color: rgb(171, 178, 191)">&lt;</span>
                <span style="color: rgb(224, 108, 117)">script</span>
                <span style="color: rgb(171, 178, 191)">&nbsp;</span>
                <span style="color: rgb(209, 154, 102)">setup</span>
                <span style="color: rgb(171, 178, 191)">&nbsp;</span>
                <span style="color: rgb(209, 154, 102)">lang</span>
                <span style="color: rgb(171, 178, 191)">=</span>
                <span style="color: rgb(152, 195, 121)">"ts"</span>
                <span style="color: rgb(171, 178, 191)">&gt;</span>
            </p>
            <p>
                <span style="color: rgb(198, 120, 221)">&nbsp; &nbsp;import</span>
                <span style="color: rgb(171, 178, 191)">&nbsp;</span>
                <span style="color: rgb(224, 108, 117)">isArray</span>
                <span style="color: rgb(171, 178, 191)">&nbsp;</span>
                <span style="color: rgb(198, 120, 221)">from</span>
                <span style="color: rgb(171, 178, 191)">&nbsp;</span>
                <span style="color: rgb(152, 195, 121)">'lodash/isArray'</span>
                <span style="color: rgb(171, 178, 191)">;</span>
            </p>
            <p>
                <span style="color: rgb(171, 178, 191)">&nbsp; &nbsp;</span>
                <span style="color: rgb(97, 175, 239)">isArray</span>
                <span style="color: rgb(171, 178, 191)">([</span>
                <span style="color: rgb(209, 154, 102)">111</span>
                <span style="color: rgb(171, 178, 191)">])</span>
                <span style="color: rgb(198, 120, 221)">&nbsp;?&nbsp;</span>
                <span style="color: rgb(171, 178, 191)"></span>
                <span style="color: rgb(152, 195, 121)">'是数组'</span>
                <span style="color: rgb(171, 178, 191)"></span>
                <span style="color: rgb(198, 120, 221)">&nbsp;:&nbsp;</span>
                <span style="color: rgb(171, 178, 191)"></span>
                <span style="color: rgb(152, 195, 121)">'不是数组'</span>
                <span style="color: rgb(171, 178, 191)">;</span>
            </p>
            <p>
                <span style="color: rgb(171, 178, 191)">&lt;/</span>
                <span style="color: rgb(224, 108, 117)">script</span>
                <span style="color: rgb(171, 178, 191)">&gt;</span>
            </p>
        </div>
    </frame-view>
</template>

<style scoped lang="scss">
.dev-lodashjs {
    :deep(.frame-view-content) {
        padding: 20px;
        font-size: 36px;
        line-height: 48px;
    }
}
</style>

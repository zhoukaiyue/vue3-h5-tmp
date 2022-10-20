<!--
 * @Descripttion: layout布局组件使用demo
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-09-29 16:37:24
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 14:08:57
-->

<template>
    <frame-view class="dev-layout">
        布局组件:
        <br />
        使用方法请参考 src/layOut 文件下面的README.md文件。
    </frame-view>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue';
export default {
    name: 'dev-layout',
    props: [],
    setup() {
        const state = reactive({});
        onBeforeMount(() => {
            console.log('2.组件挂载页面之前执行----onBeforeMount');
        });
        onMounted(() => {
            console.log('3.-组件挂载到页面之后执行-------onMounted');
        });
        const refState = toRefs(state);
        return {
            ...refState
        };
    }
};
</script>

<style scoped lang="scss">
.dev-layout {
    :deep(.frame-view-content) {
        color: '#333';
        padding: 40px;
        font-size: 32px;
    }
}
</style>

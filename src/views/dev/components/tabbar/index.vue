<!--
 * @Descripttion: tabbar组件demo
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-19 09:48:29
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-01-30 10:06:47
-->

<template>
    <frame-view class="dev-tabbar" v-bind:showTabbar="true">tabbar 底部标签栏</frame-view>
</template>

<script lang="ts">
export default {
    name: 'dev-tabbar',
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
.dev-tabbar {
    :deep(.frame-view-content) {
        color: '#333';
        padding: 40px;
        font-size: 32px;
    }
}
</style>

<!--
 * @Descripttion: layout布局组件使用demo
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-09-29 16:37:24
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-01-30 10:03:58
-->

<template>
    <frame-view class="dev-layout">
        基础布局组件是用来布局的，集成了tabbar（底部导航栏，用于在不同页面之间进行切换。）功能于一体。
        <br />
        <br />
        <span>什么时候使用？</span>
        <br />
        <span>如果你的src不是作为业务组件使用而是作为一个单独的页面，那么你应该使用它。</span>
        <br />
        <span>语法： 使用 "frame-view" 作为标签即可，就像当前页面这样。</span>
        <br />
        <br />
        注：由于基础布局组件（'src/layout'）以及全局基础组件（'src/resources/components/*'）
        默认全局自动导入了，所以不需要在sfc里面或者其他地方再次注册。
    </frame-view>
</template>

<script lang="ts">
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
        span {
            font-size: 18px;
            font-weight: bold;
        }
    }
}
</style>

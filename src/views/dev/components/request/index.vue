<!--
 * @Descripttion: axios使用demo
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-18 16:28:31
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-10-20 15:39:52
-->

<template>
    <frame-view class="dev-request">
        <p>axios库的使用规范：</p>
        <p>请阅读 src/config/apis README.md 描述文件</p>
    </frame-view>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue';
import { getListDev } from '@/config/apis/dev';
// 导入验证器
import type { getListDevValidator } from '@/config/apis/validation';
export default {
    name: 'dev-request',
    props: [],
    setup() {
        const state = reactive({});
        onBeforeMount(() => {
            console.log('2.组件挂载页面之前执行----onBeforeMount');
        });
        onMounted(() => {
            console.log('3.-组件挂载到页面之后执行-------onMounted');
            // 请求参数
            const params: getListDevValidator.ParamType = {
                id: 1
            };
            // 加载加快
            getListDev(params)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    //
                });
        });
        const refState = toRefs(state);
        return {
            ...refState
        };
    }
};
</script>

<style scoped lang="scss">
.dev-request {
    :deep(.frame-view-content) {
        background-color: #fff;
        color: '#333';
        font-size: 32px;
        padding: 40px;
    }
}
</style>

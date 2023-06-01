<!--
 * @Descripttion:  vue-clipboard3使用demo
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-05-22 12:01:19
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-06-01 15:12:08
 * @官方文档：https://github.com/JamieCurnow/vue-clipboard3
-->
<script setup lang="ts">
import Toast from 'vant/es/toast';
import useClipboard from 'vue-clipboard3';
const { toClipboard } = useClipboard();

const copy = async () => {
    try {
        await toClipboard('复制到剪贴板的内容');
        Toast.success('Copied to clipboard');
    } catch (e) {
        Toast.success('Can not copy');
    }
};
</script>
<template>
    <frame-view class="dev-tool-copy">
        <p>基础用法</p>
        <van-button class="mt-[20px!important]" size="small" plain type="primary" @click="copy">
            复制到剪贴板
        </van-button>
    </frame-view>
</template>

<style scoped lang="scss">
.dev-tool-copy {
    :deep(.frame-view-content) {
        background-color: #ffffff;
        padding: 20px;
        font-size: 30px;
    }
}
</style>

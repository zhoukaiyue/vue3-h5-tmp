<!--
 * @Descripttion:  vue-clipboard3使用demo
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-05-22 12:01:19
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-05-22 12:17:10
 * @官方文档：https://github.com/JamieCurnow/vue-clipboard3
-->
<script setup lang="ts">
import Toast from 'vant/es/toast';
import useClipboard from 'vue-clipboard3';
const { toClipboard } = useClipboard();
const text = ref('复制到剪贴板的内容');

const copy = async () => {
    try {
        await toClipboard(text.value);
        Toast('Copied to clipboard');
    } catch (e) {
        console.error(e);
    }
};
</script>
<template>
    <van-button class="ml-[10px!important]" size="small" plain type="primary" @click="copy">复制到剪贴板</van-button>
</template>

<style scoped lang="scss"></style>

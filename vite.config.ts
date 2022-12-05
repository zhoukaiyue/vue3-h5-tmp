/*
 * @Descripttion: vite配置文件
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-20 13:53:16
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-05 15:43:06
 */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';
import { createHtmlPlugin } from 'vite-plugin-html';

const RegImg = /\.(png|jpe?g|gif|svg)(\?.*)?$/;
const RegMedia = /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/;
const RegFonts = /\.(woff2?|eot|ttf|otf)(\?.*)?$/;

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command, mode }) => {
    // 根据当前工作目录中的 `mode` 加载 .env 文件
    // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const env = loadEnv(mode, process.cwd(), '');

    return {
        // 开发或生产环境服务的公共基础路径。
        base: env.VITE_APP_PUBLIC_URL,
        plugins: [
            vue(),
            vueJsx(),
            Components({
                // 指定组件位置，以下导入的分别是全局基础组件以及基础布局组件
                dirs: ['src/resources/components', 'src/layout'], //自动导入自己的组件
                resolvers: [VantResolver()]
            }),
            // 对html模板做压缩处理。文档【https://www.npmjs.com/package/vite-plugin-html】
            createHtmlPlugin({
                minify: true,
                inject: {
                    data: {
                        title: 'vue3-h5-tmp'
                    }
                }
            }),
            // rollup打包分析插件。文档【https://www.npmjs.com/package/rollup-plugin-visualizer】
            env.VITE_APP_BUNDLE_ANALYZE === '1' &&
                visualizer({
                    open: true,
                    gzipSize: true,
                    brotliSize: true
                })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        // esbuild配置。文档【https://cn.vitejs.dev/config/shared-options.html#esbuild】
        esbuild: {
            // 删除所有断点。
            drop: env.VITE_APP_DROP_DEBUGGER === '1' ? ['debugger'] : [],
            //删除console.log。
            pure: env.VITE_APP_PURE_CONSOLE === '1' ? ['console.log'] : [],
            // 移除代码注释
            ignoreAnnotations: false,
            legalComments: 'none'
        },
        // 构建选项
        build: {
            cssCodeSplit: false, //打包为一个 CSS 文件
            //构建时清空outDir目录。
            emptyOutDir: true,
            //指定生成静态资源的存放路径
            assetsDir: 'assets',
            // Rollup 打包配置
            rollupOptions: {
                plugins: [],
                output: {
                    entryFileNames: 'assets/js/[name]-[hash].js',
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    // 按file type分包
                    assetFileNames: (assetInfo: { name?: string }) => {
                        // img
                        if (assetInfo.name && RegImg.test(assetInfo.name)) {
                            return 'assets/img/[name]-[hash][extname]';
                        }
                        // media
                        if (assetInfo.name && RegMedia.test(assetInfo.name)) {
                            return 'assets/media/[name]-[hash][extname]';
                        }
                        // fonts
                        if (assetInfo.name && RegFonts.test(assetInfo.name)) {
                            return 'assets/fonts/[name]-[hash][extname]';
                        }
                        return 'assets/[ext]/[name]-[hash][extname]';
                    },
                    chunkSizeWarningLimit: 1500, //上调单个模块文件限制的上限
                    emptyOutDir: true, //清空root下dist文件夹内容
                    // 分包配置，配置完成自动按需加载
                    manualChunks: {
                        vue: ['vue', 'vue-router', 'pinia'],
                        vant: ['vant'],
                        vconsole: ['vconsole'],
                        tool: ['lodash', 'qs'],
                        axios: ['axios']
                    }
                }
            }
        },
        // 开发服务器选项
        server: {
            host: '0.0.0.0',
            port: 23000,
            hmr: true, //热更新
            // 为开发服务器配置自定义代理规则。文档【https://cn.vitejs.dev/config/server-options.html#server-proxy】
            proxy: {
                '/proxy_url': {
                    target: env.VITE_APP_PROXY_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/proxy_url/, '')
                }
            }
        }
    };
});

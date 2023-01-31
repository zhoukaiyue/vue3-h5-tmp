/*
 * @Descripttion: vite配置文件
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-10-20 13:53:16
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-01-31 16:27:37
 */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { visualizer } from 'rollup-plugin-visualizer';
import { createHtmlPlugin } from 'vite-plugin-html';
// 自动导入 API vite插件。文档地址：https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite';

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
            // 按需自动加载组件
            Components({
                // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
                // 以下导入的分别是全局基础组件以及基础布局组件，可在文件中直接使用而不需要再次import
                dirs: ['src/resources/components', 'src/layout'],
                resolvers: [VantResolver()]
            }),
            // 自动导入 API vite插件
            // 以下导入的分别是vue（框架）以及官方生态库 vue-router、pinia 的相关api
            // 如果你需要用到相关库的api,可在文件中直接使用而不需要再次import
            // 注：有可能部分api未被自动导入，如果你直接使用时报错，请手动inport，如 vue-router 库的 createRouter, createWebHistory api。
            AutoImport({
                // targets to transform
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                    /\.vue$/,
                    /\.vue\?vue/ // .vue
                ],
                imports: [
                    // presets
                    'vue',
                    'vue-router',
                    'pinia'
                ],
                // Filepath to generate corresponding .d.ts file.
                // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
                // Set `false` to disable.
                dts: 'src/auto-imports.d.ts',
                // Generate corresponding .eslintrc-auto-import.json file.
                // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
                eslintrc: {
                    enabled: true, // Default `false`
                    filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
                    globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
                }
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
            //是指打包时先清空上一次构建生成的目录（outDir）。
            emptyOutDir: true,
            //指定生成静态资源的存放路径
            assetsDir: 'assets',
            //chunk 大小警告的限制， 单位kbs，超过这个范围会报警告。
            chunkSizeWarningLimit: 1000,
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
                    // 分包配置，配置完成自动按需加载
                    manualChunks: {
                        vue: ['vue', 'vue-router', 'pinia'],
                        ui: ['vant', 'tailwindcss'],
                        tool: ['lodash', 'qs', 'vconsole'],
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

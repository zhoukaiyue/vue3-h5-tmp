# 简介

vue3-h5-tmp 基于 Vue3.x setup + TypeScript + Vite + Pinia + Vant3 + sass + tailwindcss + Rem 布局适配 + axios（封装）+ Eslint + Prettier 等流行技术栈构建移动端模板脚手架，开箱即用。

# 技术规范

## 环境要求

-   node >14
-   pnpm >=7
-   支持现代浏览器以及 Chrome >= 51、iOS >= 10.0（与 Vue 3 一致）。

## 编辑器以及对应扩展

-   Visual Studio v69+
-   Vetur v0.35.0+
-   Eslint v2.2.6+
-   Prettier - Code formatter v9.5.0+
-   Tailwind CSS IntelliSense v0.9.1+

## 快速开发

```
#安装项目依赖
pnpm install
#开发环境启动
pnpm start
#打包 test 环境代码
pnpm build:test
#打包生产环境代码
pnpm build or pnpm build:prod
#执行 js 类型检查
pnpm lint:fix
#执行 prettier 批量格式化代码
pnpm lint:prettier

##注：详细请阅读package.json 以及对应的环境配置文件（即.env 文件）！
```

## 开发基础规范

<font  color="red">如果设计稿的尺寸不是 750，而是 375 或其他大小，请在 .postcssrc.js 中及时调整 rootValue。</font>

-   🚀 重要、复杂逻辑一定要写注释；
-   🚀 代码规范按照 eslint 的规则来，做到 no waring 和 no error；
-   🚀 项目业务开发，优先使用 vue 全家桶技术栈开发项目，预编译使用 sass；
-   🚀 操作成功或失败后要有提示，比如新增成功、新增失败运行时间长的任务（计算量大、请求后台接口），要有 loadding 效果；
-   🚀 vue 单文件组件代码规范，html、script、style 的位置顺序 html > script > style；
-   🚀 公共的状态才放到 store；
-   🚀 代码尽量往纵向发展，一行不要太长；
-   🚀 不要在钩子函数中写大量业务代码；
-   🚀 异步使用 aysnc await 语法；
-   🚀 不是常用的方法不要全局挂载；
-   🚀 文件命名如果是多单词则采用驼峰命名或者烤肉串大小写，尽量简洁明了；

### 基础组件名。 【注：src/components 目录。】

> 基础组件文件命名应该以 base 为前缀命名，以示其唯一性，并且以横线连接。

```
例子：
src
└─ resources
   └─ components
      └─ base-button
         ├─ index.vue      //源码
         └─ README.md      //组件使用说明文档
```

### 业务组件名。 【注：src/views/components 目录。】

> 业务组件文件命名应该以 the 为前缀命名，以示其唯一性，并且以横线连接。

```
例子：
src
└─ views
   └─ components
      └─ the-button
         ├─ index.vue      //源码
         └─ README.md      //组件使用说明文档
```

### 路由文件创建与命名。 【注：src/config/router 目录。】

为了方便维护与开发，建议路由文件命名与对应的页面文件命名保持一致，尽量简洁明了。

```
例子：
src
└─ config
   └─ router
      |- index.js
      |- dev.js
      |- home.js
```

### 接口文件创建与命名。 【注：src/config/apis 目录。】

为了方便维护与开发，建议接口文件命名与对应的页面文件命名保持一致，尽量简洁明了。

```
例子：
src
└─ config
   └─ apis
      |- index.js
      |- home.js
```

### 状态切片文件创建与命名。 【注：src/config/store 目录。】

为了方便维护与开发，建议以当前对应模块或者功能命名文件夹，采用驼峰命名或者烤肉串大小写，尽量简洁明了。

```
例子：
src
└─ config
   └─ store
      └─ dev
         |- index.js
      └─ home
         |- index.js
```

### 图片资源。 【注：src/assets/img 目录。】

建议图片文件夹命名与对应的页面文件命名保持一致，公共图片资源放置到 src/assets/img/base 目录下即可。

```
例子：
src
└─ assets
   └─ img
      |- index
      |- dev
      |- base
```

## git 版本规范

### 分支管理

一般项目分主分支（master）和其他分支。 当有团队成员要开发新功能(Feather)或改 BUG(Fix) 时，就从 master 分支开一个新的分支。

### Commit 规范

-   feat 新增功能
-   fix 修复 bug
-   docs 文档变更
-   style 代码格式（不影响功能，例如空格、分号等格式修正）
-   refactor 代码重构
-   perf 改善性能
-   test 测试
-   build 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）
-   ci 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等
-   chore 变更构建流程或辅助工具
-   revert 代码回退

### Tag 版本号

版本号以 v 开头，根据当前仓库的 tag 编号进行累加，如：v1.10.45。

## 项目目录说明

```
vue3-h5-tmp                             //
├─ .env.development                     // 开发环境配置文件
├─ .env.production                      // 生产环境配置文件
├─ .env.test                            // 测试、灰度(预发布|预上线) 模式
├─ .eslintignore                        // eslint白名单
├─ .eslintrc.cjs                        // eslint配置文件
├─ .npmrc                               //
├─ .postcssrc.js                        // postcss配置文件
├─ .prettierrc.js                       // prettier配置文件
├─ .vscode                              // 项目级vscode配置文件
│  ├─ extensions.json                   //
│  └─ settings.json                     //
├─ components.d.ts                      //
├─ env.d.ts                             //
├─ index.html                           // 入口文件
├─ package.json                         // 项目描述文件
├─ pnpm-lock.yaml                       // pnpm自锁文件
├─ public                               // 静态资源
│  └─ static                            //
│     ├─ css                            //
│     ├─ img                            //
│     │  ├─ favicon.ico                 //
│     │  └─ loading@2x.gif              //
│     └─ js                             //
├─ README.md                            // 项目自述文件
├─ src                                  //
│  ├─ App.vue                           //
│  ├─ assets                            // 静态资源 hash处理
│  │  ├─ css                            // 全局css放置目录
│  │  │  └─ index.scss                  //
│  │  ├─ img                            // 所有img放置目录
│  │  │  ├─ base                        //
│  │  │  │  ├─ empty.png                //
│  │  │  │  └─ loading@2x.gif           //
│  │  │  └─ logo.svg                    //
│  │  └─ js                             // 全局静态js放置目录
│  ├─ config                            // 业务配置目录
│  │  ├─ apis                           // 所以接口相关
│  │  │  ├─ dev                         // 接口切片
│  │  │  │  ├─ index.ts                 // 接口创建文件
│  │  │  │  └─ validation               // 接口验证器相关
│  │  │  │     ├─ index.ts              // 接口验证器统一导出文件
│  │  │  │     └─ module                // 接口验证器切片
│  │  │  │        └─ getListDev.ts      // 接口验证器核心文件
│  │  │  └─ README.md                   // 接口创建说明文档
│  │  ├─ router                         // 所有路由相关
│  │  │  ├─ dev.ts                      //
│  │  │  ├─ errpage.ts                  //
│  │  │  └─ index.ts                    //
│  │  └─ store                          // 状态商店（所有全局状态管理相关）
│  │     ├─ dev                         // store模块
│  │     │  ├─ index.ts                 // store核心代码
│  │     │  ├─ README.md                // store 模块使用说明
│  │     │  └─ validation               // ts 校验器
│  │     │     └─ index.ts              //
│  │     └─ README.md                   // store模块创建说明
│  ├─ layout                            // 基础布局组件
│  │  ├─ frame-view                     //
│  │  │  └─ index.vue                   //
│  │  ├─ index.ts                       //
│  │  └─ tabbar                         //
│  │     └─ index.vue                   //
│  ├─ main.ts                           // 入口js
│  ├─ packages                          // 依赖的第三方包或插件
│  │  ├─ request                        // axios请求库封装
│  │  │  ├─ cancel                      //
│  │  │  │  ├─ index.ts                 //
│  │  │  │  └─ utils                    //
│  │  │  │     └─ generateReqKey.ts     //
│  │  │  ├─ httpErrorStatusHandle       //
│  │  │  │  └─ index.ts                 //
│  │  │  ├─ index.ts                    //
│  │  │  ├─ loading                     //
│  │  │  │  └─ index.ts                 //
│  │  │  ├─ README.md                   //
│  │  │  ├─ retry                       //
│  │  │  │  └─ index.ts                 //
│  │  │  └─ type                        //
│  │  │     └─ index.ts                 //
│  │  ├─ router                         // vue-router 核心封装
│  │  │  ├─ index.ts                    //
│  │  │  └─ routes.ts                   //
│  │  └─ vConsole                       // vConsole配置
│  │     └─ index.ts                    //
│  ├─ resources                         // 全局组件、全局自定义插件
│  │  ├─ components                     // 全局组件
│  │  └─ plugin                         // 全局自定义插件
│  │     ├─ index.js                    //
│  │     └─ vant                        //
│  │        └─ index.js                 //
│  ├─ types                             //
│  ├─ utils                             // 工具库
│  │  ├─ getCurrentUrlAssignKey.ts      //
│  │  ├─ handle-local.ts                //
│  │  ├─ handle-session.ts              //
│  │  ├─ sleep.ts                       //
│  │  └─ validate.ts                    //
│  ├─ views                             // 视图
│  │  ├─ components                     // 业务组件
│  │  ├─ dev                            //
│  │  │  ├─ components                  //
│  │  │  │  ├─ layOut                   //
│  │  │  │  │  └─ index.vue             //
│  │  │  │  ├─ list                     //
│  │  │  │  ├─ lodashjs                 //
│  │  │  │  │  └─ index.vue             //
│  │  │  │  ├─ pinia                    //
│  │  │  │  │  └─ index.vue             //
│  │  │  │  ├─ request                  //
│  │  │  │  │  └─ index.vue             //
│  │  │  │  └─ tabbar                   //
│  │  │  │     └─ index.vue             //
│  │  │  └─ index.vue                   //
│  │  ├─ errPage                        //
│  │  │  ├─ err404                      //
│  │  │  │  └─ index.vue                //
│  │  │  └─ err500                      //
│  │  └─ index                          //
│  │     └─ index.vue                   //
│  └─ vue.d.ts                          //
├─ tailwind.config.js                   // tailwindcss配置文件
├─ tsconfig.config.json                 //
├─ tsconfig.json                        //
└─ vite.config.ts                       // vite配置文件

```

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

## Folder Structure

|-node_modules       -- 套件安裝目錄
|-public             -- 公用資料夾
---|favicon.ico      -- 網站圖示
|-src                -- 底層文件目錄，撰寫的程式碼基本都在此根目錄下
---|assets           -- 放置靜態檔案的目錄，比如logo.svg就放在這裡
---|components       -- 通用元件/自定義的樣式組件 都會放到此目錄
-----|__test             -- 單元測試
---|interfaces       -- 自定義的TypeScript介面
---|layouts          -- 網站主體佈局配置
---|router           -- vue-router vue路由的配置文件
---|services         -- 常用/共通的 服務會抽出來存放於此; 像是API取用管理
---|store            -- 存放 vuex/pinia 定義的狀態，為vue專用的狀態管理器
---|utils            -- 共通 function
---|views            -- 各個主要功能頁面
---|App.vue          -- 根元件，程式初始進入點
---|main.ts          -- 入口文件，所有會使用到的元件於此註冊。因為採用了TypeScript所以是ts结尾
|-.env.development   -- 環境變數檔案(For Dev)
|-.env.production    -- 環境變數檔案(For Prod)
|-.eslintrc.cjs      -- eslint相關設定
|-.gitignore         -- 設定哪些檔案不需要被git管理
|-index.html         -- 入口的html檔案
|-package.json       -- 指令配置和套件管理檔案
|-README.md          -- 項目的說明文件，使用markdown語法進行編寫
|-tsconfig.json      -- TypeScript設定檔案
|-vite.config.ts     -- Vite相關設定
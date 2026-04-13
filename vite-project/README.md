# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

## Folder Structure

|-node_modules       -- 套件安裝目錄(若要將程式包版壓縮寄出,請略過此目錄)
|-public             -- 公用資料夾
---|favicon.ico      -- 網站圖示
|-src                -- 底層文件目錄，撰寫的程式碼基本都在此根目錄下
---|assets           -- 放置靜態檔案的目錄，比如logo.svg就放在這裡
---|components       -- 全域/基礎 UI 元件 (Dumb Components，如按鈕、彈窗)
-----|__test             -- 單元測試
---|composables      -- 純粹的業務邏輯、狀態管理 (沒有 UI)
---|layouts          -- 網站主體佈局配置
---|router           -- 路由設定與攔截器 (Route Guards)
---|services         -- 常用/共通的 服務會抽出來存放於此; 像是API取用管理
---|store            -- 存放 vuex/pinia 定義的狀態，為vue專用的狀態管理器
---|types            -- 全域 TypeScript 型別宣告 (Interfaces, Types)
---|utils            -- 純邏輯工具函式 (如日期格式化、正則驗證)
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

## Naming Rule

| 情境                        | 建議使用          |
| -------------------------- | ----------------- |
| 工具函式（utils）           | `export function` |
| Vue composables            | `export function` |
| 需要 this 控制              | `export function` |
| 保持一致 functional 寫法    | `export const`    |
| callback / inline function | `export const`    |

// composables 一律用 function
export function useXXX()

// utils 可用 function
export function formatXXX()

// 常數一律用 const
export const XXX = ...

// 簡單 helper 可用 const
export const isEmpty = () => ...

## Version Control

為了維持程式穩定性，禁止任意私自安裝第三方套件或套件升級
務必和團隊協調後才做異動，確保所有開發人員使用的版本一致


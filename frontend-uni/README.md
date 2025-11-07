# UNOFOOD 前端（uni-app / Vue3 + Vite）

本目录为 B 方案的前端工程：使用 uni-app（Vue3 + Vite），目标平台为微信小程序（MP-WEIXIN）。不引入未提供的参数与数据，当前仅搭建首页骨架与占位素材规范。

## 目录结构
```
frontend-uni/
  ├── src/
  │   ├── pages/index/index.vue  # 首页骨架：搜索栏 + 列表占位（黄色图片占位）
  │   ├── pages.json             # 设置首页与导航标题 UNOFOOD
  │   ├── manifest.json          # 小程序平台配置（AppID留空，待你提供）
  │   ├── App.vue / main.js      # 基础应用入口
  │   └── static/                # 可放素材（如需）
  ├── package.json
  └── vite.config.js
```

## 运行与构建
- 安装：在 frontend-uni 目录执行
```
npm install
```
- 开发构建到微信小程序平台（会输出到 dist/dev/mp-weixin）：
```
npm run dev:mp-weixin
```
- 生产构建：
```
npm run build:mp-weixin
```
- 在微信开发者工具中导入 dist/dev/mp-weixin 或 dist/build/mp-weixin 目录即可预览。

注意：当前环境 Node 版本较低（日志中提示 Node>=18 更佳），如 dev 构建遇到问题，请将 Node 升级到 18+。

## UI 规范与占位
- 标题与导航：统一为“UNOFOOD”，极简 iOS 风格，留白充足。
- 占位素材颜色：
  - 图标：红色
  - 图片：黄色（首页已使用黄色块作为图片占位）
  - 视频：蓝色
  - 其他文件：绿色
- 暂不引入未提供的参数或数据源，页面仅展示结构与占位。

## 后续开发建议
- 根据 docs/Figma-Edit-Plan.md 在 Figma 中落地组件与画板，再逐步替换占位为真实设计与素材。
- 与后端（server/）约定接口后，按 PRD 实现“附近列表、详情、下单、订单与核销”等模块。
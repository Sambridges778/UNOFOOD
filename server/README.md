# UNOFOOD 后端（Node.js / NestJS 最小骨架）

说明：本后端为最小可运行骨架，用于后续接入订单、库存、核销、支付回调等业务。当前不包含数据库与具体业务参数，只有健康检查接口，避免编造数据。

## 技术栈
- Node.js + NestJS（TypeScript）

## 目录结构
```
server/
  ├── src/
  │   ├── app.controller.ts
  │   ├── app.module.ts
  │   └── main.ts
  ├── package.json
  └── tsconfig.json
```

## 启动
- 开发模式：在 server 目录执行
```
npm install
npm run dev
```
- 访问健康检查接口：
```
GET http://localhost:3000/api/health
```
返回：
```
{"status":"ok"}
```

## 后续工作
- 根据 PRD 增加模块：auth、merchant、store、bag、order、payment、redemption。
- 接入数据库与缓存（如 PostgreSQL/MySQL、Redis）。
- 接入微信支付回调与订阅消息（服务端）。
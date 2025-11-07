# Figma 编辑执行清单（基于 README 的 UI 设计方案）

目标：在 Figma 文件（当前：GENOFOOD）中创建 UNOFOOD 小程序的 UI 结构与组件，严格对齐 README 的信息架构与风格要求（iOS 风格、极简、界面不拥挤、呼吸感）。本清单不包含无关操作、不引入未提供参数或具体数值，仅给出结构与命名规范。

## 一、页面与画板结构（不含具体尺寸）
- Page：UNOFOOD
  - Frame：C-Home（消费者首页）
  - Frame：C-Bag-Detail（惊喜袋详情）
  - Frame：C-Order-Create（下单与支付确认）
  - Frame：C-Orders（订单列表）
  - Frame：C-Order-Detail（订单详情与核销码展示）
  - Frame：C-Profile（个人中心/消息订阅/帮助）
  - Frame：B-Publish（商家发布惊喜袋）
  - Frame：B-Orders（商家订单与核销）
  - Frame：B-Store（门店管理）
  - Frame：Ops-Review（运营审核商家）
  - Frame：Ops-Dashboard（运营数据看板）

说明：上述命名即为 Figma 画板（Frame）名称，采用语义化前缀区分角色：C（消费者）、B（商家）、Ops（运营）。

## 二、组件库（不含具体数值）
- Component：NavBar（导航栏，居中标题，左右留白，支持返回/首页图标）
- Component：TabBar（底部标签栏，简化为首页与订单/我的）
- Component：SearchBar（搜索框，圆角与占位提示，不设具体圆角值）
- Component：StoreCard（店铺卡片，店名、距离标签、营业状态）
- Component：BagCard（惊喜袋卡片，店铺名、品类说明标签、价格、提货时间段、库存标识）
- Component：PriceTag（价格标签组件，支持优惠/划线价样式）
- Component：Tag（标签组件：品类、时段、状态）
- Component：Button（主按钮/次按钮）
- Component：FormField（表单项：输入框、选择器、时间段选择）
- Component：Modal（对话框，用于退款说明、确认提示）
- Component：Toast（轻提示）
- Component：EmptyState（空状态占位，黄色图片占位）
- Component：QRCodePanel（核销码展示区域）

所有组件以 Figma 的 Component 创建，命名格式统一为：Comp/<Name>。

## 三、设计令牌（仅命名，不设具体值）
- 色板：color/primary、color/text、color/bg、color/border、color/success、color/warning、color/error。
- 字体：font/heading、font/body（遵循 iOS 风格，无具体字号值）。
- 间距：spacing/xs、spacing/sm、spacing/md、spacing/lg（不设具体数值）。
- 圆角：radius/sm、radius/md（不设具体数值）。
- 阴影：shadow/soft（不设具体数值）。

说明：以上令牌为占位命名，具体数值由你后续提供或在 Figma 与代码中统一配置。

## 四、占位素材规范（严格遵循）
- 图标：红色图片占位（Icon Placeholder）
- 图片：黄色图片占位（Image Placeholder）
- 视频：蓝色图片占位（Video Placeholder）
- 其他文件：绿色图片占位（File Placeholder）

在 Figma 中创建四类占位组件：Placeholder/Icon、Placeholder/Image、Placeholder/Video、Placeholder/File。

## 五、关键画板内容（结构说明，无数值）
- C-Home
  - 顶部：NavBar 标题“UNOFOOD”
  - 搜索：SearchBar（就近店铺检索）
  - 列表：按“StoreCard + BagCard”组合展示附近店铺及其可售惊喜袋（不展示具体单品，仅品类说明）
  - 空状态：EmptyState（无数据或未授权定位）

- C-Bag-Detail
  - 店铺信息区域：StoreCard 精简版
  - 惊喜袋信息：BagCard 详情版（提货时段、数量、价格、限购提示）
  - 行为：主按钮“立即下单”

- C-Order-Create
  - 订单摘要：BagCard 精简版
  - 支付确认：Button 主按钮（微信支付触发说明）
  - 订阅提示：说明文本（用于订阅消息提醒）

- C-Orders / C-Order-Detail
  - 列表卡片：按状态分组（未提货、已提货、退款中、已退款）
  - 详情页：QRCodePanel（核销码）与退款入口 Modal

- B-Publish
  - 表单：FormField（数量、提货时间段、价格、限购、上下架）
  - 行为：Button（发布）

- B-Orders / B-Store
  - 列表：订单与门店管理卡片
  - 行为：核销入口、上下架切换

- Ops-Review / Ops-Dashboard
  - 审核表单与数据卡片结构（不设指标数值）

## 六、交互流程（原型连线范围）
- C-Home → C-Bag-Detail → C-Order-Create → C-Order-Detail
- C-Orders（从订单列表进入详情）
- B-Publish → B-Orders（发布成功后查看订单）

仅建立上述连线，不添加其他无关交互。

## 七、导出与落地（供前端引用）
- 本地导出目录：d:\\unofood\\assets\\（若导出则按占位规范生成）。
- 命名：icons/、images/、videos/、files/ 四级目录；文件名对应组件或页面语义名。

## 八、权限与编辑说明
- 当前桥接接口可读取文件信息，但不直接支持在 Figma 内编辑。若需要在 Figma 内落地本清单，请将我加入该文件的编辑者角色，或由设计师按本清单创建。
- 我可在代码侧同步实现对应 UI 骨架，确保与 Figma 结构一致。
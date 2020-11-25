# GNU 规范
- 2.3.0
- 2: major 主版本号
- 3: minor 次版本号
- 0: patch 补丁，偶数是稳定版，基数是测试版

### npm 版本控制前缀
- npm view vue versions
- ^: 锁定主版本号
- ~: 锁定次版本号
- *: 固定版本
- 无：安装最高版本


# SPA
- single page application
- 特点
  - 单个页面
  - 入口JS，一般也是一个文件

# .vue
- .vue 表示Vue组件
- 单文件组件

# 物理像素 VS 逻辑像素
### 概念
- 物理像素：硬件设备真实的物理像素
- 逻辑像素：我们开发人员在CSS里写的px
### DPR: devicePixelRatio
- 物理像素/逻辑像素
### Retinna: 视网膜屏幕

# 其他
- VSCode插件：htmltagwrap
- CDN: content distribute network

# 布局
- 横向避免使用margin属性，纵向不受限制
- 尽量不要使用float布局

# 移动端页面布局方案
- 1、100%布局（流式布局，弹性布局），适合list布局
  - 高度固定，宽度100%
  - 口诀：文字流式，控件（用于布局的图片，文字，icon）弹性，图片等比例
- 2、rem布局（等比缩放布局），适合全屏布局
- 3、响应式布局
- 注：不要和布局技术混淆（flex布局，媒体查询）

# vw
- 1vw = window.innerWidth / 100
- 750->375->1vw=3.75px, 100px=100/3.75=26.666667vw

# json-server
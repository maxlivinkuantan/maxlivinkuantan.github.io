# MAXLIVIN' 关丹场地租赁 — 官方网站

## 📋 项目说明

这是为 **MAXLIVIN'** (关丹彭亨商业中心) 搭建的专业会议与活动场地租赁网站。网站采用现代极简设计风格,充分展示两个独立场地(接待厅和培训厅)的容纳人数、配套设备、实景图与定价,通过WhatsApp和在线表单两种渠道驱动预订咨询转化。

---

## 🎯 核心功能

### ✅ 已实现的功能
- **Hero区域动效** — GSAP时间轴驱动的进场动画,包含标题逐词显示、数字计数、背景视差效果
- **两间场地详情展示** — 包含实景照片画廊、容纳人数、配套设备列表、价格表
- **场地卡片网格** — 响应式设计,桌面两列、移动单列自适应
- **预订流程说明** — 四步清晰流程,带scroll-triggered动画揭示
- **在线咨询表单** — 多字段表单,支持表单提交反馈动画
- **FAQ手风琴** — GSAP驱动的展开/收起动画,支持单选(打开一个自动关闭其他)
- **地图与交通信息** — Google地图嵌入、营业时间、停车说明
- **关于品牌区域** — 临街外观照片+品牌故事+四个支柱价值
- **页脚导航** — 多列链接导航、版权信息
- **移动端响应式** — 完整的移动端适配,包括汉堡菜单导航、sticky底部CTA、浮动WhatsApp按钮
- **粘性头部** — 滚动时header自动显示边框和阴影

### 💌 联系方式集成
- **WhatsApp咨询** — Angie (012-983 8829) 和 Siow (019-989 3163)
- **邮箱** — maxlivinkuantan@gmail.com
- **浮动按钮** — 桌面端固定右下角,移动端固定在sticky-cta上方
- **表单自动预填** — 点击场地卡片的"查看详情"会自动在表单中选中对应场地

---

## 📁 文件结构

```
venue-site/
├── index.html              # 完整页面(单页应用)
├── css/
│   ├── tokens.css          # 设计系统变量(色彩、字体、间距)
│   └── main.css            # 主样式表(包含所有组件和响应式布局)
├── js/
│   ├── gsap.min.js         # GSAP核心库(v3)
│   ├── ScrollTrigger.min.js # GSAP ScrollTrigger插件(滚动联动)
│   └── main.js             # 应用逻辑(导航、动效、表单、FAQ等)
└── images/
    ├── logo.png            # MAXLIVIN'品牌Logo(红底白字)
    ├── hero.jpg            # Hero背景图(接待大厅实景)
    ├── storefront.jpg      # 临街外观
    ├── reception_*.jpg     # 接待厅实景(5张)
    ├── training_*.jpg      # 培训厅实景(5张)
    └── pantry.jpg          # 茶水间
```

---

## 🚀 部署指南

### 最简单的方式 — 直接使用(无需任何工具)

1. **上传所有文件到你的虚拟主机**
   - 保持文件夹结构完全一致
   - 确保 `index.html` 在根目录

2. **访问网站**
   ```
   https://yourdomain.com/index.html
   ```
   或配置Web服务器使 `/` 自动指向 `index.html`

### 本地测试

**使用Python(推荐,最简单)**
```bash
cd venue-site
python3 -m http.server 8080
# 打开 http://localhost:8080
```

**使用Node.js**
```bash
npm install -g http-server
cd venue-site
http-server -p 8080
```

**使用VS Code Live Server**
- 安装扩展 "Live Server"
- 右键 `index.html` → "Open with Live Server"

---

## 🎨 设计系统 & 品牌色

| 元素 | 色值 | 用途 |
|------|------|------|
| 主背景 | #FAFAF7 | 页面底色(暖白) |
| 卡片背景 | #F1EFE9 | 卡片/区块底色 |
| 主文字 | #1C1B19 | 标题和正文 |
| 次文字 | #6B6862 | 说明文本/灰色 |
| 分隔线 | #DEDACF | 细线分隔 |
| **品牌红** | **#C8102E** | 强调色、CTA按钮、logo |
| 深红 | #9C0C23 | hover/active状态 |

**字体**
- 展示字体 — Archivo (正体用于"MAX",斜体用于"LIVIN'")
- 正文字体 — Inter (克制易读的无衬线)
- 数据字体 — JetBrains Mono (价格、数字)

---

## ⚙️ 如何修改内容

### 1. 修改场地信息

打开 `index.html`,搜索对应段落:

**接待厅价格**
```html
<table class="price-table">
  <tr><td>按小时（最少 2 小时起）</td><td>RM 80 起</td></tr>
  ...
</table>
```

**培训厅容纳人数**
```html
<div class="spec-item">
  <div class="num">40<span class="unit">人</span></div>
  <div class="label">最大容纳（剧场式）</div>
</div>
```

### 2. 修改联系方式

搜索并替换:
- `012-983 8829` → 新的 WhatsApp 号码
- `019-989 3163` → 另一个 WhatsApp 号码
- `maxlivinkuantan@gmail.com` → 新邮箱
- `A9, Jalan Haji Ahmad 9, Sri Pahang Business Centre, 25300 Kuantan, Pahang` → 新地址

### 3. 修改营业时间

```html
<div class="location-hours">
  <span class="day">星期一 – 星期五</span><span class="time">09:00 – 18:00</span>
  <span class="day">星期六</span><span class="time">09:00 – 14:00</span>
  ...
</div>
```

### 4. 修改Hero标题

```html
<h1 class="hero-title">
  <span class="line"><span class="word">MEET.</span></span>
  <span class="line"><span class="word italic-accent">Train.</span> <span class="word">Host.</span></span>
</h1>
```

### 5. 更换图片

- 用同名的新图片直接替换 `images/` 文件夹中的文件
- 确保图片尺寸和宽高比适当(见下文优化建议)

---

## 📸 图片优化建议

| 用途 | 建议尺寸 | 说明 |
|------|---------|------|
| hero.jpg | 1920×1440 | 16:12 比例,会被裁切为background-cover |
| 卡片图(4:3) | 1200×900 | 接待厅和培训厅卡片 |
| 画廊大图 | 1200×1440 | 详情页左侧主图(4:3) |
| 画廊小图 | 800×960 | 详情页右侧副图(4:5) |
| logo | 400×200 | 红底白字,PNG格式(透明或红底都可) |
| 临街外观 | 1200×1440 | About区域用(4:5) |

**压缩建议**
- 使用 TinyPNG / Squoosh.app 压缩
- 将JPG质量设置在 75-85% (较少损失,文件小)
- 文件目标:每张 80-150 KB

---

## 📱 响应式断点

| 设备 | 宽度 | 调整 |
|------|------|------|
| 桌面 | 1200px+ | 两列网格、完整导航栏 |
| 平板 | 880px-1199px | 一列网格、部分隐藏导航 |
| 手机 | <640px | 单列布局、汉堡菜单、sticky底部CTA |

---

## 🔧 关键动效说明

### Hero进场时间轴(Timeline)
- Eyebrow 0.15s
- 标题逐词显示 0.25s (stagger 0.08s)
- 副标题 0.55s
- CTA按钮 0.7s (stagger 0.08s)
- 统计数字 0.85s

### Scroll Reveal
- `.reveal` 元素在进入视口 85% 位置时触发
- 持续时间 0.9s, expo.out缓动

### Count-up (数字动画)
- Hero 统计数字 — 1.4s 从 0 计数
- Spec 数字 (场地详情) — 1.2s 从 0 计数
- 触发时机 — 元素进入视口 95% 位置

### FAQ 手风琴
- 展开/收起 0.4s
- power2.inOut 缓动
- 打开一个自动关闭其他

---

## 🔐 表单处理(待接入后端)

目前表单提交在前端只显示成功提示,**需要接入真实后端**。

### 建议的集成方式

**方案 1 — Formspree (最简单)**
```javascript
// js/main.js 中的表单提交部分改为:
bookingForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(bookingForm);
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData
  });
  // ... 显示成功提示
});
```

**方案 2 — Make.com / Zapier (自动化工作流)**
- 接收表单数据 → 发送邮件/WhatsApp → 保存到Google Sheet

**方案 3 — 自建后端(PHP / Node.js)**
```php
// 接收数据 → 验证 → 保存数据库 → 发邮件提醒
```

---

## ⚡ 性能优化建议

✅ **已做好的优化**
- 关键字体预加载(Google Fonts preconnect)
- GSAP库缩小版(gsap.min.js + ScrollTrigger.min.js)
- CSS变量系统,减少重复代码
- 图片优化(压缩、适当尺寸)

🎯 **进一步优化空间**
1. **图片懒加载** — 添加 `loading="lazy"` 属性(已添加)
2. **WebP格式** — 用WebP替代JPG可减少 30% 文件大小
3. **CDN加速** — 部署到CDN(如Cloudflare、AWS CloudFront)
4. **Service Worker** — 离线缓存(PWA)
5. **代码分割** — 将js分成多个chunk(如果项目复杂)

---

## 🐛 已知限制 & 常见问题

### Q: Google地图为什么不显示?
**A:** 你的部署环境的防火墙可能拦截了maps.google.com。在真实网络环境中会正常加载。若需完全离线,可用静态地图图片替代。

### Q: 表单提交后数据去哪了?
**A:** 目前只是前端演示。需接入后端API或第三方服务(见表单处理章节)。

### Q: 如何添加更多场地?
**A:** 复制现有场地卡片和详情区块,修改数据即可。建议保持设计一致。

### Q: 能否改成其他语言?
**A:** 可以,全部文本都在HTML中,直接替换即可。CSS和JS无需改动。

### Q: 动效在手机上卡顿?
**A:** 这可能是因为手机性能不足。可在 `js/main.js` 中减少动效数量或缩短持续时间。

---

## 📞 技术支持

网站纯静态HTML+CSS+JS,无数据库依赖,部署非常简单。

如遇到问题:
1. 检查浏览器控制台是否有JavaScript错误(F12 → Console)
2. 确保所有文件路径正确(尤其是 css/ js/ images/)
3. 清空浏览器缓存后重新刷新
4. 确保Web服务器正确配置MIME类型(尤其是.js文件)

---

## 📄 许可与版权

本网站代码由Claude (Anthropic) 开发。
设计和内容 © 2026 MAXLIVIN' Kuantan. All rights reserved.

---

**网站上线日期**: 2026-06-19  
**最后更新**: 2026-06-19

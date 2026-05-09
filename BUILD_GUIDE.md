# 🌍 个人学术网站 - 构建指导

## 项目概述

为天然地震学研一学生构建的个人学术展示网站，用于项目求职和学术成果展示。

---

## 1. 设计规范

| 维度 | 规范 |
|------|------|
| **风格** | 苹果产品展示页风格 — 极简、大量留白、大字体标题 |
| **配色** | 纯黑白灰，无彩色渐变、无蓝紫色 |
| **字体** | 系统默认字体栈（Segoe UI / PingFang SC / Helvetica Neue） |
| **动效** | 仅项目卡片悬停交互，其余区域无夸张动画 |
| **组件** | 无轮播、无进度条、无花哨图标，拒绝"AI 味" |

### 配色方案

| 用途 | 亮色主题 | 暗色主题 |
|------|----------|----------|
| 背景 | `#ffffff` | `#1a1a1a` |
| 次级背景 | `#f5f5f7` | `#2a2a2c` |
| 主文字 | `#1d1d1f` | `#f5f5f7` |
| 次级文字 | `#6e6e73` | `#a1a1a6` |
| 边框 | `#d2d2d7` | `#48484a` |
| 卡片背景 | `#ffffff` | `#2a2a2c` |

---

## 2. 文件结构

```
my_website/
├── index.html          # 主页面（单页结构）
├── css/
│   └── style.css       # 全部样式（含主题变量、响应式）
├── js/
│   ├── theme.js        # 主题切换逻辑
│   └── i18n.js         # 中英文切换逻辑
├── images/
│   ├── avatar.jpg      # 个人头像（占位）
│   ├── project-1.jpg   # 项目1封面（地球照片）
│   ├── project-2.jpg   # 项目2封面（地球照片）
│   ├── project-3.jpg   # 项目3封面（地球照片）
│   └── project-4.jpg   # 项目4封面（地球照片）
└── BUILD_GUIDE.md      # 本文件
```

---

## 3. 页面结构（单页滚动）

```
┌──────────────────────────────┐
│         导航栏（固定顶部）      │
│  Logo   首页 关于 技能 项目   │
│  论文 联系    [🌙/☀️] [中/EN] │
├──────────────────────────────┤
│        Hero 区               │
│  姓名 · 研究方向 · 一句话简介   │
├──────────────────────────────┤
│        关于我                │
│  教育背景 · 研究兴趣 · 个人介绍  │
├──────────────────────────────┤
│        技能                 │
│  地震学相关技能标签 / 技术栈    │
├──────────────────────────────┤
│        项目展示              │
│  4个项目卡片（2x2 网格布局）   │
│  悬停：卡片上浮 + 阴影加深      │
├──────────────────────────────┤
│        论文发表              │
│  论文列表 · 时间 · 期刊 · DOI  │
├──────────────────────────────┤
│        联系方式              │
│  邮箱 · GitHub · ORCID 等    │
├──────────────────────────────┤
│        页脚                 │
│  Copyright © 2026           │
└──────────────────────────────┘
```

---

## 4. 技术实现要点

### 4.1 主题切换（`theme.js`）

- 使用 CSS 自定义属性（`--bg`, `--text` 等）定义在 `:root`
- 暗色主题通过 `body.dark` 覆盖变量值
- 使用 `localStorage` 记录用户偏好
- 按钮在导航栏右上角，☀️/🌙 图标切换

### 4.2 中英文切换（`i18n.js`）

- 使用 `data-i18n` 属性标记需要翻译的 DOM 元素
- 维护一个 `zh` / `en` 翻译映射对象
- 使用 `localStorage` 记录语言偏好
- 按钮显示 "中/EN" 或 globe icon

### 4.3 项目卡片悬停动效

```
默认状态：卡片无阴影，与背景融合
悬停状态：
  - transform: translateY(-8px) scale(1.02)
  - box-shadow 从无到轻微阴影
  - transition: 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)
  - 卡片内图片轻微缩放 scale(1.05)
```

### 4.4 响应式

- 桌面：2x2 项目卡片网格
- 平板：1x4 纵向卡片
- 手机：单列布局，导航折叠为汉堡菜单

---

## 5. 双语内容

### Hero 区

| | 中文 | English |
|------|------|---------|
| 标题 | 张明远 | Zhang Mingyuan |
| 副标题 | 天然地震学 · 研一 | Seismology · First-Year Graduate Student |
| 简介 | 探索地球内部的震动信号，揭示地壳运动的奥秘 | Exploring seismic signals to uncover the dynamics of Earth's crust |

### 关于我

| | 中文 | English |
|------|------|---------|
| 段落 | 我是一名天然地震学方向的硕士研究生，目前就读于中国地震局地质研究所。我的研究聚焦于地震定位、震源机制解以及地壳结构成像。我热衷于通过地震波形数据理解地球内部的物理过程，并致力于将研究成果应用于地震危险性评估。 | I am a first-year graduate student in seismology at the Institute of Geology, China Earthquake Administration. My research focuses on earthquake location, focal mechanism solutions, and crustal structure imaging. I am passionate about understanding the physical processes inside the Earth through seismic waveform data and applying research findings to seismic hazard assessment. |

### 技能

| 分类 | 技能 | 
|------|------|
| 编程语言 | Python, MATLAB, Fortran, Shell |
| 地震学工具 | ObsPy, SAC, GMT, CPS, TauP |
| 数据处理 | Pandas, NumPy, SciPy, Matplotlib |
| 其他工具 | Git, LaTeX, Linux, Docker |

### 项目（4个）

| 项目 | 中文标题 | 英文标题 | 描述 |
|------|----------|----------|------|
| 1 | 基于双差定位法的地震重定位研究 | Earthquake Relocation Using Double-Difference Method | 利用双差定位算法对区域地震目录进行重定位，提高震源位置精度 |
| 2 | 接收函数与H-κ叠加地壳结构成像 | Crustal Structure Imaging with Receiver Functions & H-κ Stacking | 基于远震接收函数方法反演台站下方地壳厚度与波速比 |
| 3 | 地震目录统计分析工具 | Seismic Catalog Statistical Analysis Toolkit | 开发 Python 工具包用于地震目录的完整性评估与统计分析 |
| 4 | 基于机器学习的震相自动拾取 | Machine Learning-Based Seismic Phase Picking | 利用深度学习模型实现P波和S波震相的自动识别与拾取 |

### 论文发表

| # | 论文 | 期刊 | 年份 |
|---|------|------|------|
| 1 | 基于密集台阵的某地区地壳结构成像研究 | 地球物理学报 | 2025 |
| 2 | 某某断裂带地震活动性统计分析 | Seismological Research Letters | 2025 |

### 联系方式

| | |
|------|------|
| 邮箱 | zhangmingyuan@example.com |
| GitHub | github.com/zhangmingyuan |
| ORCID | orcid.org/0000-0000-0000-0000 |
| 所在城市 | 北京, 中国 |

---

## 6. 地球占位图片

项目卡片封面使用 Unsplash 免费地球/地质相关图片：

| 项目 | 图片关键词 | 推荐 Unsplash URL |
|------|-----------|-------------------|
| 1 | tectonic plate | `https://source.unsplash.com/800x500/?tectonic,earth` |
| 2 | seismic wave | `https://source.unsplash.com/800x500/?seismic,geology` |
| 3 | earth data | `https://source.unsplash.com/800x500/?earth,data` |
| 4 | earthquake fault | `https://source.unsplash.com/800x500/?earthquake,fault` |

---

## 7. 实施步骤

### Step 1：创建 HTML 骨架
- 搭建完整页面结构（8个区域）
- 添加 `data-i18n` 属性到所有文本元素
- 引入 CSS 和 JS 文件

### Step 2：编写 CSS 样式
- 定义 `:root` CSS 变量（亮色主题）
- 定义 `body.dark` 变量覆盖（暗色主题）
- 实现各区域布局（Flexbox + Grid）
- 实现项目卡片悬停动效
- 实现响应式媒体查询

### Step 3：编写 JavaScript
- `theme.js`：主题切换 + localStorage 持久化
- `i18n.js`：语言切换 + localStorage 持久化

### Step 4：填充内容与测试
- 填入完整中英文内容
- 跨浏览器测试
- 响应式测试

---

## 8. 验收标准

- [ ] 亮色/暗色主题一键切换，刷新后保持
- [ ] 中英文一键切换，刷新后保持
- [ ] 导航栏锚点跳转平滑滚动
- [ ] 项目卡片悬停动画流畅自然
- [ ] 桌面/平板/手机三端显示正常
- [ ] 所有图片加载正常
- [ ] 页面对比度符合可访问性标准

---

> ⚠️ 请确认以上内容无误后，回复"开始"或"继续"，我将按步骤开始构建网站。

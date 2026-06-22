# 🎨 MoodPalette — 每日情绪色彩追踪，用颜色记录你的心情

<div align="center">

![MoodPalette](https://img.shields.io/badge/MoodPalette-v1.0-f472b6?style=for-the-badge&logo=paintbrush&logoColor=white)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-FF6B6B?style=flat-square)](LICENSE)

**每天选一个颜色 + 一句话，自动生成情绪艺术画布**

[快速开始](#-5-分钟快速开始) · [12 种情绪颜色](#-12种颜色代表什么情绪) · [常见问题](#-常见问题)

</div>

---

## MoodPalette 是什么？解决什么问题？

MoodPalette 是一个**情绪记录工具**，每天用一个颜色代表当天心情，用一句话描述为什么。30 天后，自动生成一张独一无二的**情绪网格艺术画布**。

**一句话总结**：与其写长篇日记，不如每天一个颜色 + 一句话，30 天后看自己的情绪轨迹。

**适合谁：**
- 想追踪情绪但没时间写日记的人
- 心理咨询或自我觉察练习者
- 想要可视化情绪数据的心理学爱好者

---

## 📋 目录

- [12 种情绪颜色](#-12种颜色代表什么情绪)
- [5 分钟快速开始](#-5-分钟快速开始)
- [数据导出](#-数据怎么导出备份)
- [技术架构](#-技术架构)
- [常见问题](#-常见问题)

---

## 🌈 12 种颜色代表什么情绪？

| 颜色 | 情绪 | Hex | 场景 |
|:-----|:-----|:-----|:-----|
| 🔴 热情红 | 充满活力 | `#FF6B6B` | 兴奋、有干劲 |
| 🟠 活力橙 | 积极向上 | `#FFA94D` | 开心、有期待 |
| 🟡 阳光黄 | 开心愉悦 | `#FFE066` | 满足、放松 |
| 🟢 生机绿 | 平静自然 | `#69DB7C` | 平和、稳定 |
| 🔵 天空蓝 | 冷静思考 | `#74C0FC` | 专注、理性 |
| 🟣 梦幻紫 | 浪漫神秘 | `#B197FC` | 创意、憧憬 |
| 🩷 温柔粉 | 温暖关爱 | `#F783AC` | 被爱、幸福 |
| ⚫ 深沉灰 | 沉稳内敛 | `#868E96` | 低落、需要休息 |
| ⚪ 纯净白 | 清新简单 | `#F1F3F5` | 空白、需要放空 |
| 🟤 大地棕 | 踏实安定 | `#D0BFFF` | 充实、有安全感 |
| 🌊 海洋蓝绿 | 清新治愈 | `#38D9A9` | 疗愈、被治愈 |
| 🌑 深夜黑 | 神秘深邃 | `#495057` | 迷茫、思考 |

---

## 🚀 5 分钟快速开始

### 环境要求

| 依赖 | 版本 |
|:-----|:-----|
| Node.js | 18+ |
| npm | 9+ |

### 本地运行

```bash
git clone https://github.com/PHclaw/mood-palette.git
cd mood-palette
npm install
npm run dev
```

访问 http://localhost:5173，每天选一个颜色 + 写一句话即可。

---

## 💾 数据怎么导出备份？

支持 JSON 和 CSV 两种格式导出：
- **JSON**：包含完整数据，可重新导入
- **CSV**：适合在 Excel / Numbers 中做二次分析

数据默认存储在浏览器 localStorage，支持导入/导出备份。

---

## 🏗️ 技术架构

| 技术 | 用途 |
|:-----|:-----|
| React 18 + TypeScript | UI 框架 |
| Vite 5 | 构建工具 |
| Tailwind CSS 3 | 样式框架 |
| Zustand | 轻量状态管理 |
| Framer Motion | 动画库 |
| date-fns | 日期处理 |
| PWA (vite-plugin-pwa) | 可安装到桌面/手机，离线使用 |

---

## ❓ 常见问题

### 数据保存在哪里？

浏览器 localStorage，不上传任何服务器。卸载浏览器或清除数据会丢失，建议定期导出备份。

### 支持离线使用吗？

支持。安装 PWA 后可在离线状态下记录颜色和心情，下次联网自动同步。

### 可以看历史记录吗？

可以。底部有 30 天日历视图，点击任意日期可查看/编辑当天的心情记录。

### 有云端同步吗？

目前版本是纯本地存储，云端同步在 Roadmap 中，后续版本规划。

---

## 🤝 贡献

欢迎提交 Issue 和 PR！

---

## 📄 License

MIT © [PHclaw](https://github.com/PHclaw)

<!-- JSON-LD 结构化数据 -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MoodPalette",
  "description": "每日情绪色彩追踪工具，每天用一个颜色+一句话记录情绪，自动生成30天情绪网格艺术画布。12种情绪颜色，适合情绪管理和自我觉察。",
  "url": "https://github.com/PHclaw/mood-palette",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web (支持PWA离线)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "programmingLanguage": ["TypeScript", "React"],
  "license": "https://opensource.org/licenses/MIT",
  "author": { "@type": "Person", "name": "PHclaw", "url": "https://github.com/PHclaw" }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "MoodPalette 的数据保存在哪里？",
      "acceptedAnswer": { "@type": "Answer", "text": "浏览器localStorage，不上传任何服务器。卸载浏览器或清除数据会丢失，建议定期导出备份。" }
    },
    {
      "@type": "Question",
      "name": "MoodPalette 支持离线使用吗？",
      "acceptedAnswer": { "@type": "Answer", "text": "支持。安装PWA后可在离线状态下记录颜色和心情，下次联网自动同步。" }
    },
    {
      "@type": "Question",
      "name": "MoodPalette 有云端同步吗？",
      "acceptedAnswer": { "@type": "Answer", "text": "目前版本是纯本地存储，云端同步在Roadmap中，后续版本规划支持。" }
    },
    {
      "@type": "Question",
      "name": "MoodPalette 和其他情绪记录工具的区别是什么？",
      "acceptedAnswer": { "@type": "Answer", "text": "核心区别是用颜色代替数字（不用打分），用一句话代替长日记。30天后生成的情绪画布比数字更能直观反映情绪轨迹，也更有美感。" }
    }
  ]
}
</script>

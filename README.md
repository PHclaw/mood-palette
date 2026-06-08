# 🎨 MoodPalette

> 每日情绪色彩追踪 · 用颜色记录心情

**MoodPalette** 让你每天用一个颜色 + 一句话记录情绪，自动生成独特的情绪艺术画布。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)

## ✨ Features

- 🎯 **每日一色** - 从精心设计的调色板中选择一个颜色
- ✍️ **情绪一句话** - 用简短的话描述今天的心情
- 🖼️ **艺术画布** - 自动生成独特网格艺术图案
- 📅 **历史回顾** - 查看过往的情绪轨迹
- 📱 **PWA** - 可安装到桌面/手机，离线使用
- 🔄 **数据导出** - JSON/CSV 格式备份

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 🛠️ Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Zustand (状态管理)
- Framer Motion (动画)
- date-fns (日期处理)
- PWA (vite-plugin-pwa)

## 📁 Project Structure

```
src/
├── components/       # UI 组件
├── hooks/           # 自定义 Hooks
├── store/           # Zustand store
├── utils/           # 工具函数
├── App.tsx
└── main.tsx
```

## 🎨 Color System

内置 12 种情绪色调，每种代表不同情绪状态：

| 颜色 | 情绪 | Hex |
|------|------|-----|
| 🔴 热情红 | 充满活力 | #FF6B6B |
| 🟠 活力橙 | 积极向上 | #FFA94D |
| 🟡 阳光黄 | 开心愉悦 | #FFE066 |
| 🟢 生机绿 | 平静自然 | #69DB7C |
| 🔵 天空蓝 | 冷静思考 | #74C0FC |
| 🟣 梦幻紫 | 浪漫神秘 | #B197FC |
| 🩷 温柔粉 | 温暖关爱 | #F783AC |
| ⚫ 深沉灰 | 沉稳内敛 | #868E96 |
| ⚪ 纯净白 | 清新简单 | #F1F3F5 |
| 🟤 大地棕 | 踏实安定 | #D0BFFF |
| 🌊 海洋蓝绿 | 清新治愈 | #38D9A9 |
| 🌑 深夜黑 | 神秘深邃 | #495057 |

## 📖 License

MIT © PHclaw

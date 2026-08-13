---
title: '用 Astro 搭建我的第一个个人网站'
description: '零成本、免服务器，把个人编程网站部署到 GitHub Pages 的全过程记录。'
pubDate: 2026-08-13
tags: ['Astro', '前端', 'GitHub Pages']
---

## 为什么选 Astro

作为一个不想折腾服务器、又想要好性能的学生，[Astro](https://astro.build)
几乎是为我量身定做的：

- **默认零 JS**：内容站加载飞快，首屏体验好。
- **组件灵活**：需要交互时再嵌 React / Vue / Svelte。
- **部署简单**：一条 GitHub Actions 就能上 GitHub Pages，免费。

## 核心步骤

1. 初始化项目，写好 `src/pages` 下的页面。
2. 用 Content Collections 管理博客文章（Markdown）。
3. 加一个 `deploy.yml` 工作流，推送即部署。

```bash
npm run dev      # 本地预览
npm run build    # 构建静态站点
```

## 小结

搭网站最难的从来不是技术，而是**先动手**。这个站点本身就是个例子——
从想法到上线，不到一小时。

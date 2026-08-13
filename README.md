# 我的编程空间（个人网站）

一个基于 [Astro](https://astro.build) 构建、零成本部署在 **GitHub Pages** 的
个人编程网站。包含首页、博客、项目、关于四大板块，自带 RSS 与站点地图。

## 本地预览

```bash
npm install
npm run dev      # 打开 http://localhost:4321
```

## 构建

```bash
npm run build    # 产物在 dist/
npm run preview  # 本地预览构建结果
```

## 如何改成你自己的

1. 改 `src/consts.ts`：站点标题、作者名、社交链接。
2. 写博客：在 `src/content/blog/` 下新建 `.md` 文件，按已有格式填好 frontmatter
   （`title` / `description` / `pubDate` / `tags`）。
3. 改项目：编辑 `src/pages/projects.astro` 里的 `projects` 数组。
4. 改 `astro.config.mjs` 里的 `site` 为你自己的 Pages 地址。

## 部署到 GitHub Pages

仓库已包含 `.github/workflows/deploy.yml`：

1. 把代码推到 GitHub 仓库（默认监听 `main` 分支）。
2. 仓库 **Settings → Pages → Build and deployment → Source** 选择
   **GitHub Actions**。
3. 推送后 Actions 会自动构建并发布，站点地址为
   `https://<用户名>.github.io/<仓库名>/`。

> 想用用户主页（`https://<用户名>.github.io/`）就把仓库命名为
> `<用户名>.github.io`，并把 `astro.config.mjs` 的 `site` 改成对应地址。

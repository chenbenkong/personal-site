import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages 时改成你的地址：
//   项目页 -> https://<用户名>.github.io/<仓库名>/
//   用户页 -> https://<用户名>.github.io/
// 想加站点地图(sitemap)时，安装 @astrojs/sitemap 并在 integrations 里启用。
export default defineConfig({
  site: 'https://chenbenkong.github.io/personal-site',
  trailingSlash: 'ignore',
});

# Portfolio Website

## 部署到GitHub Pages指南

本文档提供了将此Next.js项目部署到GitHub Pages的详细步骤。

### 准备工作

1. **创建GitHub仓库**
   - 登录GitHub账户
   - 点击右上角的"+"按钮，选择"New repository"
   - 输入仓库名称（例如：`portfolio-website`）
   - 选择公开（Public）或私有（Private）
   - 点击"Create repository"

2. **初始化本地Git仓库并推送到GitHub**
   ```bash
   # 在项目根目录下初始化Git仓库
   git init
   
   # 添加所有文件到暂存区
   git add .
   
   # 提交更改
   git commit -m "Initial commit"
   
   # 添加远程仓库
   git remote add origin https://github.com/你的用户名/portfolio-website.git
   
   # 推送到GitHub
   git push -u origin main
   ```

### 配置项目

1. **更新next.config.mjs文件**
   - 已添加`output: 'export'`配置以生成静态文件
   - 取消注释并修改`basePath`和`assetPrefix`，将`your-repo-name`替换为你的GitHub仓库名称
   ```javascript
   basePath: '/portfolio-website',
   assetPrefix: '/portfolio-website/',
   ```

2. **package.json**
   - 已添加部署脚本
   - 使用`npm run deploy`命令可以构建项目并准备部署文件

3. **GitHub Actions工作流**
   - 已创建`.github/workflows/deploy.yml`文件
   - 此工作流会在推送到main分支时自动构建并部署网站

### 启用GitHub Pages

1. 在GitHub仓库页面，点击"Settings"
2. 在左侧菜单中，点击"Pages"
3. 在"Source"部分，选择"GitHub Actions"
4. 推送代码到main分支后，GitHub Actions将自动构建并部署网站

### 访问你的网站

部署完成后，你的网站将可以通过以下URL访问：
```
https://你的用户名.github.io/portfolio-website/
```

### 注意事项

1. 首次部署可能需要几分钟时间
2. 如果你的仓库是私有的，确保已启用GitHub Pages功能
3. 如果遇到路径问题，检查`next.config.mjs`中的`basePath`和`assetPrefix`设置是否正确
4. 图片和其他静态资源的引用路径需要考虑`basePath`的影响

### 本地测试

在推送到GitHub之前，你可以在本地测试静态导出：

```bash
# 构建静态文件
npm run export

# 使用简单的HTTP服务器预览
npx serve out
```

这将帮助你确认静态导出是否正常工作，然后再部署到GitHub Pages。
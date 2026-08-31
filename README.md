# 杨焕琳 · 运营 / 营销 / 市场 作品集

个人作品集网站，求职方向：**内容运营 · 用户运营 · 品牌营销 · 整合营销 · 海外运营**

## 在线访问

🌐 https://yhllynn2-create.github.io/yhllynn-portfolio/

## 技术栈

- **纯静态站点**：HTML5 + CSS3 + 极少量原生 JS（明暗主题切换 / 滚动导航高亮 / 滚动显现动画）
- **零依赖、零构建**：双击 `index.html` 即可在浏览器打开
- **部署**：GitHub Pages
- **设计语言**：参照模板 https://ingridguan11-commits.github.io/portfolio  —— 暖灰白底 + 深红点缀 + Bento 卡片网格

## 项目结构

```
yhllynn-portfolio/
├── index.html          # 单页站点全部内容
├── styles.css          # 设计系统（CSS 变量、明暗主题、响应式）
├── script.js           # 主题切换 / 导航高亮 / 滚动动画
├── assets/
│   ├── avatar.jpg      # 头像（备用，未使用）
│   ├── qr-portfolio.png    # 作品集网址的红色二维码
│   └── qr-portfolio-bw.png # 黑白版二维码（打印/扫描更稳）
├── .nojekyll           # 关闭 Jekyll 处理
├── .gitignore
└── README.md
```

## 内容栏目

| 栏目 | 内容 |
|---|---|
| Hero | 居中布局：徽章 + 姓名（黑红双色字）+ 5个岗位副标题 + 3按钮（查看作品/简历/AI作品集） |
| 数据亮点条 | 10万+粉 / 1000万+播放 / GMV +66.49% / 235万营收 / 100万订单 / 12场赛事 |
| 关于我 | JD 匹配个人介绍 + 4段自述 + 4个求职意向徽章 |
| AI Native | 4张卡片：AI自媒体IP搭建 / AI辅助内容创作 / Obsidian+AI知识库 / Codex数据看板项目管理 |
| 核心作品 | Bento 网格：AI作品集 / 益果兴乡 / 活遗活现 / 自媒体 / 同程海外运营 |
| 实习经历 | 4段时间线：联想 → 影石 → 同程 → TCL + 学生会/模联折叠补充 |
| 技能栈 | 运营营销 + 数据能力 + AI 工具链 |
| 联系 | 邮箱 / 电话 / GitHub / AI 作品集 4 张卡 |

## 二维码与简历分享

仓库 `assets/` 下放了现成的二维码图片（红/黑两版）：

- 简历上直接放置 `qr-portfolio.png`（或黑白版 `qr-portfolio-bw.png`），旁注"作品集"
- 二维码指向的网址是固定的，**后续修改网站内容不会改变网址和二维码**

## 修改与发布流程

1. 编辑本地文件（`index.html` / `styles.css` / `script.js` / `assets/*`）
2. 本地预览：在仓库目录下跑 `python -m http.server 8088` → 浏览器访问 http://localhost:8088
3. 推送：`git add -A && git commit -m "更新内容" && git push`
4. GitHub Pages 自动部署，约 30 秒后 https://yhllynn2-create.github.io/yhllynn-portfolio/ 即生效

## 关联作品

🤖 **AI 作品集**：https://github.com/yhllynn2-create/yhllynn-ai-portfolio
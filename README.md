# 个人简介网站

这是一个使用现代前端技术栈构建的个人简介网站，部署在Cloudflare上。网站展示了个人信息、技能和联系方式。

## 技术栈

- **前端框架**: React 18.3.1
- **编程语言**: TypeScript
- **构建工具**: Vite 5.3.1
- **样式框架**: Tailwind CSS
- **图标库**: lucide-react
- **部署平台**: Cloudflare

## 项目功能

- 个人信息展示
- 技能列表展示
- 联系信息和社交链接
- 响应式设计，适配不同设备尺寸

## 本地开发

1. 克隆仓库
```bash
git clone https://github.com/Rebecca9715/profile.git
cd profile
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 打开浏览器访问
```
http://localhost:5173
```

## 构建与部署

1. 构建生产版本
```bash
npm run build
```

2. 部署到Cloudflare
   - 登录Cloudflare账号
   - 选择Pages服务
   - 连接GitHub仓库
   - 配置构建命令和输出目录
   - 部署网站

## 项目结构
```
project/
├── .gitignore
├── index.html           # 入口HTML文件
├── package.json         # 项目依赖和脚本
├── README.md            # 项目说明文档
├── src/
│   ├── App.tsx          # 主应用组件
│   ├── index.css        # 全局样式
│   ├── main.tsx         # 入口文件
│   └── vite-env.d.ts    # Vite环境类型定义
├── tailwind.config.js   # Tailwind配置
├── tsconfig.app.json    # TypeScript配置
├── tsconfig.json        # 通用TypeScript配置
├── tsconfig.node.json   # Node环境TypeScript配置
└── vite.config.ts       # Vite配置
```

## 联系方式

如果您有任何问题或建议，请通过以下方式联系我：

- 电子邮件: [rebeccawang@example.com](mailto:rebeccawang@example.com)
- GitHub: [Rebecca9715](https://github.com/Rebecca9715)

© 2023 Rebecca Wang. 保留所有权利。
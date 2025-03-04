# GIT ISSUES UTILS
将 github 项目所有的 issues 下载为 markdown 文件

## 使用步骤
1. 复制 setting.local.dist.js 文件为 setting.local.js
2. 添加对应的配置项
    1. GITHUB_URL： github api 路径，默认为 "http://api.github.com", 可以不配置
    2. GITHUB_OWNER: 项目所有者，如果为自己的资料库，即为自己的用户名，如果是组织的资料库，即为组织的名字
    3. GITHUB_TOKEN: 用户的token,
    4. GITHUB_REPO_NAME: 资料库名字
3. 执行 npm install
4. 执行 npm run build，即可将资料库中的 issues 下载到本地，dist 目录下
5. 可以使用 tyoero 等 markdown 查看软件进行查看



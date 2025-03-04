# GIT ISSUES UTILS
将 github 项目所有的 issues 下载为 markdown 文件

## 使用步骤
1. 复制 setting.local.dist.js 文件为 setting.local.js
2. 添加对应的配置项
    1. GITHUB_URL： github api 路径，默认为 "http://api.github.com", 可以不配置
    2. GITHUB_OWNER: 项目所有者，如果为自己的资料库，即为自己的用户名，如果是组织的资料库，即为组织的名字
    3. GITHUB_TOKEN: 用户的 token,
    4. GITHUB_REPO_NAME: 资料库名字
3. 执行 npm install
4. 执行 npm run build，即可将资料库中的 issues 下载到本地，dist 目录下
5. 可以使用 tyoero 等 markdown 查看软件进行查看

## Token 的生成步骤
1. 登录到你的GitHub账户。
2. 前往用户设置（Settings）。
3. 在左侧菜单中选择“开发者设置”（Developer settings）。
4. 选择“个人访问令牌”（Personal access tokens）。
5. 点击“生成新令牌”（Generate new token）。
6. 根据需要选择访问权限，然后点击“生成令牌”（Generate token）。
7. 将生成的令牌保存到安全的地方（比如环境变量），因为你以后无法再次查看这个令牌。


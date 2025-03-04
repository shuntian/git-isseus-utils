const fs = require('fs-extra');
const path = require('path');
const GithubAPI = require("./api");

(async () => {
    let page = 1;
    const per_page = 100;
    let hasMore = true;
    while(hasMore) {
        try {
            const result = await GithubAPI.getIssues(page, per_page);
            const issues = result.data;
            issues.forEach(item => {
                const { title, body, number } = item;
                fs.ensureDir(path.resolve(__dirname, '../dist'));
                fs.writeFileSync(path.resolve(__dirname, `../dist/${number.toString().padStart(3, '0')}_${title}.md`), body);
            })
            if (issues.length === per_page) {
                hasMore = true;
                page += 1;
            } else {
                hasMore = false;
            }
        } catch(error) {
            console.log(error.message);
        }
    }
    console.log('文档加载完成')
})();

const { default: axios } = require('axios');
const { GITHUB_URL, GITHUB_OWNER, GITHUB_TOKEN, GITHUB_REPO_NAME } = require('../../setting');

const baseURL = `${GITHUB_URL}/repos/${GITHUB_OWNER}/${GITHUB_REPO_NAME}/issues`;

class GithubAPI {
    static getIssues(page, per_page, direction = 'asc') {
        const url = baseURL;
        const acceptType = 'application/vnd.github.raw+json';
        const params = {
            page: page,
            per_page,
            direction,
        }
        return axios.get(url, {params, headers: {Accept: acceptType, Authorization: `Bearer ${GITHUB_TOKEN}`}})
    }
}

module.exports = GithubAPI;
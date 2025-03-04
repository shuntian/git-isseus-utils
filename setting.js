const settings = require('./setting.local');

const GITHUB_URL = settings.GITHUB_URL || 'https://api.github.com';
const GITHUB_OWNER = settings.GITHUB_OWNER || ''
const GITHUB_REPO_NAME = settings.GITHUB_REPO_NAME || '';
const GITHUB_TOKEN = settings.GITHUB_TOKEN || '';

const config = {
    GITHUB_URL: GITHUB_URL,
    GITHUB_OWNER: GITHUB_OWNER,
    GITHUB_REPO_NAME: GITHUB_REPO_NAME,
    GITHUB_TOKEN: GITHUB_TOKEN,
};

module.exports = config;
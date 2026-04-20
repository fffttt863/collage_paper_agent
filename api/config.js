/**
 * 接口基础配置 - 与后端连接时只需改这里
 */
export const config = {
  // 后端接口根地址（与其他人统一，不包含 /api/v1）
  baseURL: 'http://8.136.35.215:8006',

  // 请求超时时间（毫秒）- 增加到30秒
  timeout: 30000
};

export default config;

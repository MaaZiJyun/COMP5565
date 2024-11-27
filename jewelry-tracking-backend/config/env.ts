import dotenv from 'dotenv';
import path from 'path';

// 动态加载根目录中的 .env 文件
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

// 定义后端全局配置
const config = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  ROOT_API: process.env.ROOT_API || 'http://localhost:3000', // 默认值
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  DB_USER: process.env.DB_USER || 'root',
  DB_PASS: process.env.DB_PASS || '',
};

// 校验必需变量
if (!config.ROOT_API) {
  throw new Error('Missing environment variable: ROOT_API');
}

export default config;

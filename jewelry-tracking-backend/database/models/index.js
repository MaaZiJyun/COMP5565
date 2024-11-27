const { Sequelize } = require('sequelize'); // 引入 Sequelize
require('dotenv').config(); // 加载 .env 文件中的配置

// 初始化 Sequelize 实例 (从 .env 文件中读取数据库配置)
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', // 使用 PostgreSQL 数据库
  logging: false,      // 可选：关闭 SQL 日志
});

// 测试数据库连接
(async function testConnection() {
  try {
    await sequelize.authenticate(); // 测试是否可以连接数据库
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// 导出 Sequelize 实例
module.exports = sequelize;

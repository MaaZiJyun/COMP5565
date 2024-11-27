// db.js
import pkg from "pg";
const { Pool } = pkg; // 从默认导出中解构出 PoolF

// 配置 PostgreSQL 数据库连接
const pool = new Pool({
  user: "cailing",       // PostgreSQL 用户名
  host: "localhost",      // 数据库所在的主机
  database: "testing", // 数据库名称
  password: "password", // 数据库密码
  port: 5432,             // 默认 PostgreSQL 端口
});

export default pool;

// 文件路径：src/app/api/testingEvents/route.ts
import { NextResponse } from "next/server";
import pg from "pg";

// 配置 PostgreSQL 数据库连接
const pool = new pg.Pool({
    user: "cailing",        // PostgreSQL 用户名
    host: "localhost",       // 数据库地址
    database: "testing", // 数据库名称
    password: "password",     // 数据库密码
    port: 5432,              // PostgreSQL 默认端口
});

export async function GET() {
    try {
        // 查询数据库的所有事件
        const result = await pool.query("SELECT * FROM test_created_events ORDER BY created_at DESC");
        return NextResponse.json(result.rows); // 使用 Next.js 提供的 JSON 响应
    } catch (error) {
        // 检查 error 是否为对象并具有 message 属性
        if (error instanceof Error) {
            console.error("Error querying database:", error.message);
        } else {
            console.error("Unexpected error:", error);
        }
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

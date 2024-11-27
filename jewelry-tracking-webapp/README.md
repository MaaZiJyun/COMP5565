Clone project to local: 
```bash
git clone https://github.com/MaaZiJyun/COMP5565.git
```
## Set up Front-end
open a new terminal named "front".

```bash
cd jewelry-tracking-webapp
```

run the command to install dependencies

```bash
npm install
```

then run the webapp to see if there's any error

```bash
npm run dev
```

the front should run in the port 3000 (http://localhost:3000)

## Set up Backend

open a new terminal named "back", and run the command to go the directory of backend.

```bash
cd jewelry-tracking-backend
```

run the command to test if hardhat is available

```bash
npx hardhat node
```

run the command to deploy contracts

```bash
npx hardhat run scripts/deploy.ts --network localhost
```

get the address of the contract that has been deployed: (Example: 0x5FbDB2315678afecb367f032d93F642f64180aa3)

```bash
contractAddress: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
```

## Set up Database

run the command to go to the directory of database

```bash
cd jewelry-tracking-backend/database
```

run command to test if there's psql has been set up

```bash
psql --version
```

if not, then install PostgreSQL by the command below:

```bash
brew install postgresql
```

then run the command to view the list of database

```bash
psql -U <username> -d postgres
```

the output will be like: 

```
postgres=# \l
                                List of databases
      Name      |  Owner  | Encoding | Collate | Ctype |    Access privileges    
----------------+---------+----------+---------+-------+-------------------------
 fabricexplorer | cailing | UTF8     | C       | C     | =Tc/cailing            +
                |         |          |         |       | cailing=CTc/cailing    +
                |         |          |         |       | hyperledger=CTc/cailing
 postgres       | cailing | UTF8     | C       | C     | 
 template0      | cailing | UTF8     | C       | C     | =c/cailing             +
                |         |          |         |       | cailing=CTc/cailing
 template1      | cailing | UTF8     | C       | C     | =c/cailing             +
                |         |          |         |       | cailing=CTc/cailing
```

then create database named "testing"

```sql
CREATE DATABASE testing;
```

then change the basic setting in the file of db.js

```js
const pool = new Pool({
  user: "cailing",       // PostgreSQL 用户名
  host: "localhost",      // 数据库所在的主机
  database: "testing", // 数据库名称
  password: "password", // 数据库密码
  port: 5432,             // 默认 PostgreSQL 端口
});
```


Failed to insert event into database: error: relation "test_created_events" does not exist

```sql
CREATE TABLE test_created_events (
    id SERIAL PRIMARY KEY,
    event_name TEXT NOT NULL,
    event_date TIMESTAMP NOT NULL
);

```
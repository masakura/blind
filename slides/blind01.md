## 原理
```sql
-- SQLite3 の場合
select * from sqlite_master
```

* この SQL 文を実行するとテーブル名の一覧が取れる
  - でも、実際には SQL Injection で、好きなクエリの結果を表示させるのは意外と難しい

```sql
select * from items where id = 1
//                             ~ ここから自由になるので
```
